import { useContext } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig" 
import { useToast } from "./useToast"

interface scheduleAppointmentParams{

    appointment: AppointmentType,
    newDate: string,
    newTime: string,
    consultationType: "in-person" | "online" | null,
    status?: "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up"

}

export const useScheduleAppointment = () =>{

    const  { patientDetails, updateAppointment } = usePatientDetails(),
           { addScheduleHistoryEntry } = useScheduleHistory(),
           { showToast } = useToast(),
           loginContext = useContext(LoginContext),
           userType = loginContext?.userType || "patient"


    const scheduleAppointment = async (params: scheduleAppointmentParams) =>{
    
        const { appointment, newDate, newTime, consultationType, status } = params

        if(!appointment || !newDate || !newTime || !consultationType) return false

        const newAppointment: AppointmentType ={

            ...appointment,
            date: newDate,
            time: newTime,
            status: status || "rescheduled",
            consultationType: consultationType

        }
        
        const performedBy ={

            type: userType,
            name: userType === "doctor" ? appointment.doctor.doctorInfo.name : patientDetails?.patientInfo?.name,
            _id: userType === "doctor" ? appointment.doctor.doctorInfo._id : patientDetails?.patientInfo?._id

        }

        try{

            const appointmentDocRef = doc(db, "appointments", newAppointment._id)
            
            await setDoc(appointmentDocRef, newAppointment) 

            addScheduleHistoryEntry(
                newAppointment,
                newAppointment.status as "pending" | "completed" | "cancelled" | "approved" | "rescheduled" | "rejected" | "follow-up",
                `Appointment updated by ${userType}`,
                undefined,
                performedBy,
                `Appointment changed to ${newDate} at ${newTime} (${consultationType} consultation). Status set to ${newAppointment.status}.`
            )
            
            updateAppointment(newAppointment)

            showToast("Appointment updated successfully.", "success")

            return true

        }catch(error){

            console.error("Error scheduling appointment:", error)

            showToast("Failed to update appointment schedule.", "error")

            return false

        }
        
    }
    
    return { scheduleAppointment }

}