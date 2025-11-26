import { FaPause } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"
import { useProfileContext } from "../../../../../context/ProfileContext"
import VideoControls from "./VideoControls"

const VideoInterface: React.FC = ()=>{

    const { sessionStatus } = useManageAppointmentContext(),
            { profile } = useProfileContext(),
            isDoctor = profile?.type === "doctor",
            isPaused = sessionStatus === "Paused"

    return(

        <div className="flex-1 min-w-0 bg-gray-900 relative">

            <div 
                className="absolute inset-0 flex items-center justify-center"
            >

                {

                    isPaused ?(

                        <div className="text-center text-white p-6 bg-black/70 rounded-lg">

                            <FaPause className="w-10 h-10 mx-auto mb-4 text-yellow-400"/>

                            <p className="text-xl font-semibold">Session is Paused</p>

                            <p className="text-sm text-gray-400">Waiting for {isDoctor ? 'Patient' : 'Doctor'} to resume.</p>

                        </div>

                    ):(

                        <p className="text-white dark:text-white text-xl">Connecting to video session...</p> 

                    )

                }

            </div>

            <VideoControls/>

        </div>

    )

}

export default VideoInterface