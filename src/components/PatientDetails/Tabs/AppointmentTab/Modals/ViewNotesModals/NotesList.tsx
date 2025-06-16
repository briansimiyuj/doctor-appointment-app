import { AppointmentNoteType } from "../../../../../../assets/types/AppointmentNoteType";
import NoteContent from "./NoteContent";
import NoteDiagnosis from "./NoteDiagnosis";
import NoteFollowUp from "./NoteFollowUp";
import NoteHeader from "./NoteHeader";
import NotePrescription from "./NotePrescription";

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

            <NoteDiagnosis diagnosis={note.diagnosis}/>

            <NotePrescription prescription={note.prescription}/>

            <NoteFollowUp followUpDate={note.followUpDate}/>

        </div>

    )

}

export default NotesList