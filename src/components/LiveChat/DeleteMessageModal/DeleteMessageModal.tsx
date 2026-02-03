import { useLiveChatContext } from "../../../context/LiveChatContext"
import { useDeleteMessage } from "../../../hooks/useDeleteMessage"
import ModalHeader from "../../Profile/Modals/ModalHeader"

const DeleteMessageModal: React.FC = ()=>{

    const { selectedMessage, closeDeleteMessageModal } = useLiveChatContext(),
          { deleteForMe, deleteForEveryone, canDeleteForEveryone, getDeleteRemainingTime, formatDeleteRemainingTime } = useDeleteMessage(),
          canDeleteForAll = selectedMessage && canDeleteForEveryone(selectedMessage),
          deleteRemainingTime = selectedMessage ? getDeleteRemainingTime(selectedMessage) : 0,
          formattedDeleteTime = formatDeleteRemainingTime(deleteRemainingTime),
          isDeleteTimeExpired = deleteRemainingTime <= 0

    const handleDeleteForMe = async () =>{

        if(!selectedMessage) return

        try{

            await deleteForMe(selectedMessage._id)

            closeDeleteMessageModal()

        }catch(error){

            console.error("Failed to delete message for me:", error)

        }

    }

    const handleDeleteForEveryone = async () =>{

        if(!selectedMessage) return

        try{

            await deleteForEveryone(selectedMessage._id)

            closeDeleteMessageModal()

        }catch(error){

            console.error("Failed to delete message for everyone:", error)

        }

    }

    if(!selectedMessage) return null

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="Delete Message" onClose={closeDeleteMessageModal}/>

                <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-6">Are you sure you want to delete this message?</p>

                {
                
                    canDeleteForAll && !isDeleteTimeExpired &&(

                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">

                            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium text-center">

                                ⏰ You can delete for everyone for:{" "}

                                <span className="font-bold">{formattedDeleteTime}</span>

                            </p>

                        </div>

                    )
                
                }

                <div className="flex flex-col gap-3">

                    <button 
                        onClick={handleDeleteForMe}
                        className="w-full py-3 px-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 rounded-lg transition-colors font-medium"
                    >

                        Delete for me
                        
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">Removes this message only from your view</p>

                    </button>

                    {
                    
                        canDeleteForAll &&(

                            <button 
                                onClick={handleDeleteForEveryone}
                                disabled={isDeleteTimeExpired}
                                className={`w-full py-3 px-4 rounded-lg transition-colors font-medium ${
                                    isDeleteTimeExpired 
                                    ? "bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed" 
                                    : "bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800"
                                }`}
                            >

                                Delete for everyone

                                <p className={`text-xs mt-1 ${
                                    isDeleteTimeExpired 
                                    ? "text-gray-500 dark:text-gray-400" 
                                    : "text-red-200 dark:text-red-300"
                                }`}>

                                    {
                                        isDeleteTimeExpired 
                                        ? "Time expired. You can only delete for yourself." 
                                        : "Permanently deletes this message for all participants"
                                    }

                                </p>

                            </button>

                        )
                    
                    }

                    <button 
                        onClick={closeDeleteMessageModal}
                        className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors font-medium mt-2"
                    >Cancel</button>

                </div>

            </div>

        </div>

    )

}

export default DeleteMessageModal