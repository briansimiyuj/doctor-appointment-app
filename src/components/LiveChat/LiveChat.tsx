import { NoteType } from "../../assets/types/NoteType"

interface LiveChatProps{

    note: NoteType | null

}

const LiveChat: React.FC<LiveChatProps> = ({ note })=>{

    return(

        <h1>LiveChat</h1>

    )

}

export default LiveChat
