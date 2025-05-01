import { AppointmentType } from "../types/AppointmentType"

export const DummyAppointment: AppointmentType ={
    
    date: "2023-06-15",
    time: "10:00 AM",
    status: "confirmed",
    
    patient:{
        _id: "dev-patient-id",
        name: "Development Patient",
        image: "",
    },

    doctor:{
        _id: "dev-doctor-id",
        name: "Dr. Developer",
        image: ""
    },
    consultationType: "in-person",
    
}