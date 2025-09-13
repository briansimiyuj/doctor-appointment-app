import { MessageType } from "../../../assets/types/MessageType"
import { FiCheck, FiClock } from "react-icons/fi"
import { useProfileContext } from "../../../context/ProfileContext"

interface LiveChatMessageProps{

    message: MessageType

}

const LiveChatMessage: React.FC<LiveChatMessageProps> = ({ message })=>{

    const { profile } = useProfileContext(),
          isAdmin = message.sender === "admin",
          sender = profile?.type === "doctor" ? "doctor" : profile?.type === "patient" ? "patient" : "admin",
          receiver = profile?.type === "patient" ? "doctor" : profile?.type === "doctor" ? "patient" : "admin"

    

    return(

        <div className={`flex ${message.sender !== sender ? "justify-start" : sender ? "justify-end" : "just-center"}`}>

            <div
                className={`px-4 py-3 rounded-xl max-w-sm text-base shadow
                    ${message.sender === sender 
                        ? "bg-green-500 text-white dark:text-white rounded-br-none"
                        : message.sender === receiver
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
                        : message.sender === "admin" ? "bg-yellow-200 text-gray-800 dark:bg-yellow-600 dark:text-gray-100 text-center" : null
                }`}
            >

                {

                    !isAdmin && message.sender !== sender &&(

                        <p className="font-bold text-sm mb-1">{message.senderName}</p>

                    )

                }

                <p className="leading-relaxed">{message.text}</p>

                <p className={`flex items-center justify-end gap-1 text-[11px] mt-1 ${message.sender !== sender ? "text-gray-800" : "text-gray-300"}`}>

                    {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}

                    {
                    
                        sender &&(

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

                            </>

                        )

                    }


                </p>

            </div>

        </div>

    )

}

export default LiveChatMessage