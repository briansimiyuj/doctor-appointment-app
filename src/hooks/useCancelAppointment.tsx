import { usePatientDetails } from "../context/PatientDetailsContext"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useCancelAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { appointmentToCancel} = useUpdatePatientDetails()

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