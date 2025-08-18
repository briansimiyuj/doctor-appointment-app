import doctorsData from "./doctors.json"
import { doctorImages } from "./assets"
import { dummyReviews } from "../dummyData/DummyReviews"


export const doctors = doctorsData.map((doctor, index) =>({

    ...doctor,
    image: doctorImages[doctor._id as keyof typeof doctorImages],
    ratings: 4 + (index % 2) * .5,
    reviews: dummyReviews.filter((_, i) => i % 2 === index % 2)

}))