import { useEffect } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useProfileContext } from "../context/ProfileContext"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useLiveChatContext } from "../context/LiveChatContext"

export const useMessageStatus = ()=>{

    const { profile } = useProfileContext(),
          { appointment } = useManageAppointmentContext(),
          { messages } = useLiveChatContext(),
          appointmentID = appointment?._id || "",
          currentUserType = profile?.type

    useEffect(() =>{

        if(!appointmentID || !currentUserType) return

 
        const messagesToDeliver = messages.filter(msg =>

            msg.sender !== currentUserType && 
            msg.status === "sent" && 
            msg.senderID !== profile?._id 
            
        )

        
        messagesToDeliver.forEach(async message =>{

            try{

                const messageRef = doc(db, "appointments", appointmentID, "messages", message._id)

                await updateDoc(messageRef, {
                    
                    status: "delivered",
                    updatedAt: new Date().toISOString()
                    
                })

            }catch(error){

                console.error("Error updating message status:", error)

            }

        })

    }, [messages, appointmentID, currentUserType, profile?._id])

    const markAsRead = async (messageId: string) =>{

        if(!appointmentID) return

        try{

            const messageRef = doc(db, "appointments", appointmentID, "messages", messageId)

            await updateDoc(messageRef, {
                
                status: "read",
                updatedAt: new Date().toISOString()
                
            })

        }catch(error){

            console.error("Error marking message as read:", error)

        }

    }

    return { markAsRead }

}