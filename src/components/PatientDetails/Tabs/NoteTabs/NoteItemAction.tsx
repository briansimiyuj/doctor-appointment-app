import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi"
import { NoteType } from "../../../../assets/types/NoteType"
import { useNotesTabContext } from "../../../../context/NotesTabContext"

interface NoteCardItemActionProps{

    note: NoteType

}

const NoteItemAction: React.FC<NoteCardItemActionProps> = ({ note })=>{

    const { openViewNoteModal, openDeleteNoteModal } = useNotesTabContext()

    return(

        <div className="flex flex-col mt-6 gap-2">

            <button 
                className="bg-green-600 text-white py-2 px-4 rounded-md transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto mt-2 sm:mt-0"
                onClick={() => openViewNoteModal(note)}
            >

                <FiEye className="w-4 h-4"/>

                View 

            </button>

            <button className="bg-primary-btn hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 flex items-center gap-2 justify-center w-full sm:w-auto">

                <FiEdit className="w-4 h-4"/>

                Edit

            </button>

            <button 
                className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 justify-center py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={() => openDeleteNoteModal(note)}
            >

                <FiTrash2 className="w-4 h-4"/>

                Delete

            </button>

        </div>

    )

}

export default NoteItemAction