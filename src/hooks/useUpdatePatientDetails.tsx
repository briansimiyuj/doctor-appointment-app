import { useState } from "react"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"

export const useUpdatePatientDetails = () =>{

    const { patientAppointments, updateAppointmentStatus } = usePatientDetails(),
             latestAppointment = patientAppointments && patientAppointments.length > 0 
            ? patientAppointments[0] 
            : null,
          [showCancelModal, setShowCancelModal] = useState(false),
          [appointmentToCancel, setAppointmentToCancel] = useState<AppointmentType | null>(null)

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

       console.log('working')
    
    }

    return{

        handleApproveAppointment,
        openCancelModal,
        showCancelModal,
        appointmentToCancel,
        closeCancelModal

    }

}