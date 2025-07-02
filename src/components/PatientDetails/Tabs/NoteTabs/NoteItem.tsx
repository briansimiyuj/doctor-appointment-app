import { NoteType } from "../../../../assets/types/NoteType"
import NoteItemAction from "./NoteItemAction"

interface NoteItemProps{

    note: NoteType

}

const NoteItem: React.FC<NoteItemProps> = ({ note })=>{

    const truncatedContent = note.content.length > 120 ? note.content.slice(0, 120) + "..." : note.content

    return(

        <li className="border rounded-md p-4 shadow hover:shadow-md transition duration-300" key={note._id}>

            <h4 className="text-base font-semibold mb-2">{note.title}</h4>

            <p className="text-gray-700 mb-2">{truncatedContent}</p>

            <div className="text-sm text-gray-500">

                <span>By: {note.doctorName}</span> ·{" "}

                <span>{new Date(note.date).toLocaleDateString()}</span>

            </div>
            
            <NoteItemAction note={note}/>

        </li>

    )

}

export default NoteItem