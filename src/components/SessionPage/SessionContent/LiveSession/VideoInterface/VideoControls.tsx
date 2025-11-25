import { FaMicrophone, FaVideo } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"

const VideoControls: React.FC = ()=>{

    const { formatTime, sessionStatus, elapsedTime } = useManageAppointmentContext(),
          isOvertime = sessionStatus === "Overtime"

    return(

        <div className="absolute bottom-0 w-full p-4 bg-gray-800/80 flex justify-between items-center z-10">
            
            <div className={`text-xl font-mono px-3 py-1 rounded-md transition-colors 
                ${isOvertime ? 'bg-red-700 text-white' : 'bg-gray-700 text-green-400'}`}
            >
                
                {formatTime(elapsedTime)}

            </div>

            <div className="flex items-center space-x-3">
                
                <button 
                    /* onClick={toggleMic}
                    className={`p-3 rounded-full text-white transition ${isMicMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                    title={isMicMuted ? "Unmute" : "Mute"} */
                >
                    
                    <FaMicrophone className="w-5 h-5"/> 

                </button>

                <button 
                    /* onClick={toggleCam}
                    className={`p-3 rounded-full text-white transition ${isCamOff ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                    title={isCamOff ? "Turn Video On" : "Turn Video Off"} */
                >
   
                    <FaVideo className="w-5 h-5"/>

                </button>
            </div>
        
        </div>

    )

}

export default VideoControls