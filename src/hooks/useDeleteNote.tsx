import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useDeleteNote = () =>{

    const { selectedNote, closeModals } = useNotesTabContext(),
          { removeNote  } = usePatientDetails()

    const handleDeleteNote = () =>{
    
        if(selectedNote){
        
            removeNote(selectedNote._id)
    
            closeModals()
    
            console.log(`Note ${selectedNote.title} deleted successfully.`)

        }
    
    }          

    return { handleDeleteNote }

}
