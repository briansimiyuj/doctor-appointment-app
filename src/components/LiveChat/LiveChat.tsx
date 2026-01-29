import { NoteType } from "../../assets/types/NoteType"
import { useLiveChatContext } from "../../context/LiveChatContext"
import DeleteMessageModal from "./DeleteMessageModal/DeleteMessageModal"
import LiveChatHeader from "./LiveChatHeader"
import LiveChatInput from "./LiveChatInput"
import LiveChatMessages from "./LiveChatMessages/LiveChatMessages"
import { useEffect, useRef } from "react"
import TypingIndicator from "./TypingIndicator"
import EditMessageModal from "./EditMessageModal/EditMessageModal"

interface LiveChatProps{

    note: NoteType | null

}

const LiveChat: React.FC<LiveChatProps> = ({ note })=>{

    const messagesContainerRef = useRef<HTMLDivElement>(null),
          { messages, showDeleteMessageModal, showEditMessageModal } = useLiveChatContext()

    useEffect(() =>{

        if(messagesContainerRef.current){

            const container = messagesContainerRef.current

            container.scrollTop = container.scrollHeight

        }

    }, [messages])

    return(

        <div className="flex flex-col h-full p-4">

            { !note && <LiveChatHeader/> }

            <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto px-2 my-2 min-h-0 overflow-anchor-none"
            >

                <LiveChatMessages/>

                <TypingIndicator/>

            </div>

           <LiveChatInput/> 

           { showDeleteMessageModal && <DeleteMessageModal/> }

           { showEditMessageModal && <EditMessageModal/> }

        </div>

    )

}

export default LiveChat