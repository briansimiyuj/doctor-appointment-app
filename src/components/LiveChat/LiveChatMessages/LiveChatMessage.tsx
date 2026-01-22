import { MessageType } from "../../../assets/types/MessageType"
import { FiCheck, FiChevronDown, FiClock } from "react-icons/fi"
import { useProfileContext } from "../../../context/ProfileContext"
import { useLiveChatContext } from "../../../context/LiveChatContext"
import { useMessageStatus } from "../../../hooks/useMessageStatus"

interface LiveChatMessageProps{

    message: MessageType

}

const LiveChatMessage: React.FC<LiveChatMessageProps> = ({ message })=>{

    const { profile } = useProfileContext(),
          { openMessageMenu, handleHoverMessage, hoveredMessage } = useLiveChatContext(),
          { markAsRead } = useMessageStatus(),
          isAdmin = message.sender === "admin",
          isCurrentUserSender = message.sender === profile?.type,
          senderName = profile?.type === "doctor" ? "doctor" : 
                      profile?.type === "patient" ? "patient" : "admin",
          receiver = profile?.type === "patient" ? "doctor" : 
                    profile?.type === "doctor" ? "patient" : "admin"

    const handleHover = () =>{

        handleHoverMessage(message)

        if(!isCurrentUserSender && message.status === "delivered"){

            markAsRead(message._id)

        }

    }

    return(

        <div className={`flex ${message.sender !== senderName ? "justify-start" : "justify-end"}`}>

            <div
                className={`px-4 py-5 rounded-xl max-w-sm text-base shadow relative
                    ${message.sender === senderName 
                        ? "bg-green-500 text-white dark:text-white rounded-br-none"
                        : message.sender === receiver
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
                        : message.sender === "admin" ? "bg-yellow-200 text-gray-800 dark:bg-yellow-600 dark:text-gray-100 text-center" : null
                }`}
                onMouseOver={handleHover}
                onMouseLeave={() => handleHoverMessage(null)}
            >

                {

                    !isAdmin && message.sender !== senderName &&(

                        <p className="font-bold text-sm mb-1">{message.senderName}</p>

                    )

                }

                <p className="leading-relaxed">{message.text}</p>

                <p className={`flex items-center justify-end gap-1 text-[11px] mt-1 ${message.sender !== senderName ? "text-gray-800" : "text-gray-300"}`}>

                    {new Date(message.createdAt as string | number).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}

                    {
                    
                        isCurrentUserSender &&(

                            <>

                                { message.status === "sent" && <FiCheck className="w-4 h-4 text-gray-800"/> }

                                {
                            
                                    message.status === "delivered" &&(

                                        <span className="flex -space-x-1">

                                            <FiCheck className="w-4 h-4 text-gray-700"/>

                                            <FiCheck className="w-4 h-4 text-gray-700"/>

                                        </span>

                                    )

                                }

                                {

                                    message.status === "read" &&(

                                        <span className="flex -space-x-1">

                                            <FiCheck className="w-4 h-4 text-blue-700"/>

                                            <FiCheck className="w-4 h-4 text-blue-700"/>

                                        </span>

                                    )

                                }

                                {

                                    message.status === "error" &&(

                                        <span className="flex -space-x-1">

                                            <FiClock className="w-4 h-4 text-red-500"/>

                                        </span>
                                        
                                    )

                                }

                                {

                                    hoveredMessage?._id === message._id && !isAdmin &&(

                                        <span className="absolute top-1 right-2 cursor-pointer" onClick={() => openMessageMenu(message)}>

                                           <FiChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-900"
                                           />                                        

                                        </span>
                                    )

                                }

                            </>

                        )

                    }


                </p>

            </div>

        </div>

    )

}

export default LiveChatMessage