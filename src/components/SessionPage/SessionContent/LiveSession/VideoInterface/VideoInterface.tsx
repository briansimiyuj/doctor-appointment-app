import { FaPause } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"
import { useProfileContext } from "../../../../../context/ProfileContext"
import VideoControls from "./VideoControls"
import { useVideoCallContext } from "../../../../../context/VideoCallContext"
import { useEffect, useRef } from "react"

const VideoInterface: React.FC = ()=>{

    const { sessionStatus, appointment } = useManageAppointmentContext(),
            { profile } = useProfileContext(),
            { localStream, remoteStream, connectionStatus, joinSessionRoom, leaveSessionRoom } = useVideoCallContext(),
            isDoctor = profile?.type === "doctor",
            isPaused = sessionStatus === "Paused",
            localVideoRef = useRef<HTMLVideoElement>(null),
            remoteVideoRef = useRef<HTMLVideoElement>(null),
            appointmentID = appointment?._id || ""

    useEffect(() =>{
    
        if(appointmentID){

            joinSessionRoom(appointmentID)

        }
          
        return () =>{

            leaveSessionRoom()

        }
    
    }, [appointmentID])

    useEffect(() =>{
    
        if(localVideoRef.current && localStream){

            localVideoRef.current.srcObject = localStream

        }
    
    }, [localStream])

    useEffect(() =>{

        if(remoteVideoRef.current && remoteStream){

            remoteVideoRef.current.srcObject = remoteStream

        }

    }, [remoteStream])

    const getConnectionMessage = () =>{
    
        switch(connectionStatus){

            case "connecting": return "Connecting to video session..."

            case "failed": return "Failed to connect. Please check your media permissions."

            case "disconnected": return "Disconnected from session."

            case "connected": return "Waiting for other user to join."

            default: return "Connecting to video session..."

        }
    
    }

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

                        <>
                        
                            <video 
                                className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isPaused ? 'opacity-0' : ''}`}
                                ref={remoteVideoRef}
                                autoPlay
                                playsInline
                            />

                            <video
                                className={`absolute bottom-20 right-6 w-40 h-32 object-cover rounded-lg shadow-lg border-2 border-white z-10 transition-opacity duration-300 ${isPaused ? 'opacity-0' : ''}`}
                                ref={localVideoRef}
                                autoPlay
                                muted
                                playsInline
                            />

                            {

                                (!localStream || !remoteStream) &&(

                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">

                                        <p className={`text-xl font-semibold p-4 rounded-lg ${connectionStatus === 'failed' ? 'text-red-400' : 'text-white'}`}>'


                                            {getConnectionMessage()}

                                        </p>

                                    </div>

                                )

                            }
                        
                        </>

                    )

                }

            </div>

            <VideoControls/>

        </div>

    )

}

export default VideoInterface