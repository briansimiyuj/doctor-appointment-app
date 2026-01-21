import { createContext, useContext, useEffect, useState } from "react"
import { MessageType } from "../assets/types/MessageType"
import { LiveChatContextProps } from "../assets/contextProps/LiveChatContextProps"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebaseConfig"

interface LiveChatContextProviderProps{

    children: React.ReactNode

}

export const LiveChatContext=createContext<LiveChatContextProps | undefined>(undefined)

export const LiveChatContextProvider:React.FC<LiveChatContextProviderProps> = ({ children })=>{

    const [messages, setMessages] = useState<MessageType[]>([]),
          [input, setInput] = useState(''),
          [messageMenuModal, setMessageMenuModal] = useState(false),
          [selectedMessage, setSelectedMessage] = useState<MessageType | null>(null),
          [hoveredMessage, setHoveredMessage] = useState<MessageType | null>(null),
          [loading, setLoading] = useState<boolean>(true),
          [error, setError] = useState<string | null>(null),
          { appointment } = useManageAppointmentContext(),
          appointmentID = appointment?._id || ""

    useEffect(() =>{
    
        if(!appointmentID){

            setMessages([])

            setLoading(false)

            return

        }

        setLoading(true)

        setError(null)

        const messagesRef = collection(db, "appointments", appointmentID, "messages"),
              q = query(messagesRef, orderBy("createdAt", "asc"))

        const unsubscribe = onSnapshot(q, (snapshot) =>{

            const newMessages: MessageType[] = []

            snapshot.forEach((doc) =>{

                const message = doc.data() as MessageType

                newMessages.push(message)

            })

            setMessages(newMessages)

            setLoading(false)

        }, (error) =>{

            console.error("Error fetching messages:", error)

            setError("Failed to load messages")

            setLoading(false)

        })

        return () => unsubscribe()
    
    }, [appointmentID])

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
        handleHoverMessage,
        loading,
        error

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