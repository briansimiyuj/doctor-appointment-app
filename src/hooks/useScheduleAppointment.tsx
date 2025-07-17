import { useContext } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"

interface scheduleAppointmentParams{

    appointment: AppointmentType,
    newDate: string,
    newTime: string,
    consultationType: "in-person" | "online" | null,
    status?: "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up"

}

export const useScheduleAppointment = () =>{

    const  { patientDetails, updateAppointment } = usePatientDetails(),
           { addScheduleHistoryEntry } = useScheduleHistory(),
           loginContext = useContext(LoginContext),
           userType = loginContext?.userType || "patient"


    const scheduleAppointment = (params: scheduleAppointmentParams) =>{
    
        const { appointment, newDate, newTime, consultationType, status } = params

        if(!appointment || !newDate || !newTime || !consultationType) return false

        const newAppointment: AppointmentType ={

            ...appointment,
            date: newDate,
            time: newTime,
            status: status || "pending",
            consultationType: consultationType

        }
        
        updateAppointment(newAppointment)

        const performedBy ={

            type: userType,
            name: userType === "doctor" ? appointment.doctor.doctorInfo.name : patientDetails?.patientInfo?.name,
            _id: userType === "doctor" ? appointment.doctor.doctorInfo._id : patientDetails?.patientInfo?._id

        }

        addScheduleHistoryEntry(

            newAppointment,
            newAppointment.status as "pending" | "completed" | "cancelled" | "approved" | "rescheduled" | "rejected" | "follow-up",
            `New appointment scheduled by ${userType}`,
            undefined,
            performedBy,
            `New appointment scheduled for ${newDate} at ${newTime} (${consultationType} consultation)`

        )

        const patientID = patientDetails?.patientInfo?._id || 'defaultPatientID',
        storedAppointments = (localStorage.getItem(`appointments-${patientID}`) || "[]"),
        updatedAppointments = JSON.parse(storedAppointments).map((app: AppointmentType) => app._id === appointment._id ? newAppointment : app)

        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

        return true

    }
    
    return { scheduleAppointment }

}