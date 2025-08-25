import { createContext, useContext, useState } from "react"
import { ModalContextProps } from "../assets/contextProps/ModalContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { useCancelAppointment } from "../hooks/useCancelAppointment"
import { useRejectAppointment } from "../hooks/useRejectAppointment"
import { ProfileContext } from "./ProfileContext"

interface ModalProviderProps{

    children: React.ReactNode  
    appointment: AppointmentType | null
    onClose: () => void
    onReject?: (reason: string, alternative?: string) => void
    onCancel?: (reason: string, alternative?: string) => void

}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<ModalProviderProps> = ({ children, appointment, onClose, onReject, onCancel }) =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { handleRejectAppointment: rejectAppointment } = useRejectAppointment(),
          { handleCancelAppointment: cancelAppointment } = useCancelAppointment(), 
          profileContext = useContext(ProfileContext),
            [reason, setReason] = useState<string>(''),
            [alternative, setAlternative] = useState<string>(''),
            [isConfirmed, setIsConfirmed] = useState<boolean>(false)

    if(!profileContext) return null  

    const { profile } = profileContext,
            isValid = profile?.type === "doctor" ? reason.trim() !== '' && isConfirmed : isConfirmed

    const handleCancelAppointment = () =>{
    
        if(!appointment || !isValid) return

        cancelAppointment(reason, alternative)

        if(onCancel){

            onCancel(reason)

        }

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