import { useLiveChatContext } from "../../../context/LiveChatContext"
import { useDeleteMessage } from "../../../hooks/useDeleteMessage"
import ModalHeader from "../../Profile/Modals/ModalHeader"

const DeleteMessageModal: React.FC = ()=>{

    const { selectedMessage, closeDeleteMessageModal } = useLiveChatContext(),
          { deleteForMe, deleteForEveryone, canDeleteForEveryone } = useDeleteMessage(),
          canDeleteForAll = selectedMessage && canDeleteForEveryone(selectedMessage.senderID)

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

                <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-6">
                    Are you sure you want to delete this message?
                </p>

                {/* Single button container with all options */}
                <div className="flex flex-col gap-3">

                    <button 
                        onClick={handleDeleteForMe}
                        className="w-full py-3 px-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 rounded-lg transition-colors font-medium"
                    >
                        Delete for me
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            Removes this message only from your view
                        </p>
                    </button>

                    {
                    
                        canDeleteForAll &&(

                            <button 
                                onClick={handleDeleteForEveryone}
                                className="w-full py-3 px-4 bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800 rounded-lg transition-colors font-medium"
                            >
                                Delete for everyone
                                <p className="text-xs text-red-200 dark:text-red-300 mt-1">
                                    Permanently deletes this message for all participants
                                </p>
                            </button>

                        )
                    
                    }

                    <button 
                        onClick={closeDeleteMessageModal}
                        className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors font-medium mt-2"
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    )

}

export default DeleteMessageModal