import { useNotesTabContext } from "../context/NotesTabContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useToast } from "./useToast"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useDeleteNote = () =>{

    const { selectedNote, closeModals } = useNotesTabContext(),
          { removeNote } = usePatientDetails(),
          { appointmentID } = useAppointmentsContext(),
          { showToast } = useToast()

    if(!selectedNote){
        console.error("No note selected for deletion.")
        return { handleDeleteNote: () => {} }
    }

    const handleDeleteNote = async() =>{
        
        if(!appointmentID) return

        try{

            const noteRef = doc(db, "appointments", appointmentID, "generalNotes", selectedNote._id)

            await deleteDoc(noteRef)

            removeNote(selectedNote._id)

            closeModals()

            showToast("Note deleted successfully", "success")
            
        }catch(err){

            const error = err as Error

            console.error('Failed to delete note: ', error.message)

            showToast(`Failed to delete note: ${error.message}`, "error")

        }
    }

    return { handleDeleteNote }

}