import { AppointmentType } from "../types/AppointmentType"
import { doctorImages, patientImages } from "../frontend/assets"

export const DummyAppointment: AppointmentType ={
  
    _id: "fc",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "cancelled",
    consultationType: "in-person",

    patient:{
        
        patientInfo:{

            _id: "dev-patient-id",
            name: "Development Patient",
            age: 30,
            gender: "male",
            status: "active",
            image: patientImages.patient5,
            contact:{
                phone: "0700123456",
                email: "devpatient@example.com",
            },

            address:{
                line1: "123 Test Lane",
                line2: "Unit 5",
            },

            appointment:{
                date: "2023-06-15",
                time: "10:00 AM",
                doctor: "Dr. Developer",
                speciality: "Dermatology",
            },

            medicalHistory:{
                diseases: ["Hypertension"],
                allergies: ["Penicillin"],
                surgeries: [],
                medications: ["Amlodipine"],
            },

        },

        appointedTime:{
            dateTime: new Date("2023-06-15T10:00:00"),
            time: "10:00 AM"
        }

    },


    doctor:{

        doctorInfo:{

            _id: "dev-doctor-id",
            name: "Dr. Developer",
            image: doctorImages.doc13,
            speciality: "Dermatology",
            degree: "MBChB",
            experience: "5 years",
            about: "Skilled in skin conditions",
            fees: 1500,
            address:{
                line1: "456 Clinic Street",
                line2: "Room 101"
            }

        },

        appointmentTime:{
           dateTime: new Date("2023-06-15T10:00:00"),
            time: "10:00 AM"
        }

    }

}
