import { patientImages } from "../frontend/assets"

export const dummyReviews =[

    {
        _id: "rev1",
        patientID: "pat1",
        patientName: "Alice Johnson",
        patientImage: patientImages.patient1 as any,
        ratings: 5,
        comment: "Dr. Smith was amazing! She listened to all my concerns and provided excellent care.",
        createdAt: "2024-06-01",
    },

    {
        _id: "rev2",
        patientID: "pat2",
        patientName: "Brian Williams",
        patientImage: patientImages.patient2 as any,
        ratings: 4,
        comment: "Very friendly doctor and staff. My appointment was on time and the treatment worked well.",
        createdAt: "2024-06-03",
    },

    {
        _id: "rev3",
        patientID: "pat3",
        patientName: "Carla Martinez",
        patientImage: patientImages.patient3 as any,
        ratings: 5,
        comment: "I highly recommend Dr. Smith. She explains everything clearly and cares about her patients.",
        createdAt: "2024-06-05",
    },

    {
        _id: "rev4",
        patientID: "pat4",
        patientName: "Daniel Lee",
        patientImage: patientImages.patient4 as any,
        ratings: 4,
        comment: "Great experience overall. Friendly and professional. Will come back for follow-ups.",
        createdAt: "2024-06-08",
    },

    {
        _id: "rev5",
        patientID: "pat5",
        patientName: "Emma Brown",
        patientImage: patientImages.patient5 as any,
        ratings: 5,
        comment: "Absolutely wonderful doctor! Very patient and helpful with all my questions.",
        createdAt: "2024-06-10",
    },

]