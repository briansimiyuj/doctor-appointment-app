import { LiveChatContextProvider } from "../../../../context/LiveChatContext"
import { useManageAppointmentContext } from "../../../../context/ManageAppointmentContext"
import { useProfileContext } from "../../../../context/ProfileContext"
import LiveChat from "../../../LiveChat/LiveChat"
import VideoInterface from "./VideoInterface/VideoInterface"
import { useEffect, useRef } from "react"

const LiveSession: React.FC = ()=>{

    const { appointment, isChatModalOpen } = useManageAppointmentContext(),
          { profile } = useProfileContext(),
          isDoctor = profile?.type === "doctor",
          isOnline = appointment?.consultationType === "online",
          desktopChatRef = useRef<HTMLDivElement>(null),
          mobileChatRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{

        if(isChatModalOpen){

            if(desktopChatRef.current){

                desktopChatRef.current.scrollTop = 0

            }

            if(mobileChatRef.current){

                mobileChatRef.current.scrollTop = 0

            }

        }
        
    }, [isChatModalOpen])

    return(

        <div className="bg-gray-50 dark:bg-gray-900 h-full min-h-[600px] rounded-lg shadow-xl overflow-hidden">

            <div className="hidden md:flex h-full">

                <div className={`${isChatModalOpen ? (isDoctor ? 'md:w-3/5 lg:w-2/3' : 'md:w-2/3 lg:w-3/4') : 'w-full'} transition-all duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700`}>

                    {

                        isOnline && <VideoInterface/>

                    }

                </div>

                <div 
                    ref={desktopChatRef}
                    className={`
                        transition-all duration-300 ease-in-out
                        ${isChatModalOpen 
                            ? `opacity-100 translate-x-0 ${isDoctor ? 'md:w-2/5 lg:w-1/3' : 'md:w-1/3 lg:w-1/4'}` 
                            : 'opacity-0 translate-x-full w-0 pointer-events-none'
                        }
                    `}
                >
                    
                    <div className={`h-full ${isChatModalOpen ? 'block' : 'hidden'}`}>
                
                        <LiveChatContextProvider>

                            <LiveChat note={null}/>

                        </LiveChatContextProvider>

                    </div>
                        
                </div>

            </div>

            <div className="md:hidden flex flex-col h-full">

                <div className="flex-1 border-b border-gray-200 dark:border-gray-700">

                    {

                        isOnline && <VideoInterface/>

                    }

                </div>

                <div 
                    ref={mobileChatRef}
                    className={`
                        transition-all duration-300 ease-in-out
                        ${isChatModalOpen 
                            ? 'opacity-100 translate-y-0 h-1/2 min-h-[250px]' 
                            : 'opacity-0 translate-y-full h-0 pointer-events-none'
                        }
                        border-t border-gray-200 dark:border-gray-700
                        overflow-hidden
                    `}
                >

                    <div className={`h-full ${isChatModalOpen ? 'block' : 'hidden'}`}>

                        <LiveChatContextProvider>

                            <LiveChat note={null}/>

                        </LiveChatContextProvider>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default LiveSession