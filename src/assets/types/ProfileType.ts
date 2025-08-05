import { DoctorType } from "./DoctorType"

export type AdressType ={

    line1:string
    line2?:string
    email:string
    phone:string
    
}

export type UserData ={
    
    name: string,
    address: AdressType,
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

}

type PatientProfile = UserData &{
    
    _id: string
    type: "patient"
    appointments?: string[]
    medicalHistory?: string[]
    coverImage?: string

}

export type ProfileType = DoctorProfile | PatientProfile