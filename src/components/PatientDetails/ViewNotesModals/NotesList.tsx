import { AppointmentNoteType } from "../../../assets/types/AppointmentNoteType";

interface NotesListProps{

    note: AppointmentNoteType
    index: number

}

const NotesList: React.FC<NotesListProps> = ({ note, index })=>{

    return(

        <h1>NotesList</h1>

    )

}

export default NotesList