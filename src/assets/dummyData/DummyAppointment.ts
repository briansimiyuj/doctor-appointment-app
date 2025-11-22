import { AppointmentType } from "../types/AppointmentType"
import { doctorImages, patientImages } from "../frontend/assets"
import { DocumentType } from "../types/DocumentType"

export const DummyAppointment: AppointmentType ={
  
    _id: "fc",
    date: "2023-06-15",
    time: "10:00 AM",
    isReviewed: false,
    status: "cancelled",
    paymentStatus: "unpaid",
    consultationType: "in-person",
    hasLabOrder: false,
    hasReferral: false,
    sessionStatus: undefined,

    patient:{
        
        patientInfo:{

            _id: "dev-patient-id",
            name: "Development Patient",
            age: 30,
            gender: "male",
            status: "active",
            profileImage: patientImages.patient5 as unknown as DocumentType,
            addressValue:{
                phone: "0700123456",
                email: "devpatient@example.com",
                country: "Nigeria",
                state: "Lagos",
                city: "Lagos",
                residence: "Lekki",
                
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
            education: "MBChB",
            experience: "5 years",
            about: "Skilled in skin conditions",
            fees: 1500,
            rating: 4.5,
            coverImage: {
                _id: "cover-dev-doctor-id",
                name: "cover-dev-doctor.jpg",
                content: "image/jpeg",  
                size: 204800, 
                type: "image/jpeg",
                uploadDate: new Date("2023-01-01"),
                uploadedBy: "dev-doctor-id"
            },

            reviews: [],

            address:{
                hospital: "456 Clinic Street",
                hospitalLocation: "Room 101"
            }

        },

        appointmentTime:{
           dateTime: new Date("2023-06-15T10:00:00"),
            time: "10:00 AM"
        }

    }

}