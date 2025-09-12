import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import ViewNotesModal from "../../../PatientDetails/Tabs/NoteTabs/Modals/ViewNotesModals/ViewNotesModal"
import NotesList from "../../../PatientDetails/Tabs/NoteTabs/NotesList"
import NoteTabHeader from "../../../PatientDetails/Tabs/NoteTabs/NoteTabHeader"
import NoteCommentModal from "./Modals/NoteCommentModal"

const NoteTab: React.FC = ()=>{

    const { showViewNoteModal, showNoteCommentsModal } = useNotesTabContext(),
            { notes } = usePatientDetails()

    return(

        <>
        
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

            { showViewNoteModal && <ViewNotesModal/> }

            { showNoteCommentsModal && <NoteCommentModal/> }
        
        </>

    )

}

export default NoteTab