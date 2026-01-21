import { FieldValue } from "firebase/firestore"

export interface MessageType{

    _id: string
    sender: "doctor" | "patient" | "admin"
    senderID: string | undefined
    senderName: string | undefined
    text: string
    createdAt: string | FieldValue
    updatedAt?: string | FieldValue
    status?: "sent" | "delivered" | "read" | "error"

}