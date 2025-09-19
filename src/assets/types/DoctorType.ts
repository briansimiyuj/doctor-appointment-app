import { dummyReviews } from "../dummyData/DummyReviews"
import { DocumentType } from "./DocumentType"

export type DoctorType ={

    _id: string
    name: string
    image: string
    speciality: string
    education: string
    experience: string
    about: string
    fees: number
    coverImage: DocumentType
    rating?: number
    reviews?: typeof dummyReviews

    address:{

        hospital: string
        hospitalLocation: string

    }

}