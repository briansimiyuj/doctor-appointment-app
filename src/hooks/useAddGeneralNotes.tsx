import { NoteType } from "../assets/types/NoteType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useProfileContext } from "../context/ProfileContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useToast } from "./useToast"
import { v4 as uuidv4 } from "uuid"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useAddGeneralNotes = () =>{

    const { addNote } = usePatientDetails(),
        { title, setTitle, content, setContent, closeModals } = useNotesTabContext(),
        { profile } = useProfileContext(),
        { appointmentID } = useAppointmentsContext(),
        { showToast } = useToast(),
        canSave = title.trim() !== '' && content.trim() !== ''

    const handleAddNote = async() =>{

        if(!title.trim() && !content.trim()){

            showToast("Please enter a title and content", "error")

            return

        }

        if(profile?.type !== "doctor" || !appointmentID){

            console.warn("Invalid profile type or missing appointmentID")

            return

        }

        const newNote: NoteType ={

            _id: uuidv4(),
            title: title.trim(),
            content: content.trim(),
            date: new Date(),
            doctorID: profile._id,
            doctorName: profile.name,

        }

        try{

            const notesRef = collection(db, "appointments", appointmentID, "generalNotes"),
                  docRef = await addDoc(notesRef, newNote)

            console.log('Note written to Firestore with ID:', docRef.id)

            addNote(newNote)

            setTitle('')

            setContent('')

            closeModals()

            showToast("Note added successfully", "success")

            console.log('New note added:', newNote)

        }catch(err){

            const error = err as Error

            console.error('Failed to add note: ', error.message)

            showToast(`Failed to add note: ${error.message}`, "error")

        }

    }

    return{

        handleAddNote,
        canSave

    }

}