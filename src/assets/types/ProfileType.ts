import { DoctorType } from "./DoctorType"
import { DocumentType } from "./DocumentType"

export type AddressType ={

    phone: string,
    email: string,
    residence: string,
    city: string,
    state: string,
    country: string
    
}

export type UserData ={
    
    name: string,
    addressValue: AddressType,
    gender: "male" | "female"
    profileImage: DocumentType | File | null
    dateOfBirth: string

}

type DoctorProfile = UserData & DoctorType &{

    type: "doctor"
    rating: number
    coverImage: DocumentType | File | null
    aboutValue: string
    specialityValue: string
    experienceValue: string
    feesValue: string
    certifications: string[]
    education: string[]
    hospital: string
    hospitalLocation: string
    licenseCertificate: DocumentType

}

type PatientProfile = UserData &{
    
    _id: string
    type: "patient"
    appointments?: string[]
    medicalHistory: string

}

export type ProfileType = DoctorProfile | PatientProfile