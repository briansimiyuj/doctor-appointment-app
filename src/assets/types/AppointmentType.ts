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
    
}