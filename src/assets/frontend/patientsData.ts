import patientsData from "./patients.json"
import { PatientType } from "../types/PatientType"
import { patientImages } from "./assets"

export const patients: PatientType[] = (patientsData as any[]).map(patient =>({
    
    ...patient,
    profileImage: patientImages[patient._id as keyof typeof patientImages]
    
}))