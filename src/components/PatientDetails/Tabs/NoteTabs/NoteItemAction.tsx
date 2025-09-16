import { FiEdit, FiEye, FiTrash2, FiDownload, FiMessageCircle } from "react-icons/fi"
import { NoteType } from "../../../../assets/types/NoteType"
import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { useProfileContext } from "../../../../context/ProfileContext"
import { useExportDocument } from "../../../../hooks/useExportDocument"

interface NoteCardItemActionProps{

    note: NoteType

}

const NoteItemAction: React.FC<NoteCardItemActionProps> = ({ note }) =>{

    const { openViewNoteModal, openDeleteNoteModal, openEditNoteModal, openNoteCommentsModal } = useNotesTabContext(),
          { profile } = useProfileContext(),
          { handleExportDocument } = useExportDocument()

    return(

        <div className="flex flex-col mt-6 gap-2">

            <button 
                className="bg-green-600 text-white dark:text-white py-2 px-4 rounded-md transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto mt-2 sm:mt-0"
                onClick={() => openViewNoteModal(note)}
            >

                <FiEye className="w-4 h-4"/>

                View 

            </button>

            <button 
                className="bg-primary-btn hover:bg-blue-600 text-white dark:text-white py-2 px-4 rounded-md transition duration-300 flex items-center gap-2 justify-center w-full sm:w-auto"
                onClick={() => openNoteCommentsModal(note)}
            >
                <FiMessageCircle className="w-4 h-4"/>

                Comment

            </button>

            {

                profile?.type === "doctor" ?(

                    <>

                        <button 
                            className="bg-yellow-800 hover:bg-yellow-900 text-white dark:text-white py-2 px-4 rounded-md transition duration-300 flex items-center gap-2 justify-center w-full sm:w-auto"
                            onClick={() => openEditNoteModal(note)}
                        >
                    
                            <FiEdit className="w-4 h-4"/>
                    
                            Edit

                        </button>

                        <button 
                            className="bg-red-500 hover:bg-red-600 text-white dark:text-white flex items-center gap-2 justify-center py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                            onClick={() => openDeleteNoteModal(note)}
                        >
                            
                            <FiTrash2 className="w-4 h-4"/>
                            
                            Delete

                        </button>

                    </>

                ):(

                    <>


                        <button 
                            className="bg-gray-700 hover:bg-gray-800 text-white dark:text-white flex items-center gap-2 justify-center py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                            onClick={() => handleExportDocument(note, "note")}
                        >

                            <FiDownload className="w-4 h-4"/>

                            Download

                        </button>

                    </>

                )
                
            }

        </div>

    )
    
}

export default NoteItemAction