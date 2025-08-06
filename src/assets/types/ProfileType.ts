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
    address: AddressType,
    gender: "male" | "female"
    profileImage: string | undefined
    DOB: string

}

type DoctorProfile = UserData & DoctorType &{

    type: "doctor"
    rating: number
    coverImage: string | undefined
    aboutValue: string
    specialityValue: string
    experienceValue: string
    feesValue: string
    certifications: string[]
    education: string[]
    hospital: string
    licenseCertification: string

}

type PatientProfile = UserData &{
    
    _id: string
    type: "patient"
    appointments?: string[]
    medicalHistory?: string[]
    coverImage?: string

}

export type ProfileType = DoctorProfile | PatientProfile