export interface MessageType{

    _id: string
    sender: "doctor" | "patient" | "admin"
    senderID: string | undefined
    senderName: string | undefined
    text: string
    createdAt: string
    updatedAt?: string | null
    status?: "sent" | "delivered" | "read" | "error"

}