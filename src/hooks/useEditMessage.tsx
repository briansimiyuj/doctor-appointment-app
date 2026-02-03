import { doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useLiveChatContext } from "../context/LiveChatContext"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useProfileContext } from "../context/ProfileContext"
import { useToast } from "./useToast"
import { db } from "../firebaseConfig"
import { MessageType } from "../assets/types/MessageType"
import { formatRemainingTime, getRemainingTime, isWithinTimeLimit, MessageTimeLimits } from "../assets/utils/messageTimeLimits"

export const useEditMessage = () =>{

    const { messages, setMessages } = useLiveChatContext(),
          { profile } = useProfileContext(),
          { appointment } = useManageAppointmentContext(),
          { showToast } = useToast(),
          appointmentID = appointment?._id || ""

    const editMessage = async(messageID: string, newText: string): Promise<boolean> =>{

        if(!newText.trim() || !appointmentID || !messageID){

            showToast("Cannot edit message", "error")
          
            return false

        }

        const originalMessage = messages.find(message => message._id === messageID)

        if(originalMessage && newText.trim() === originalMessage.text.trim()) return false

        try{
        
            const messageRef = doc(db, "appointments", appointmentID, "messages", messageID)

            const updatedData ={

                text: newText.trim(),
                updatedAt: serverTimestamp(),
                isEdited: true

            }

            await updateDoc(messageRef, updatedData)

            const updatedMessages = messages.map(msg => 
                
                msg._id === messageID ?{ 
                    ...msg, 
                    text: newText.trim(),
                    isEdited: true,
                    updatedAt: new Date().toISOString()
                    }
                : msg

            )

            setMessages(updatedMessages)

            showToast("Message edited successfully", "success")            

            return true

        
        }catch(error){
        
           console.error('Error editing message: ', error)

           showToast("Failed to edit message", "error")

           return false
        
        }
    
    }

    const canEditMessage = (message: MessageType): boolean =>{
    
       if(!profile || !message) return false

       const isSender = message.senderID === profile._id

       if(!isSender) return false

       const isNotDeleted = !message.deletedFor?.includes(profile._id || "")

       if(!isNotDeleted) return false
       
       return isWithinTimeLimit(message, MessageTimeLimits.edit)

    }

    const getEditRemainingTime = (message: MessageType): number =>{
    
       return getRemainingTime(message, MessageTimeLimits.edit)
    
    }
    const formatEditRemainingTime = (remainingTime: number): string =>{

        return formatRemainingTime(remainingTime)

    }
          
    return{ 

        editMessage, 
        canEditMessage, 
        getRemainingTime: getEditRemainingTime, 
        formatRemainingTime: formatEditRemainingTime

    }

}
