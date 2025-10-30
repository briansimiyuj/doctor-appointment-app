import { createContext, useContext, useState, useEffect } from "react"
import { DoctorStatsContextProps } from "../assets/contextProps/DoctorStatsContextProps"
import { useDoctorReviewsContext } from "./DoctorReviewsContext"
import { db } from "../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { useProfileContext } from "./ProfileContext"

export const DoctorStatsContext = createContext<DoctorStatsContextProps | null>(null)

export const DoctorStatsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>{

    const { reviews, averageRating, totalReviews, ratingDistribution, getDoctorReviews } = useDoctorReviewsContext(),
          { profile } = useProfileContext()

    const [stats] = useState({
        totalPatients: 150,
        todayAppointments: 10,
        completedAppointments: 120,
        cancelledAppointments: 5,
        noShowAppointments: 2,
        upcomingAppointments: 20,
        newPatientsThisMonth: 12,
        followUpAppointments: 6,
        totalAppointments: 130,
        totalRevenue: 45000,
    }),

    [doctorRating, setDoctorRating] = useState<number>(0),
    [loadingRating, setLoadingRating] = useState(false)

    const fetchDoctorProfileRating = async(doctorID: string) =>{

        try{

            setLoadingRating(true)

            const profileRef = doc(db, "profiles", doctorID),
                  profileSnap = await getDoc(profileRef)

            if(profileSnap.exists()){

                const data = profileSnap.data()

                setDoctorRating(data.rating || 0) 

            }

        }catch(error){

            console.error("Error fetching doctor profile rating:", error)

        }finally{

            setLoadingRating(false)

        }

    }

    useEffect(() =>{
    
        if(profile?._id){

            getDoctorReviews(profile._id)

            fetchDoctorProfileRating(profile._id) 
            
        }
    
    }, [profile?._id]) 

    useEffect(() =>{

        if(totalReviews > 0){

            setDoctorRating(averageRating) 

        }
        

    }, [averageRating, totalReviews])

    const ratings ={

        average: totalReviews > 0 ? averageRating : doctorRating,
        total: totalReviews,

        distribution:{
            5: ratingDistribution[5] ?? 0,
            4: ratingDistribution[4] ?? 0,
            3: ratingDistribution[3] ?? 0,
            2: ratingDistribution[2] ?? 0,
            1: ratingDistribution[1] ?? 0,
        }

    }

    const [performance] = useState({
        responseRate: 90,
        appointmentCompletionRate: 95,
        appointmentCancellationRate: 5,
        patientSatisfactionRate: 98,
        averageWaitingTime: 10
    })
    
    const normalizedReviews = reviews.map(review =>({

        ...review,
        comment: review.comment ?? ""

    })) 

    const value ={ 

        stats, 
        ratings, 
        reviews: normalizedReviews, 
        performance,
        fetchDoctorRating: fetchDoctorProfileRating, 
        loadingRating
            
    }

    return(

        <DoctorStatsContext.Provider value={value}>

            {children}

        </DoctorStatsContext.Provider>

    )

}

export const useDoctorStats = () =>{

    const context = useContext(DoctorStatsContext)

    if (!context) throw new Error('useDoctorStats must be used within DoctorStatsContextProvider')

    return context

}