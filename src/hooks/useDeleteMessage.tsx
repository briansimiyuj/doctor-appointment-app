import { doc, deleteDoc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useProfileContext } from "../context/ProfileContext"
import { useLiveChatContext } from "../context/LiveChatContext"
import { useToast } from "./useToast"
import { MessageType } from "../assets/types/MessageType"
import { formatRemainingTime, getRemainingTime, isWithinTimeLimit, MessageTimeLimits } from "../assets/utils/messageTimeLimits"

export const useDeleteMessage = () =>{

    const { appointment } = useManageAppointmentContext(),
          { profile } = useProfileContext(),
          { setSelectedMessage } = useLiveChatContext(),
          { showToast } = useToast(),
          appointmentID = appointment?._id || "",
          currentUserID = profile?._id

    const deleteForMe = async (messageID: string) =>{

        if(!appointmentID || !currentUserID) return

        try{

            const messageRef = doc(db, "appointments", appointmentID, "messages", messageID)

            await updateDoc(messageRef, {

                deletedFor: arrayUnion(currentUserID),
                updatedAt: new Date().toISOString()

            })

            setSelectedMessage(null)

            showToast("Message deleted for me.", "success")

        }catch(error){

            console.error("Error deleting message for me:", error)

            showToast("Failed to delete message for me.", "error")

            throw error

        }

    }

    const deleteForEveryone = async (messageID: string) =>{

        if(!appointmentID) return

        try{

            const messageRef = doc(db, "appointments", appointmentID, "messages", messageID)

            await deleteDoc(messageRef)

            setSelectedMessage(null)
            
            showToast("Message deleted for everyone.", "success")

        }catch(error){

            console.error("Error deleting message for everyone:", error)

            showToast("Failed to delete message for everyone.", "error")

            throw error

        }

    }

    const canDeleteForEveryone = (message: MessageType): boolean =>{

        if(!message || !currentUserID) return false

        const isSender = message.senderID === currentUserID
        if(!isSender) return false

        return isWithinTimeLimit(message, MessageTimeLimits.deleteForEveryone)
    
    }

    const getDeleteRemainingTime = (message: MessageType): number =>{
    
        return getRemainingTime(message, MessageTimeLimits.deleteForEveryone)
    
    }

    const formatDeleteRemainingTime = (remainingTime: number): string =>{

        return formatRemainingTime(remainingTime)

    }

    return{ 
        
        deleteForMe, 
        deleteForEveryone, 
        canDeleteForEveryone, 
        getDeleteRemainingTime, 
        formatDeleteRemainingTime 

    }

}