import { createContext, useState, useEffect } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { appointmentsData, patients } from "../assets/frontend/assets"

interface AppointmentsContextProps{

    appointments: AppointmentType[]

}

interface AppointmentsContextProviderProps{

    children: React.ReactNode

}

export const AppointmentsContext = createContext<AppointmentsContextProps>({ appointments: [] })

export const AppointmentsContextProvider = ({ children }: AppointmentsContextProviderProps) =>{

    const [appointments, setAppointments] = useState<AppointmentType[]>([])

    useEffect(() =>{

        const enrichedAppointments = appointmentsData.map(appointment =>{

            const patient = patients.find(p => p.name === appointment.patient)

            const doctor = { _id: appointment.doctor, name: appointment.doctor, image: appointment.doctor }
            
            return { ...appointment, patient, doctor }


        })


        setAppointments(enrichedAppointments as AppointmentType[])

    }, [])


    return(

        <AppointmentsContext.Provider value={{ appointments }}>

            {children}
            
        </AppointmentsContext.Provider>
    )

}
