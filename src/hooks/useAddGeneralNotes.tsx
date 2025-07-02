import { DummyAppointment } from "../assets/dummyData/DummyAppointment"
import { NoteType } from "../assets/types/NoteType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { v4 as uuidv4 } from "uuid"

export const useAddGeneralNotes = () =>{

    const { addNote, notes } = usePatientDetails(),
          { title, setTitle, content, setContent, closeModals } = useNotesTabContext(),
          uuid = uuidv4()   

    const handleAddNote = () =>{

        if(!title.trim() && !content.trim()){

            return

        }

        const newNote: NoteType ={

            _id: uuid,
            title: title.trim(),
            content: content.trim(),
            date: new Date(),
            doctorID: DummyAppointment.doctor._id,
            doctorName: DummyAppointment.doctor.name

        }

        addNote(newNote)

        setTitle('')
        
        setContent('')

        closeModals()

        console.log('New note added:', newNote)

        console.log('All notes:', notes)

    }

    return{

        handleAddNote,
        canSave: title.trim() !== '' && content.trim() !== ''

    }

}
