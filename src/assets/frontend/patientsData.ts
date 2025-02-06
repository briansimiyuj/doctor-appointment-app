import patientsData from "./patients.json"
import { PatientType } from "../types/PatientType"
import { patientImages } from "./assets"

export const patients = (patientsData as PatientType[]).map(patient =>({

    ...patient,
    image: patientImages[patient._id as keyof typeof patientImages]

}))