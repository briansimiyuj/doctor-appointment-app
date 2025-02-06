import doctorsData from "./doctors.json"
import { doctorImages } from "./assets"


export const doctors = doctorsData.map(doctor =>({

    ...doctor,
    image: doctorImages[doctor._id as keyof typeof doctorImages]

}))