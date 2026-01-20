import { LiveChatContextProvider } from "../../../../context/LiveChatContext"
import { useManageAppointmentContext } from "../../../../context/ManageAppointmentContext"
import { useProfileContext } from "../../../../context/ProfileContext"
import LiveChat from "../../../LiveChat/LiveChat"
import VideoInterface from "./VideoInterface/VideoInterface"

const LiveSession: React.FC = ()=>{

    const { appointment, isChatModalOpen } = useManageAppointmentContext(),
          { profile } = useProfileContext(),
          isDoctor = profile?.type === "doctor",
          isOnline = appointment?.consultationType === "online"


    return(

        <div className="bg-gray-50 dark:bg-gray-900 h-full min-h-[600px] rounded-lg shadow-xl overflow-hidden">

            <div className="hidden md:flex h-full">

                <div className={`${isChatModalOpen ? (isDoctor ? 'md:w-3/5 lg:w-2/3' : 'md:w-2/3 lg:w-3/4') : 'w-full'} transition-all duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700`}>

                    {

                        isOnline && <VideoInterface/>

                    }

                </div>

                {


                    isChatModalOpen &&(
                        
                        <div className={`${isDoctor ? 'md:w-2/5 lg:w-1/3' : 'md:w-1/3 lg:w-1/4'}`}>
                
                            <LiveChatContextProvider>

                                <LiveChat note={null}/>

                            </LiveChatContextProvider>

                        </div>
                        
                    )

                }

            </div>

            <div className="md:hidden flex flex-col h-full">

                <div className="flex-1 border-b border-gray-200 dark:border-gray-700">

                    {

                        isOnline && <VideoInterface/>

                    }

                </div>

                {

                    isChatModalOpen &&(

                        <div className="h-1/2 min-h-[250px] border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">

                            <LiveChatContextProvider>

                                <LiveChat note={null}/>

                            </LiveChatContextProvider>

                        </div>

                    )

                }

            </div>

        </div>

    )

}

export default LiveSession