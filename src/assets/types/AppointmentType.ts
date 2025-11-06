import { AppointedDoctorType } from "./AppointedDoctorType"
import { AppointedPatientType } from "./AppointedPatientType"

export  interface AppointmentType{

    patient: AppointedPatientType

    doctor: AppointedDoctorType

    _id: string
    date: string
    time: string
    status: string
    consultationType: "online" | "in-person"
    isReviewed: boolean
    cancellationReason?: string 
    cancellationAlternative?: string | null
    rejectionReason?: string 
    rejectionAlternative?: string | null

    scheduledDurationMinutes?: number
    actualStartTime?: string
    actualEndTime?: string
    actualDurationSeconds?: number
    isStarted?: boolean 
    sessionStatus: "active" | "completed" | undefined
    
}