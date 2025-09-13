import { MessageType } from "../types/MessageType"

export const dummyMessages: MessageType[] =[

    {
        _id: "1",
        sender: "doctor",
        senderID: "doc123",
        senderName: "Dr. Brian Simiyu",
        text: "Hello, how are you feeling today?",
        createdAt: "2025-09-13T08:30:00.000Z",
        updatedAt :null
    },

    {
        _id: "2",
        sender: "patient",
        senderID: "pat456",
        senderName: "John Doe",
        text: "I’m feeling better, but still have some mild headaches.",
        createdAt: "2025-09-13T08:31:00.000Z",
        updatedAt :null,
        status: "read"
    },

    {
        _id: "3",
        sender: "doctor",
        senderID: "doc123",
        senderName: "Dr. Brian Simiyu",
        text: "That’s good to hear. Continue with the prescribed medication and rest.",
        createdAt: "2025-09-13T08:32:00.000Z",
        updatedAt :null
    },

    {
        _id: "4",
        sender: "admin",
        senderID: "adm789",
        senderName: "System Admin",
        text: "Reminder: Your next appointment is scheduled for tomorrow at 10 AM.",
        createdAt: "2025-09-13T08:33:00.000Z",
        updatedAt :null
    },

    {
        _id: "5",
        sender: "patient",
        senderID: "pat456",
        senderName: "John Doe",
        text: "Thanks! I’ll make sure to be on time.",
        createdAt: "2025-09-13T08:34:00.000Z",
        updatedAt :null,
        status: "read"
    },

    {
        _id: "6",
        sender: "doctor",
        senderID: "doc123",
        senderName: "Dr. Brian Simiyu",
        text: "Also, remember to take your morning medication.",
        createdAt: "2025-09-13T08:35:00.000Z",
        updatedAt :null
    },

    {
        _id: "7",
        sender: "patient",
        senderID: "pat456",
        senderName: "John Doe",
        text: "Got it! Will do.",
        createdAt: "2025-09-13T08:36:00.000Z",
        updatedAt :null,
        status: "sent"
    },

    {
        _id: "8",
        sender: "admin",
        senderID: "adm789",
        senderName: "System Admin",
        text: "System maintenance will occur tonight at 11 PM. Expect brief downtime.",
        createdAt: "2025-09-13T08:37:00.000Z",
        updatedAt :null
    },

    {
        _id: "9",
        sender: "patient",
        senderID: "pat456",
        senderName: "John Doe",
        text: "Okay, but what if the system is down longer?",
        createdAt: "2025-09-13T08:38:00.000Z",
        updatedAt :null,
        status: "error"
    }
]
