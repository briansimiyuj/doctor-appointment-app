import { NoteType } from "../../assets/types/NoteType"
import LiveChatHeader from "./LiveChatHeader"
import LiveChatInput from "./LiveChatInput"

interface LiveChatProps{

    note: NoteType | null

}

const LiveChat: React.FC<LiveChatProps> = ({ note })=>{

    return(

        <div className="flex flex-col h-full p-4">

            <LiveChatHeader note={note}/>

           <LiveChatInput/> 

        </div>

    )

}

export default LiveChat
