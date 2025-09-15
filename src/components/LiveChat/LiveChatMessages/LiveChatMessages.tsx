import { useEffect, useRef } from "react"
import { useLiveChatContext } from "../../../context/LiveChatContext"
import LiveChatMessage from "./LiveChatMessage"

const LiveChatMessages: React.FC = ()=>{

    const { messages } = useLiveChatContext(),
          bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{
    
       bottomRef.current?.scrollIntoView({behavior: "smooth"})
    
    }, [messages])

    return(

        <div className="flex flex-col gap-2">

            {

                messages.length === 0 ?(

                    <div className="flex justify-center items-center h-full m-auto">

                        <p className="text-gray-500 text-sm">Start a conversation with a doctor</p>

                    </div>

                ):(

                    messages.map(msg =>(
    
                        <LiveChatMessage key={msg._id} message={msg}/>
    
                    ))

                )
                
            }

            <div ref={bottomRef}></div>

        </div>

    )

}

export default LiveChatMessages
