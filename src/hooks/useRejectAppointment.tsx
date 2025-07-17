import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useRejectAppointment = () =>{

    const { patientDetails, updateAppointmentStatus } = usePatientDetails(),
          { appointmentToReject } = useUpdatePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "doctor",
          patientID = patientDetails?.patientInfo?._id

    const handleRejectAppointment = (reason: string, alternative?: string) =>{
   
        const appointment = appointmentToReject || (() =>{

            const savedAppointment = localStorage.getItem('CurrentAppointmentToReject')

            return savedAppointment ? JSON.parse(savedAppointment) : null

        })()
      
        if(!appointment){

            console.error('No appointment to reject')

            return

        }

        const appointmentID = `${appointment.date}-${appointment.time}`,
              rejectionReason = JSON.parse(localStorage.getItem(`rejection-reason-${patientID}`) || '{}')

        rejectionReason[appointmentID] ={

            reason,
            alternative: alternative || '',
            rejectedAt: new Date().toISOString(),
            appointmentDetails: appointmentToReject

        }

        localStorage.setItem(`rejectionReason-${patientID}`, JSON.stringify(rejectionReason))

        updateAppointmentStatus(appointment, "rejected")

        const performedBy ={

            type: userType,
            name: userType === "doctor" 
                ? appointment.doctor.doctorInfo.name || "Doctor"
                : appointment.patient.patientInfo.name || "Patient",
            _id: userType === "doctor"
                ? appointment.doctor.doctorInfo._id
                : appointment.patient.patientInfo._id

        }

        addScheduleHistoryEntry(
            
            { ...appointment, status: "rejected" },
            "rejected",
            reason,
            alternative,
            performedBy,
            `Appointment rejected by ${userType}. ${appointment.doctor.doctorInfo.name} on ${appointment.date} at ${appointment.time} due to ${reason}.`   

        )
        
    }

    return{

        handleRejectAppointment

    }

}
