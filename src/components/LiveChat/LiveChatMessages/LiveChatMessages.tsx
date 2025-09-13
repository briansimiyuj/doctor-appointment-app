import { useLiveChatContext } from "../../../context/LiveChatContext"
import LiveChatMessage from "./LiveChatMessage"

const LiveChatMessages: React.FC = ()=>{

    const { messages } = useLiveChatContext()

    return(

        <div className="flex flex-col gap-2">

            {
            
                messages.map(msg =>(

                    <LiveChatMessage key={msg._id} message={msg}/>

                ))
                
            }

        </div>

    )

}

export default LiveChatMessages
