import { createContext, useContext, useState } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { ScheduleAppointmentContextProps } from "../assets/contextProps/ScheduleAppointmentContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { useDateTime } from "./DateTimeContext"
import { useScheduleAppointment } from "../hooks/useScheduleAppointment"

interface ScheduleAppointmentProviderProps{

    children: React.ReactNode
    appointment: AppointmentType
    onClose: () => void
    consultationType?: "in-person" | "online" | null

}

export const ScheduleAppointmentContext = createContext<ScheduleAppointmentContextProps | undefined>(undefined)

export const ScheduleAppointmentProvider: React.FC<ScheduleAppointmentProviderProps> = ({ children, appointment, onClose, consultationType: initialConsultationType = null }) =>{

    const { date: newDate, time: newTime }  = useDateTime(),
          [consultationType, setConsultationType] = useState<"in-person" | "online" | null>(initialConsultationType),
          { scheduleAppointment } = useScheduleAppointment(),
          [isConfirmed, setIsConfirmed] = useState(false),
          { patientDetails } = usePatientDetails(),
          isvalid = Boolean(newDate && newTime && consultationType && isConfirmed)
          
    const handleScheduleConfirm = async() =>{
    
        if(!isvalid || !patientDetails) return

        if(newDate && newTime && consultationType && isConfirmed){

            const scheduleSuccess = await scheduleAppointment({ newDate, newTime, consultationType, appointment })

            if(scheduleSuccess){

                onClose()

            }

        }
    
    }

    const value ={

        newDate,
        setNewDate: () => {},
        newTime,
        setNewTime: () => {},
        consultationType,
        setConsultationType,
        isConfirmed,
        setIsConfirmed,
        handleScheduleConfirm,
        isValid: isvalid, 
        onClose,
        appointment

    }

    return(

        <ScheduleAppointmentContext.Provider value={value}>

            {children}

        </ScheduleAppointmentContext.Provider>

    )
    
}

export const useScheduleAppointmentContext = () =>{

    const context = useContext(ScheduleAppointmentContext)

    if(!context) throw new Error("useScheduleAppointmentContext must be used within ScheduleAppointmentContext")

    return context

}