import { createContext, useState, useEffect } from "react"
import appointmentsData from "../assets/frontend/AppointmentData.json"
import { patients } from "../assets/frontend/patientsData"
import { AppointmentType } from "../assets/types/AppointmentType"
import { AppointmentsContextProps } from "../assets/contextProps/AppointmentsContextProps"

interface AppointmentsContextProviderProps{

    children: React.ReactNode

}

export const AppointmentsContext = createContext<AppointmentsContextProps>({

    appointments: [], 
    pastAppointments: [], 
    upcomingAppointments: [], 
    activeTab: "upcoming",
    setActiveTab: (_tab: "upcoming" | "past") => {}

})

export const AppointmentsContextProvider: React.FC<AppointmentsContextProviderProps> = ({ children }) =>{

    const [appointments, setAppointments] = useState<AppointmentType[]>([]),
          [pastAppointments, setPastAppointments] = useState<AppointmentType[]>([]),
          [upcomingAppointments, setUpcomingAppointments] = useState<AppointmentType[]>([]),
          [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

    useEffect(() =>{

        const enrichedAppointments = appointmentsData.map(appointment =>{

            const patient = patients.find(p => p.name === appointment.patient)

            if(!patient) return null

            const doctor = { _id: appointment.doctor, name: appointment.doctor, image: appointment.doctor }

            const consultationType: "online" | "in-person" = appointment.consultationType?.toLowerCase() === "in-person" ? "in-person" : "online"

            
            return { ...appointment, patient, doctor, consultationType }


        }).filter(appointment => appointment !== null)

        setAppointments(enrichedAppointments as AppointmentType[])

        const now = new Date(),
             upcoming = enrichedAppointments.filter(appointment =>{

                const isFutureDate = new Date(appointment.date) > now,
                      isActiveStatus = ["pending", "confirmed", "approved", "rescheduled", "follow-up"].includes(appointment.status)

                return isFutureDate && isActiveStatus

             }),


             past = enrichedAppointments.filter(appointment =>{

                const isPastDate = new Date(appointment.date) < now,
                      isDoneStatus = ["cancelled",  "rejected", "completed"].includes(appointment.status)

                return isPastDate && isDoneStatus

             })

        setUpcomingAppointments(upcoming)

        setPastAppointments(past)

    }, [])

    const contextValue: AppointmentsContextProps ={

        appointments,
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
