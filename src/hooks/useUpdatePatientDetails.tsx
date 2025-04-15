import { useState } from "react"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { DummyAppointment } from "../assets/DummyAppointment"

export const useUpdatePatientDetails = () =>{

    const { patientAppointments, updateAppointmentStatus } = usePatientDetails(),
             latestAppointment = patientAppointments && patientAppointments.length > 0 
            ? patientAppointments[0] 
            : null,
          [showCancelModal, setShowCancelModal] = useState(true),
          [appointmentToCancel, setAppointmentToCancel] = useState<AppointmentType | null>(DummyAppointment)

    const handleApproveAppointment = () =>{
    
        if(latestAppointment){

            updateAppointmentStatus(latestAppointment, "approved")

        }
    
    }


    const openCancelModal = (appointment: AppointmentType) =>{
    
       setAppointmentToCancel(appointment)
       setShowCancelModal(true)
    
    }

    return{

        handleApproveAppointment,
        openCancelModal,
        showCancelModal,
        appointmentToCancel

    }

}