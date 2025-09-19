import { PatientType } from "./PatientType"
import { ProfileType } from "./ProfileType"
import { TimeSlotType } from "./TimeSlotType"

export type AppointedPatientType ={

    patientInfo: PatientType,
    appointedTime: TimeSlotType,
    profile?: ProfileType

}