import { createContext, useState, useEffect } from "react"
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

        const storedAppointments = localStorage.getItem("appointments")

        if(storedAppointments){

            try{

                const parsed = JSON.parse(storedAppointments) as AppointmentType[]
                
                setAppointments(parsed)

                const now = new Date()

                const upcoming = parsed.filter(appointment =>{
                    
                    const appointmentDate = new Date(appointment.date),
                          validStatuses = ["pending", "approved", "rescheduled", "follow-up"]

                    return appointmentDate >= now && validStatuses.includes(appointment.status)

                }), 
                past = parsed.filter(appointment =>{

                    const appointmentDate = new Date(appointment.date),
                          validStatuses = ["completed", "cancelled", "rejected"]

                    return appointmentDate < now && validStatuses.includes(appointment.status)

                })

                setUpcomingAppointments(upcoming)

                setPastAppointments(past)

                console.log(upcoming, past)

            }catch(error){

                console.error("Error parsing appointments from local storage:", error)

            }


        }else{

            setAppointments([])

            setPastAppointments([])

            setUpcomingAppointments([])

        }

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
