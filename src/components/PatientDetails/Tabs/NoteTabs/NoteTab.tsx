import { useNotesTabContext } from "../../../../context/NotesTabContext"
import AddNotesModal from "./Modals/AddNotesModal"
import NoteTabHeader from "./NoteTabHeader"

const NoteTab: React.FC = ()=>{

    const { showAddNoteModal } = useNotesTabContext()

    return(

        <div className="p-4">
        
            <NoteTabHeader/>

            { showAddNoteModal && <AddNotesModal/> }
        
        </div>

    )

}

export default NoteTab