import { NoteType } from "../assets/types/NoteType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useEditGeneralNotes = () =>{

    const { selectedNote, title, content, closeModals } = useNotesTabContext(),
          { updateNote } = usePatientDetails()

    if(!selectedNote){

        console.error("No note selected for editing.")

        return { handleUpdate: () => {}, canUpdate: false }

    }

    const trimmedTitle = title.trim(),
          trimmedContent = content.trim(),
          canUpdate = trimmedTitle !== "" && trimmedContent !== "" && (trimmedTitle !== selectedNote.title || trimmedContent !== selectedNote.content)

    const handleUpdate = () =>{
        
        if(!canUpdate) return

        const updatedNote: NoteType ={

            ...selectedNote,
            title: trimmedTitle,
            content: trimmedContent

        }

        updateNote(updatedNote)

        closeModals()

        console.log('Note updated.')

    }

    return { handleUpdate, canUpdate }
}
