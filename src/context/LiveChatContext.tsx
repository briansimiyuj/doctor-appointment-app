import { createContext, useContext, useEffect, useState } from "react"
import { MessageType } from "../assets/types/MessageType"
import { LiveChatContextProps } from "../assets/contextProps/LiveChatContextProps"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useProfileContext } from "./ProfileContext"

interface LiveChatContextProviderProps{

    children: React.ReactNode

}

export const LiveChatContext=createContext<LiveChatContextProps | undefined>(undefined)

export const LiveChatContextProvider:React.FC<LiveChatContextProviderProps> = ({ children })=>{

    const [messages, setMessages] = useState<MessageType[]>([]),
          [input, setInput] = useState(''),
          [messageMenuModal, setMessageMenuModal] = useState(false),
          [selectedMessage, setSelectedMessage] = useState<MessageType | null>(null),
          [showDeleteMessageModal, setShowDeleteMessageModal] = useState(false),
          [hoveredMessage, setHoveredMessage] = useState<MessageType | null>(null),
          [loading, setLoading] = useState<boolean>(true),
          [editText, setEditText] = useState(''),
          [showEditMessageModal, setShowEditMessageModal] = useState(false),
          [error, setError] = useState<string | null>(null),
          [unreadCount, setUnreadCount] = useState<number>(0),
          [lastReadMessageID, setLastReadMessageID] = useState<string | null>(null),
          [newMessageIDsSinceLastRead, setNewMessageIDsSinceLastRead] = useState<Set<string>>(new Set()),
          { isChatModalOpen } = useManageAppointmentContext(),
          { appointment } = useManageAppointmentContext(),
          { profile } = useProfileContext(),
          appointmentID = appointment?._id || ""

    useEffect(() =>{
    
        if(!profile || !appointmentID || messages.length === 0) return

        if(isChatModalOpen){

            if(messages.length > 0){

                const lastMessage = messages[messages.length - 1]

                setLastReadMessageID(lastMessage._id)

                setNewMessageIDsSinceLastRead(new Set())

                setUnreadCount(0)

            }

            return

        }

        let newUnread = 0

        const newMessageIDs = new Set<string>()

        messages.forEach(message =>{

            if(message.senderID === profile._id) return

            if(lastReadMessageID){

                const lastReadMessage = messages.find(msg => msg._id === lastReadMessageID)

                if(!lastReadMessage) return

                const lastReadTime = new Date(lastReadMessage.createdAt as string).getTime(),
                      messageTime = new Date(message.createdAt as string).getTime()

                if(messageTime > lastReadTime && !newMessageIDsSinceLastRead.has(message._id)){

                    newUnread++

                    newMessageIDs.add(message._id)

                }

            }else{

                if(!newMessageIDsSinceLastRead.has(message._id)){

                    newUnread++
              
                    newMessageIDs.add(message._id)

                }

            }
            
        })

        if(newUnread > 0){

            setUnreadCount(prev => prev + newUnread)    

            setNewMessageIDsSinceLastRead(prev =>{

                const updatedSet = new Set(prev)

                newMessageIDs.forEach(ID => updatedSet.add(ID))

                return updatedSet

            })

        }
    
    }, [messages, isChatModalOpen, lastReadMessageID, profile, appointmentID, newMessageIDsSinceLastRead])

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
                
                const isDeletedForCurrentUser = message.deletedFor?.includes(profile?._id || "")
                
                if(!isDeletedForCurrentUser){

                    newMessages.push(message)

                }

            })

            setMessages(newMessages)

            setLoading(false)

        }, (error) =>{

            console.error("Error fetching messages:", error)

            setError("Failed to load messages")

            setLoading(false)

        })

        return () => unsubscribe()

    }, [appointmentID, profile?._id]) 

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

    const openDeleteMessageModal = (message: MessageType) =>{
    
        setSelectedMessage(message)

        setShowDeleteMessageModal(true)
    
    }

    const closeDeleteMessageModal = () =>{

        setShowDeleteMessageModal(false)

        setSelectedMessage(null)

    }

    const openEditMessageModal = (message: MessageType) =>{
    
       setSelectedMessage(message)

       setEditText(message.text)

       setShowEditMessageModal(true)

       closeMessageMenu()
    
    }

    const closeEditMessageModal = () =>{
        
        setShowEditMessageModal(false)

        setSelectedMessage(null)

        setEditText('')
    }

    const handleAddNewMessageID = (messageID: string) =>{

        setNewMessageIDsSinceLastRead(prev => new Set(prev).add
       
        (messageID))

    }

    const markMessagesAsRead = () =>{

        if(messages.length > 0){

            const lastMessage = messages[messages.length - 1]

            setLastReadMessageID(lastMessage._id)

        }

        setNewMessageIDsSinceLastRead(new Set())

        setUnreadCount(0)

    }

    const contextValue: LiveChatContextProps ={

        messages,
        setMessages,
        selectedMessage,
        setSelectedMessage,
        input,
        setInput,
        messageMenuModal,
        setMessageMenuModal,
        openMessageMenu,
        closeMessageMenu,
        hoveredMessage,
        handleHoverMessage,
        loading,
        error,
        showDeleteMessageModal,
        openDeleteMessageModal,
        closeDeleteMessageModal,
        editText,
        setEditText,
        showEditMessageModal,
        openEditMessageModal,
        closeEditMessageModal,
        unreadCount,
        setUnreadCount,
        lastReadMessageID,
        setLastReadMessageID,
        markMessagesAsRead,
        newMessageIDsSinceLastRead,
        setNewMessageIDsSinceLastRead: handleAddNewMessageID,

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