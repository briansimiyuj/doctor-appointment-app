import { PatientType } from "./PatientType"
import { TimeSlotType } from "./TimeSlotType"

export type AppointedPatientType ={

    patientInfo: PatientType,
    appointedTime: TimeSlotType

}