import doctorsData from "./doctors.json"
import { doctorImages } from "./assets"
import { dummyReviews } from "../dummyData/DummyReviews"
import { DocumentType } from "../types/DocumentType"


export const doctorsList = doctorsData.map((doctor, index) =>({

    ...doctor,
    education: doctor.degree || "MBBS, MD",
    image: doctorImages[doctor._id as keyof typeof doctorImages],
    ratings: (4 + (index % 2) * .5),
    fees: Number(doctor.fees),
    reviews: dummyReviews.filter((_, i) => i % 2 === index % 2),
    coverImage: doctor.coverImage as unknown as  DocumentType

}))