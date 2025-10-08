import { DocumentType } from "./DocumentType"

export type ContactAddressType ={
    phone: string
    email: string
    country: string
    state: string
    city: string
    residence: string
}

export type PatientType ={

    _id: string
    name: string
    age: number
    gender: string
    status: string
    profileImage: DocumentType

    addressValue: ContactAddressType

    appointment:{
        date: string
        time: string
        doctor: string
        speciality: string
    }

    medicalHistory:{
        diseases: string[]
        allergies: string[]
        surgeries: string[]
        medications: string[]
    }

}