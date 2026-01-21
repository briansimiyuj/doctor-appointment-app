import { NoteType } from "../../assets/types/NoteType"
import LiveChatHeader from "./LiveChatHeader"
import LiveChatInput from "./LiveChatInput"
import LiveChatMessages from "./LiveChatMessages/LiveChatMessages"
import { useEffect, useRef } from "react"

interface LiveChatProps{

    note: NoteType | null

}

const LiveChat: React.FC<LiveChatProps> = ({ note })=>{

    const messagesContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{

        if(messagesContainerRef.current){

            messagesContainerRef.current.scrollTop = 0

        }

    }, [])

    return(

        <div className="flex flex-col h-full p-4">

            { !note && <LiveChatHeader/> }

            <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto px-2 my-2 min-h-0 overflow-anchor-none"
            >

                <LiveChatMessages/>

            </div>

           <LiveChatInput/> 

        </div>

    )

}

export default LiveChat