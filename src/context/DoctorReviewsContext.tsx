import { createContext, useContext, useState, useEffect } from "react"
import { DoctorReviewsContextProps } from "../assets/contextProps/DoctorReviewsContextProps"
import { ReviewType } from "../assets/types/ReviewType"
import { db } from "../firebaseConfig"
import { collection, getDocs, orderBy, query, doc, updateDoc } from "firebase/firestore"

interface DoctorReviewsContextProviderProps{

    children: React.ReactNode

}

export const DoctorReviewsContext=createContext<DoctorReviewsContextProps | undefined>(undefined)

export const DoctorReviewsContextProvider:React.FC<DoctorReviewsContextProviderProps> = ({ children })=>{

    const [ratings, setRatings] = useState(0),
          [comment, setComment] = useState(''),
          [isSubmitting, setIsSubmitting] = useState(false),
          [loading, setLoading] = useState(false),
          [reviews, setReviews] = useState<ReviewType[]>([]),
          [isEditing, setIsEditing] = useState(false),
          [editingReviewID, setEditingReviewID] = useState<string | null>(null),
          [currentDoctorID, setCurrentDoctorID] = useState<string | null>(null)

    const addReview = (review: ReviewType) =>{
    
        setReviews(prev => [...prev, review])
    
    }
    
    const deleteReview = (reviewID: string) =>{
    
       setReviews(prev => prev.filter(review => review._id !== reviewID))
    
    }
    
    const updateReview = (reviewID: string, updatedReview: Partial<ReviewType>) =>{
    
        setReviews(prev => prev.map(review => 
           review._id === reviewID ? { ...review, ...updatedReview } : review
       ))
    
    }
    
    const getDoctorReviews = async(doctorID: string): Promise<ReviewType[]> =>{
    
        try{

            setLoading(true)

            setCurrentDoctorID(doctorID)
           
            const doctorReviewsRef = collection(db, "doctors", doctorID, "reviews"),
                  q = query(doctorReviewsRef, orderBy("createdAt", "desc")),    
                  snapshot = await getDocs(q),
                  fetchedReviews: ReviewType[] = []

            snapshot.forEach(doc =>{

                const data = doc.data() as ReviewType

                fetchedReviews.push(data)

            })

            console.log("Fetched doctor reviews:", fetchedReviews)

            setReviews(fetchedReviews)

            return fetchedReviews

        }catch(error){

            console.error("Error fetching doctor reviews:", error)

            return []

        }finally{

            setLoading(false)

        }
    
    }

    const updateDoctorProfileRating = async(doctorID: string, rating: number) =>{

        try{

            const profileRef = doc(db, "profiles", doctorID)

            await updateDoc(profileRef, { rating })

        }catch(error){

            console.error("Error updating doctor profile rating:", error)

        }
        
    }
    
    const subscribeToDoctorReviews = (_doctorID: string) =>{
    
       // TODO: Implement subscribe to doctor reviews logic
    
    }
    
    const formatTimestamp = (timestamp: string): string =>{
    
       const date = new Date(timestamp)

       return date.toLocaleDateString('en-US', { 
           year: 'numeric', 
           month: 'short', 
           day: 'numeric' 
       })
    
    }
    
    const resetForm = () =>{
    
       setRatings(0)

       setComment('')

       setIsEditing(false)

       setEditingReviewID(null)
    
    }

    const handleEditReview = (review: ReviewType) =>{
    
       setRatings(review.ratings)

       if(review.comment) setComment(review.comment)

       setIsEditing(true)

       setEditingReviewID(review._id)
    
    }

    const totalReviews = reviews.length,
          averageRating = totalReviews === 0 ? 0 : parseFloat((reviews.reduce((sum, review) => sum + review.ratings, 0) / totalReviews).toFixed(1)),
            ratingDistribution: { [key: number]: number } = reviews.reduce((acc, review) =>{

                const rating = Math.floor(review.ratings) 

                if(rating >= 1 && rating <= 5){

                    acc[rating] = (acc[rating] || 0) + 1

                }

                return acc

            }, {1:0, 2:0, 3:0, 4:0, 5:0} as { [key: number]: number })

    useEffect(() =>{

        if(currentDoctorID && reviews.length > 0){

            updateDoctorProfileRating(currentDoctorID, averageRating)

        }

    }, [averageRating, currentDoctorID])

    const contextValue: DoctorReviewsContextProps ={

        ratings,
        setRatings,
        comment,
        setComment,
        isSubmitting,
        setIsSubmitting,
        reviews,
        setReviews,
        addReview,
        deleteReview,
        updateReview,
        getDoctorReviews,
        subscribeToDoctorReviews,
        averageRating,
        totalReviews,
        ratingDistribution,
        formatTimestamp,
        loading,
        setLoading,
        resetForm, 
        isEditing,
        setIsEditing,
        editingReviewID,
        setEditingReviewID,
        handleEditReview

    }

    return(

        <DoctorReviewsContext.Provider value={contextValue}>

            {children}

        </DoctorReviewsContext.Provider>

    )

}

export const useDoctorReviewsContext = () =>{

    const context = useContext(DoctorReviewsContext)

    if(!context) throw new Error('useDoctorReviewsContext must be used within DoctorReviewsContextProvider')

    return context

}