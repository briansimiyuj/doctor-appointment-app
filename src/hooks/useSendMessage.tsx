import { useLiveChatContext } from "../context/LiveChatContext"
import { MessageType } from "../assets/types/MessageType"
import { v4 as uuid } from "uuid"
import { useProfileContext } from "../context/ProfileContext"

export const useSendMessage = ()=>{

    const { input, setInput, messages, setMessages } = useLiveChatContext(),
          { profile } = useProfileContext()

    const sendMessage = ()=>{

        if(!input.trim()) return

        const newMessage: MessageType ={

            _id: uuid(),
            sender: profile?.type ?? "admin",
            senderID: profile?._id,
            senderName: profile?.name,
            text: input,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: "sent"

        }

        setMessages([...messages, newMessage])

        localStorage.setItem("messages", JSON.stringify([...messages, newMessage]))

        setInput('')

    }

    return { sendMessage }

}
