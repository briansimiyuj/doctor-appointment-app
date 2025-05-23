import { AppointmentType } from "../assets/types/AppointmentType"
import { usePatientDetails } from "../context/PatientDetailsContext"

interface scheduleAppointmentParams{

    appointment: AppointmentType,
    newDate: string,
    newTime: string,
    consultationType: "in-person" | "online" | null,

}

export const useScheduleAppointment = () =>{

    const  { patientDetails, patientAppointments, updateAppointment } = usePatientDetails()

    const scheduleAppointment = (params: scheduleAppointmentParams) =>{
    
        const { appointment, newDate, newTime, consultationType } = params

        if(!appointment || !newDate || !newTime || !consultationType) return false

        const newAppointment: AppointmentType ={

            ...appointment,
            date: newDate,
            time: newTime,
            status: "pending",
            consultationType: consultationType

        }
        
        updateAppointment(newAppointment)

        const patientID = patientDetails?.patientInfo?._id || 'defaultPatientID',
        storedAppointments = (localStorage.getItem(`appointments-${patientID}`) || "[]"),
        updatedAppointments = JSON.parse(storedAppointments).map((app: AppointmentType) => app._id === appointment._id ? newAppointment : app)

        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

        console.log(patientAppointments)

        return true

    }
    
    return { scheduleAppointment }

}


