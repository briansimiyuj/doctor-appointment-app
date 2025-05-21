import { AppointmentType } from "../types/AppointmentType"
import { doctorImages, patientImages } from "../frontend/assets"

export const DummyAppointment: AppointmentType ={

    _id: "fc",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "cancelled",
    
    patient:{
        _id: "dev-patient-id",
        name: "Development Patient",
        image: patientImages.patient5,
    },

    doctor:{
        _id: "dev-doctor-id",
        name: "Dr. Developer",
        image: doctorImages.doc13,
    },
    consultationType: "in-person",
    
}