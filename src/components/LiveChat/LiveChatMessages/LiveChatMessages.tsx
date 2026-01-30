import { useLiveChatContext } from "../../../context/LiveChatContext"
import { useProfileContext } from "../../../context/ProfileContext"
import LiveChatMessage from "./LiveChatMessage"
import MessageMenuModal from "./MessageMenuModal"

const LiveChatMessages: React.FC = ()=>{

    const { messages, messageMenuModal, selectedMessage, closeMessageMenu } = useLiveChatContext(),
          { profile } = useProfileContext()

    return(

        <div 
            className="flex flex-col gap-2"
            onClick={() =>{

                if(messageMenuModal) closeMessageMenu()

            }}
        >

            {

                messages.length === 0 ?(

                    <div className="flex justify-center items-center h-full m-auto">

                        {

                            profile?.type === "patient" ?(

                                <p className="text-gray-500 text-sm">Start a conversation with a doctor</p>

                            ):(
                                
                                <p className="text-gray-500 text-sm">Start a conversation with a patient</p>

                            )

                        }

                    </div>

                ):(

                    messages.map(msg =>(
                        
                        <div className="relative" key={msg._id}>

                            <LiveChatMessage message={msg}/>

                            {

                                messageMenuModal && selectedMessage?._id === msg._id && <MessageMenuModal message={msg}/>

                            }


                        </div>
    
    
                    ))

                )
                
            }

        </div>

    )

}

export default LiveChatMessages