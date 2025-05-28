import { DummyAppointment } from "../assets/dummyData/DummyAppointment"
import { ScheduleHistory, ScheduleHistoryItem } from "../assets/types/ScheduleHistoryItem"
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

        const scheduleHistoryItem: ScheduleHistoryItem ={

            _id: `history-${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            appointment: appointment,
            actionType: "cancelled",
            timeStamp: new Date().toISOString(),
            reason,
            alternative : alternative || undefined,
            performedBy:{

                type: "doctor",
                name: appointment.doctor.name || DummyAppointment.doctor.name,
                _id: appointment.doctor._id || DummyAppointment.doctor._id

            },
            notes: `Appointment cancelled with reason: ${reason}`

        }

        const existingHistory = JSON.parse(localStorage.getItem("scheduleHistory") || "[]") as ScheduleHistory[],
              updatedHistory = [scheduleHistoryItem, ...existingHistory]

        localStorage.setItem("scheduleHistory", JSON.stringify(updatedHistory))

    }

    return { handleCancelAppointment }

}