import { MessageType } from "../../../assets/types/MessageType"
import { useLiveChatContext } from "../../../context/LiveChatContext"
import { useProfileContext } from "../../../context/ProfileContext"

interface MessageMenuModalProps{
    message: MessageType | null
}

const MessageMenuModal: React.FC<MessageMenuModalProps> = ({ message }) =>{

    if(!message) return null

    const { profile } = useProfileContext(),
          { openDeleteMessageModal } = useLiveChatContext(),
          sender = profile?.type === "doctor" ? "doctor" : profile?.type === "patient" ? "patient" : "admin"

    return(

        <div className="absolute top-[-7.5rem] right-0 w-44 bg-white dark:bg-gray-800 z-50 rounded-lg shadow-lg p-2">

            <ul className="flex flex-col text-sm text-gray-800 dark:text-gray-100">

                <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Copy</li>

                <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Forward</li>

                <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Reply</li>

                
                {
                
                    sender &&(
    
                        <>

                            <li 
                                className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                                onClick={e =>{
                                    e.stopPropagation()
                                    openDeleteMessageModal(message)
                                }}
                            >Delete</li>

                            <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Edit</li>
                            
                        </>
                    )
                
                }

                {
                
                    profile?.type === "doctor" && sender &&(

                        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Add to patient record</li>
            
                    )
                    
                }

                {
                
                    !sender &&(

                        <li className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">Report</li>
                        
                    )
                    
                }

            </ul>

        </div>

    )

}

export default MessageMenuModal
