import { createContext, useContext, useEffect, useState } from "react"
import { MessageType } from "../assets/types/MessageType"
import { dummyMessages } from "../assets/dummyData/dummyMessages"
import { LiveChatContextProps } from "../assets/contextProps/LiveChatContextProps"

interface LiveChatContextProviderProps{

    children: React.ReactNode

}

export const LiveChatContext=createContext<LiveChatContextProps | undefined>(undefined)

export const LiveChatContextProvider:React.FC<LiveChatContextProviderProps> = ({ children })=>{

    const [messages, setMessages] = useState<MessageType[]>(() =>{

        const savedMessages = localStorage.getItem("messages")

        return savedMessages ? JSON.parse(savedMessages) : dummyMessages

    }),
          [input, setInput] = useState(''),
          [messageMenuModal, setMessageMenuModal] = useState(false),
          [selectedMessage, setSelectedMessage] = useState<MessageType | null>(null),
          [hoveredMessage, setHoveredMessage] = useState<MessageType | null>(null)

    useEffect(() =>{
    
       localStorage.setItem("messages", JSON.stringify(messages))
    
    }, [messages])

    const openMessageMenu = (message: MessageType) =>{

        setSelectedMessage(message)
        
        setMessageMenuModal(true)
        
    }

    const closeMessageMenu = () =>{

        setMessageMenuModal(false)

        setSelectedMessage(null)

    }

    const handleHoverMessage = (message: MessageType | null) =>{
    
       setHoveredMessage(message)
    
    }

    const contextValue: LiveChatContextProps ={

        messages,
        setMessages,
        selectedMessage,
        input,
        setInput,
        messageMenuModal,
        setMessageMenuModal,
        openMessageMenu,
        closeMessageMenu,
        hoveredMessage,
        handleHoverMessage

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