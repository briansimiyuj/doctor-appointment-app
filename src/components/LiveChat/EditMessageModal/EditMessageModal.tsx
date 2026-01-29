import { useEffect, useRef } from "react"
import { useLiveChatContext } from "../../../context/LiveChatContext"
import { FiX } from "react-icons/fi"

const EditMessageModal: React.FC = () =>{

    const { showEditMessageModal, closeEditMessageModal, editText, setEditText, selectedMessage  } = useLiveChatContext(),
    
    textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() =>{

        if(showEditMessageModal && textareaRef.current){

            textareaRef.current.focus()

            textareaRef.current.select()

        }

    }, [showEditMessageModal])

    const handleSave = () =>{

        if(!selectedMessage || !editText.trim()){

            closeEditMessageModal()

            return

        }
        
        closeEditMessageModal()

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) =>{

        if(e.key === "Enter" && !e.shiftKey){

            e.preventDefault()

            handleSave()

        }else if(e.key === "Escape"){

            closeEditMessageModal()

        }

    }

    if(!showEditMessageModal) return null

    return(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

            <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md mx-4"
                onClick={e => e.stopPropagation()}
            >

                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">

                    <h3 className="text-lg font-semiboldsz text-gray-900 dark:text-gray-100">

                        Edit Message

                    </h3>

                    <button 
                        onClick={closeEditMessageModal}
                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >

                        <FiX className="w-5 h-5 text-gray-500 dark:text-gray-400"/>

                    </button>

                </div>

                <div className="p-4">

                    <textarea
                        ref={textareaRef}
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows={4}
                        placeholder="Edit your message..."
                        autoFocus
                    />

                    <div className="flex justify-end gap-3 mt-4">

                        <button
                            onClick={closeEditMessageModal}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold bg-gray-300 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >Cancel</button>

                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white dark:text-white font-semibold rounded-lg flex items-center gap-2 transition-colors"
                        >Save Changes</button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default EditMessageModal