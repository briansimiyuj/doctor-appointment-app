import { useState } from "react"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"

export const useUpdatePatientDetails = () =>{

    const { patientAppointments, updateAppointmentStatus, patientID } = usePatientDetails(),
             latestAppointment = patientAppointments && patientAppointments.length > 0 
            ? patientAppointments[0] 
            : null,
          [showCancelModal, setShowCancelModal] = useState(false),
          [appointmentToCancel, setAppointmentToCancel] = useState<AppointmentType | null>(null),
          [appointmentToReject, setAppointmentToReject] = useState<AppointmentType | null>(null)

    const handleApproveAppointment = () =>{
    
        if(latestAppointment){

            updateAppointmentStatus(latestAppointment, "approved")

        }
    
    }


    const openCancelModal = (appointment: AppointmentType) =>{
    
       setAppointmentToCancel(appointment)
       
       setShowCancelModal(true)
    
    }

    const closeCancelModal = () =>{
    
       setAppointmentToCancel(null)
       
       setShowCancelModal(false)
    
    }

    const handleRejectAppointment = (reason: string, alternative?: string)  =>{
    
       if(!appointmentToReject) return

       const appointmentID = `${appointmentToReject.date}-${appointmentToReject.time}`,
             rejectionReason = JSON.parse(localStorage.getItem(`rejection-reason-${patientID}`) || '{}')

        rejectionReason[appointmentID] ={

            reason,
            alternative: alternative || '',
            rejectedAt: new Date().toISOString(),
            appointmentDetails: appointmentToReject

        }

        localStorage.setItem(`rejectionReason-${patientID}`, JSON.stringify(rejectionReason))

        console.log('Appointment rejected with reason:', reason)

        if(alternative){

            console.log('Alternative appointment:', alternative)

        }
    
    }

    return{

        handleApproveAppointment,
        openCancelModal,
        showCancelModal,
        appointmentToCancel,
        closeCancelModal,
        handleRejectAppointment,
        setAppointmentToReject

    }

}