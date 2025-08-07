import { DoctorType } from "./DoctorType"

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
    profileImage: string | undefined
    profileImageURL: string | null
    dateOfBirth: string

}

type DoctorProfile = UserData & DoctorType &{

    type: "doctor"
    rating: number
    coverImage: string | undefined
    coverImageURL: string | null
    aboutValue: string
    specialityValue: string
    experienceValue: string
    feesValue: string
    certifications: string[]
    education: string[]
    hospital: string
    hospitalLocation: string
    licenseCertificate: string

}

type PatientProfile = UserData &{
    
    _id: string
    type: "patient"
    appointments?: string[]
    medicalHistory: string[]
    coverImage?: string
    coverImageURL?: string | null

}

export type ProfileType = DoctorProfile | PatientProfile