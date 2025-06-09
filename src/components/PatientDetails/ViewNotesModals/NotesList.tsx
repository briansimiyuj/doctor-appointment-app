import { AppointmentNoteType } from "../../../assets/types/AppointmentNoteType";
import NoteContent from "./NoteContent";
import NoteHeader from "./NoteHeader";

interface NotesListProps{

    note: AppointmentNoteType
    index: number

}

const NotesList: React.FC<NotesListProps> = ({ note, index })=>{

    return(

        <div className="border rounded p-4 bg-gray-50">

            <NoteHeader
                index={index}
                createdAt={note.createdAt}
            />

            <NoteContent notes={note.notes}/>

        </div>

    )

}

export default NotesList