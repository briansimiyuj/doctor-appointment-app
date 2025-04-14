import { usePatientDetails } from "../context/PatientDetailsContext"

export const useUpdatePatientDetails = () =>{

    const { patientAppointments, updateAppointmentStatus } = usePatientDetails(),
             latestAppointment = patientAppointments && patientAppointments.length > 0 
            ? patientAppointments[0] 
            : null

    const handleApproveAppointment = () =>{
    
        if(latestAppointment){

            updateAppointmentStatus(latestAppointment, "approved")

            console.log('Appointment approved')

        }
    
    }

    return{

        handleApproveAppointment

    }

}