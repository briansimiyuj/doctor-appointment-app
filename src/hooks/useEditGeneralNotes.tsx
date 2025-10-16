import { NoteType } from "../assets/types/NoteType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useToast } from "./useToast"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useEditGeneralNotes = () =>{

    const { selectedNote, title, content, closeModals } = useNotesTabContext(),
          { updateNote } = usePatientDetails(),
          { appointmentID } = useAppointmentsContext(),
          { showToast } = useToast()

    if(!selectedNote){

        console.error("No note selected for editing.")

        return { handleUpdate: () => {}, canUpdate: false }

    }

    const trimmedTitle = title.trim(),
          trimmedContent = content.trim(),
          canUpdate = trimmedTitle !== "" && trimmedContent !== "" && (trimmedTitle !== selectedNote.title || trimmedContent !== selectedNote.content)

    const handleUpdate = async() =>{
        
        if(!canUpdate || !appointmentID) return

        const updatedNote: NoteType ={

            ...selectedNote,
            title: trimmedTitle,
            content: trimmedContent

        }

        try{

            const noteRef = doc(db, "appointments", appointmentID, "generalNotes", selectedNote._id)

            await updateDoc(noteRef, {
                title: trimmedTitle,
                content: trimmedContent
            })

            updateNote(updatedNote)

            closeModals()

            showToast("Note updated successfully", "success")

        }catch(err){

            const error = err as Error

            console.error('Failed to update note: ', error.message)

            showToast(`Failed to update note: ${error.message}`, "error")

        }

    }

    return { handleUpdate, canUpdate }

}