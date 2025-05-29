import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useCancelAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { appointmentToCancel} = useUpdatePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory()

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

        addScheduleHistoryEntry(

            appointment,
            "cancelled",
            reason,
            alternative,
            {
                type: "patient",
                name: appointment.patient.name,
                _id: appointment.patient._id
            }

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