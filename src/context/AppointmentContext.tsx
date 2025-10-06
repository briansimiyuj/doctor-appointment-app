import { createContext, useState, useEffect, useContext } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { AppointmentsContextProps } from "../assets/contextProps/AppointmentsContextProps"
import { useParams } from "react-router-dom"
import { collection, query, where, onSnapshot, doc, getDoc } from "firebase/firestore"
import { useProfileContext } from "./ProfileContext"
import { db } from "../firebaseConfig"
import { useLoginContext } from "./LoginContext"

interface AppointmentsContextProviderProps{

    children: React.ReactNode

}

export const AppointmentsContext = createContext<AppointmentsContextProps>({
    appointments: [],
    appointment: {} as AppointmentType,
    pastAppointments: [],
    appointmentID:  "",
    upcomingAppointments: [],
    activeTab: "upcoming",
    setActiveTab: (_tab: "upcoming" | "past") => {}

})

export const AppointmentsContextProvider: React.FC<AppointmentsContextProviderProps> = ({ children }) =>{

    const [appointments, setAppointments] = useState<AppointmentType[]>([]),
          [pastAppointments, setPastAppointments] = useState<AppointmentType[]>([]),
          [upcomingAppointments, setUpcomingAppointments] = useState<AppointmentType[]>([]),
          [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming"),
          [appointment, setAppointment] = useState<AppointmentType | null>(null),
          { appointmentID } = useParams<{ appointmentID: string }>(),
          { profile, loading } = useProfileContext(),
          { userType }  = useLoginContext()


    useEffect(() =>{
    
        if(!appointmentID) return

        const fetchAppointment = async() =>{

            try{

                const appointmentDocRef = doc(db, "appointments", appointmentID),
                      appointmentDoc = await getDoc(appointmentDocRef)

                if(appointmentDoc.exists()){

                    setAppointment(appointmentDoc.data() as AppointmentType)

                }else{

                    setAppointment(null)

                    console.log("No appointment found with ID:", appointmentID)

                }

            }catch(error){

                console.error("Error fetching appointment:", error)

            }

        }

        fetchAppointment()
    
    }, [appointmentID])


    useEffect(() =>{

        if(loading) return

        if(!profile?._id || !userType) return

            const appointmentsRef = collection(db, "appointments"),
                q = userType === "patient" 
                    ? query(appointmentsRef, where("patient.patientInfo._id", "==", profile._id)) 
                    : query(appointmentsRef, where("doctor.doctorInfo._id", "==", profile._id))

        const unsubscribe = onSnapshot(q, (snapshot) =>{

            const fetchedAppointments: AppointmentType[] = []

            snapshot.forEach((doc) =>{

                fetchedAppointments.push(doc.data() as AppointmentType)

            })

            setAppointments(fetchedAppointments)

            const now = new Date()
            

            const upcoming = fetchedAppointments.filter(appointment =>{
                
                const appointmentDate = new Date(appointment.date),
                    validStatuses = ["pending", "approved", "rescheduled", "follow-up"]

                return appointmentDate >= now && validStatuses.includes(appointment.status)

            }), 
            past = fetchedAppointments.filter(appointment =>{

                const appointmentDate = new Date(appointment.date),
                    validStatuses = ["completed", "cancelled", "rejected"]

                return appointmentDate < now || validStatuses.includes(appointment.status)

            })

            setUpcomingAppointments(upcoming)

            setPastAppointments(past)

        }, (error) =>{

            console.error("Error fetching appointments:", error)

        })

        return () => unsubscribe()

    }, [profile?._id, userType])


    const contextValue: AppointmentsContextProps ={

        appointments,
        appointment,
        appointmentID,
        pastAppointments,
        upcomingAppointments,
        activeTab,
        setActiveTab

    }

    
    return(

        <AppointmentsContext.Provider value={contextValue}>

            {children}
            
        </AppointmentsContext.Provider>

    )

}

export const useAppointmentsContext = () =>{

    const context = useContext(AppointmentsContext)

    if(!context){

        throw new Error("useAppointmentsContext must be used within an AppointmentsContextProvider")

    }

    return context

}