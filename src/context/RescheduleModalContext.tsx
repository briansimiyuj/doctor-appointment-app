import { createContext, useContext, useState } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { RescheduleModalContextProps } from "../assets/contextProps/RescheduleModalContextProps"
import { useUpdatePatientDetails } from "../hooks/useUpdatePatientDetails"

interface RescheduleModalProviderProps{

    children: React.ReactNode
    appointment: AppointmentType
    onClose: () => void

}

const RescheduleModalContext = createContext<RescheduleModalContextProps | undefined>(undefined)

export const RescheduleModalProvider: React.FC<RescheduleModalProviderProps> = ({ children, appointment, onClose }) =>{

    const { newDate, setNewDate, newTime, setNewTime } = useUpdatePatientDetails(),
          [isConfirmed, setIsConfirmed] = useState(false),
          isValid = newDate?.trim() !== '' && newTime?.trim() !== '' && isConfirmed


    const handleRescheduleConfirm = () =>{

        if(!appointment && !isValid) return

        onClose()

    }

    const value ={

        appointment,
        newDate,
        setNewDate,
        newTime,
        setNewTime,
        isConfirmed,
        setIsConfirmed,
        isValid,
        onClose,
        handleRescheduleConfirm
        
    }

    return(

        <RescheduleModalContext.Provider value={value}>

            {children}

        </RescheduleModalContext.Provider>

    )

}

export const useRescheduleModal = () =>{

   const context = useContext(RescheduleModalContext)

   if(!context) throw new Error('useRescheduleModal must be used within a RescheduleModalProvider')

   return context

}