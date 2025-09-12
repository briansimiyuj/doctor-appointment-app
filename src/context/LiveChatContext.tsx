import { createContext, useContext, useState } from "react"
import { MessageType } from "../assets/types/MessageType"

interface LiveChatContextProps{

    messages: MessageType[]
    setMessages: (messages: MessageType[]) => void
    input: string
    setInput: (input: string) => void

}

interface LiveChatContextProviderProps{

    children: React.ReactNode

}

export const LiveChatContext=createContext<LiveChatContextProps | undefined>(undefined)

export const LiveChatContextProvider:React.FC<LiveChatContextProviderProps> = ({ children })=>{

    const [messages, setMessages] = useState<MessageType[]>([]),
          [input, setInput] = useState('')

    const contextValue: LiveChatContextProps ={

        messages,
        setMessages,
        input,
        setInput
        
    }

    return(

        <LiveChatContext.Provider value={contextValue}>

            {children}

        </LiveChatContext.Provider>

    )

}

export const useLiveChatContext=()=>{

    const context = useContext(LiveChatContext)

    if(!context) throw new Error('useLiveChatContext must be used within LiveChatContextProvider')

    return context

}