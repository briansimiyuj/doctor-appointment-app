import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import AddNotesModal from "./Modals/AddNotesModal"
import NotesList from "./NotesList"
import NoteTabHeader from "./NoteTabHeader"

const NoteTab: React.FC = ()=>{

    const { showAddNoteModal } = useNotesTabContext(),
          { notes } = usePatientDetails()

    return(

        <div className="p-4">
        
            <NoteTabHeader/>

            {

                notes && notes.length > 0 ?(

                    <NotesList/>
                    
                ):(

                    <div className="text-center py-8">

                        <p className="text-gray-500">No notes available for this patient.</p>

                    </div>

                )

            }

            { showAddNoteModal && <AddNotesModal/> }
        
        </div>

    )

}

export default NoteTab