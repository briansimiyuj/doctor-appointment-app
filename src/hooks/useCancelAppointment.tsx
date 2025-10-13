import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

export const useCancelAppointment = () =>{

    const { updateAppointmentDataAndStatus } = usePatientDetails(),
            { appointmentToCancel, closeCancelModal} = useUpdatePatientDetails(),
            { addScheduleHistoryEntry } = useScheduleHistory(),
            loginContext = useContext(LoginContext),
            userType = loginContext?.userType || "patient",
            { showToast } = useToast()

    const handleCancelAppointment = async (reason: string, alternative: string | null = null) =>{

        const appointment = appointmentToCancel || (() =>{

            const savedAppointment = localStorage.getItem('CurrentAppointmentToCancel')

            return savedAppointment ? JSON.parse(savedAppointment) : null

        })() 

        if(!appointment){

            console.error('No appointment to cancel')

            showToast("Error: Appointment data missing.", "error")

            return

        }

        const performedBy ={

            type: userType,
            name: userType === "doctor" ? appointment.doctor.doctorInfo.name : appointment.patient.patientInfo.name,
            _id: userType === "doctor" ? appointment.doctor.doctorInfo._id : appointment.patient.patientInfo._id

        }

        try{

            const appointmentDocRef = doc(db, "appointments", appointment._id)

            await setDoc(appointmentDocRef, {
                status: "cancelled",
                cancellationReason: reason,
                cancellationAlternative: alternative || null,
                cancelledBy: performedBy.type,
                performedBy: {
                    type: performedBy.type,
                    name: performedBy.name,
                    id: performedBy._id,
                    timestamp: new Date().toISOString()
                }
            }, { merge: true })

            const dateTimeID = `${appointment.date}-${appointment.time}`,
                isBookedDocRef = doc(db, "bookedDoctors", `${appointment.doctor.doctorInfo._id}_${dateTimeID}`)

            await setDoc(isBookedDocRef, {
                isBooked: false,
            }, { merge: true })

            updateAppointmentDataAndStatus(appointment, "cancelled", reason, alternative)

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

            showToast("Appointment cancelled successfully", "success")

        }catch(error){

            console.error("Error cancelling appointment:", error)

            showToast("Failed to cancel appointment", "error")

        }finally{

            closeCancelModal()

        }

    }

    return { handleCancelAppointment }

}