import { createContext, useContext, useState } from "react"
import { ModalContextProps } from "../assets/contextProps/ModalContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { useUpdatePatientDetails } from "../hooks/useUpdatePatientDetails"

interface ModalProviderProps{

    children: React.ReactNode  
    appointment: AppointmentType | null
    onClose: () => void
    onReject?: (reason: string, alternative?: string) => void

}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<ModalProviderProps> = ({ children, appointment, onClose, onReject }) =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { handleRejectAppointment: rejectAppointment } = useUpdatePatientDetails(),
            [reason, setReason] = useState<string>(''),
            [alternative, setAlternative] = useState<string>(''),
            [isConfirmed, setIsConfirmed] = useState<boolean>(false),
            isValid = reason.trim() !== '' && isConfirmed

    const handleCancelAppointment = () =>{
    
        if(!appointment || !isValid) return

        updateAppointmentStatus(appointment, "cancelled", )

        onClose()
    
    }

    const handleRejectAppointment = () =>{

        if(!appointment || !isValid) return

        updateAppointmentStatus(appointment, "rejected")

        rejectAppointment(reason, alternative)

        if(onReject){

            onReject(reason)

        }

        onClose()

    }

    const value ={

        appointment,
        reason,
        setReason,
        alternative,
        setAlternative,
        isConfirmed,
        setIsConfirmed,
        handleCancelAppointment,
        onClose,
        isValid,
        isConfirm: isConfirmed,
        setIsConfirm: setIsConfirmed,
        handleRejectAppointment

    }

    return(

        <ModalContext.Provider value={value}>

            {children}

        </ModalContext.Provider>

    )

}

export const useModalContext = () =>{

    const context = useContext(ModalContext)

    if(!context) throw new Error('useModalContext must be used within a ModalProvider')

    return context

}