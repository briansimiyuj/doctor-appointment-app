import { useLiveChatContext } from "../context/LiveChatContext"
import { useProfileContext } from "../context/ProfileContext"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { v4 as uuid } from "uuid"
import { MessageType } from "../assets/types/MessageType"

export const useSendMessage = ()=>{

    const { input, setInput } = useLiveChatContext(),
          { profile } = useProfileContext(),
          { appointment } = useManageAppointmentContext(),
          appointmentID = appointment?._id || ""

    const sendMessage = async ()=>{

        if(!input.trim() || !appointmentID) return

        try{

            const messageId = uuid()

            const messageRef = doc(db, "appointments", appointmentID, "messages", messageId)

            const messageData: MessageType ={

                _id: messageId,
                sender: profile?.type as "doctor" | "patient" | "admin" || "admin",
                senderID: profile?._id || undefined,
                senderName: profile?.name || undefined,
                text: input,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: "sent" as const

            }

            await setDoc(messageRef, messageData)

            setInput('')

        }catch(error){

            console.error("Error sending message:", error)

        }

    }

    return { sendMessage }

}