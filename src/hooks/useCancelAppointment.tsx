import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useCancelAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { appointmentToCancel} = useUpdatePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "patient"

    const handleCancelAppointment = (reason: string, alternative?: string) =>{

        const appointment = appointmentToCancel || (() =>{

            const savedAppointment = localStorage.getItem('CurrentAppointmentToCancel')

            return savedAppointment ? JSON.parse(savedAppointment) : null

        })() 

        if(!appointment){

            console.error('No appointment to cancel')

            return

        }

        updateAppointmentStatus(appointment, "cancelled")

        const performedBy ={

            type: userType,
            name: userType === "doctor" ? appointment.doctor.name : appointment.patient.name,
            _id: userType === "doctor" ? appointment.doctor._id : appointment.patient._id

        }

        addScheduleHistoryEntry(

            appointment,
            "cancelled",
            reason,
            alternative,
            performedBy

        )

        const patientID = appointment.patient._id,
              appointmentID = `${appointment.date}-${appointment.time}`,
              cancellationReason = JSON.parse(localStorage.getItem(`cancellation-reason-${patientID}`) || '{}')

        cancellationReason[appointmentID] ={

            reason,
            alternative: alternative || null,
            cancelledAt: new Date().toISOString(),
            appointmentDetails: appointment

        }

        localStorage.setItem(`cancellation-reason-${patientID}`, JSON.stringify(cancellationReason))

    }

    return { handleCancelAppointment }

}