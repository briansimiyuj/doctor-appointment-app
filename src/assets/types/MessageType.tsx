import { FieldValue } from "firebase/firestore"

export interface MessageType{

    _id: string
    sender: "doctor" | "patient" | "admin"
    senderID: string | undefined
    senderName: string | undefined
    deletedFor?: string[]   
    text: string
    createdAt: string | FieldValue
    updatedAt?: string | FieldValue
    status?: "sent" | "delivered" | "read" | "error"
    isEdited?: boolean
    isEditing?: boolean
    editText?: string

}