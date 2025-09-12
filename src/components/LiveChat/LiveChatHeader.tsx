import { NoteType } from "../../assets/types/NoteType"

interface LiveChatHeaderProps{

    note: NoteType | null

}

const LiveChatHeader: React.FC<LiveChatHeaderProps> = ({ note })=>{

    return(

        <div className="mb-4 border-b pb-2">
            
            <h2 className="text-lg font-semibold">{note ? `Comment on ${note.title}`: "Live Chat" }</h2>

        </div>


    )

}

export default LiveChatHeader