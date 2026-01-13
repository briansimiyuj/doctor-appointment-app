import { createContext, useContext, useState } from "react"
import { ModalContextProps } from "../assets/contextProps/ModalContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { useCancelAppointment } from "../hooks/useCancelAppointment"
import { ProfileContext } from "./ProfileContext"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "../hooks/useToast"
import { useScheduleHistory } from "../hooks/useScheduleHistory"

interface ModalProviderProps{

    children: React.ReactNode  
    appointment: AppointmentType | null
    onClose: () => void
    onReject?: (reason: string, alternative?: string) => void
    onCancel?: (reason: string, alternative?: string) => void

}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<ModalProviderProps> = ({ children, appointment, onClose, onReject, onCancel }) =>{

    const { updateAppointmentDataAndStatus } = usePatientDetails(),
          { handleCancelAppointment: cancelAppointment } = useCancelAppointment(), 
          { addScheduleHistoryEntry } = useScheduleHistory(),
          profileContext = useContext(ProfileContext),
          { showToast } = useToast(),
            [reason, setReason] = useState<string>(''),
            [alternative, setAlternative] = useState<string>(''),
            [isConfirmed, setIsConfirmed] = useState<boolean>(false)

    if(!profileContext) return null  

    const { profile } = profileContext,
            isValid = profile?.type === "doctor" ? reason.trim() !== '' && isConfirmed : isConfirmed

    const getAlternativeValue = (alt: string): string | null =>{
    
        return alt.trim() !== '' ? alt : null
    
    }

    const handleCancelAppointment = async () =>{
    
        if(!appointment || !isValid) return

        try{

            if(profile?.type === "patient"){

                const appointmentDocRef = doc(db, "appointments", appointment._id)

                await setDoc(appointmentDocRef, {
                    status: "cancelled",
                    cancellationReason: reason,
                    cancellationAlternative: getAlternativeValue(alternative),
                    cancelledBy: "patient",
                    performedBy: {
                        type: "patient",
                        name: appointment.patient.patientInfo.name,
                        id: appointment.patient.patientInfo._id,
                        timestamp: new Date().toISOString()
                    }
                }, { merge: true })
 
                const dateTimeID = `${appointment.date}-${appointment.time}`,
                    isBookedDocRef = doc(db, "bookedDoctors", `${appointment.doctor.doctorInfo._id}_${dateTimeID}`)

                await setDoc(isBookedDocRef, {
                    isBooked: false,
                }, { merge: true })

                updateAppointmentDataAndStatus(appointment, "cancelled", reason, getAlternativeValue(alternative))

                addScheduleHistoryEntry(
                    appointment,
                    "cancelled",
                    reason,
                    getAlternativeValue(alternative),
                    {
                        type: "patient",
                        name: appointment.patient.patientInfo.name,
                        _id: appointment.patient.patientInfo._id
                    }
                )

                showToast("Appointment cancelled successfully", "success")

            }else{

                localStorage.setItem('CurrentAppointmentToCancel', JSON.stringify(appointment))
                
                cancelAppointment(reason, getAlternativeValue(alternative))

            }

            if(onCancel){

                onCancel(reason)

            }

            onClose()

        }catch(error){

            console.error('Error cancelling appointment:', error)
            showToast("Error cancelling appointment", "error")

        }
    
    }

    const handleRejectAppointment = () =>{

        if(!appointment || !isValid) return

        updateAppointmentDataAndStatus(appointment, "rejected", reason, getAlternativeValue(alternative)) 

        if(onReject){

            onReject(reason, alternative)

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