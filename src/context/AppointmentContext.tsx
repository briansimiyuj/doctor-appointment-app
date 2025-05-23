import { createContext, useState, useEffect } from "react"
import appointmentsData from "../assets/frontend/AppointmentData.json"
import { patients } from "../assets/frontend/patientsData"
import { AppointmentType } from "../assets/types/AppointmentType"

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

            const consultationType = appointment.consultationType || "Online"
            
            return { ...appointment, patient, doctor, consultationType }


        })


        setAppointments(enrichedAppointments as AppointmentType[])

    }, [])


    return(

        <AppointmentsContext.Provider value={{ appointments }}>

            {children}
            
        </AppointmentsContext.Provider>
    )

}
