import { DoctorType } from "../types/DoctorType"

export interface DoctorContextProps{

    doctors: DoctorType[]
    addDoctor: (doctor: DoctorType) => void
    updateDoctor: (id: string, updatedDoctor: DoctorType) => void  
    removeDoctor: (id: string) => void
    getDoctorByID: (id: string) => DoctorType | undefined
    getDoctorByName: (id: string, name: string) => DoctorType | undefined
    
}