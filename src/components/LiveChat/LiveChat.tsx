import { NoteType } from "../../assets/types/NoteType"
import LiveChatHeader from "./LiveChatHeader"
import LiveChatInput from "./LiveChatInput"
import LiveChatMessages from "./LiveChatMessages/LiveChatMessages"

interface LiveChatProps{

    note: NoteType | null

}

const LiveChat: React.FC<LiveChatProps> = ({ note })=>{

    return(

        <div className="flex flex-col h-full p-4">

            { !note && <LiveChatHeader/> }

            <div className="flex-1 overflow-y-auto px-2 my-2 min-h-0">

                <LiveChatMessages/>

            </div>

           <LiveChatInput/> 

        </div>

    )

}

export default LiveChat
