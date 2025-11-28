import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { VideoCallContextProps } from "../assets/contextProps/VideoCallContextProps"
import { useToast } from "../hooks/useToast"

interface VideoCallContextProviderProps{

    children: React.ReactNode

}

export const VideoCallContext = createContext<VideoCallContextProps | undefined>(undefined)

export const VideoCallContextProvider:React.FC<VideoCallContextProviderProps> = ({ children })=>{

    const [isMicMuted, setIsMicMuted] = useState(false),
          [isCamOff, setIsCamOff] = useState(false),
          [isFullScreen, setIsFullScreen] = useState(false),
          [connectionStatus, setConnectionStatus] = useState<"connected" | "connecting" | "disconnected" | "failed">("disconnected"),
          [localStream, setLocalStream] = useState<MediaStream | null>(null),
          [remoteStream, setRemoteStream] = useState<MediaStream | null>(null),
          [videoContainer, setVideoContainer] = useState<HTMLElement | null>(null),
          { showToast } = useToast()

    useEffect(() =>{
    
        const handleFullScreenChange = () =>{
        
            setIsFullScreen(!!document.fullscreenElement)
        
        }

        document.addEventListener("fullscreenchange", handleFullScreenChange)

        document.addEventListener("webkitfullscreenchange", handleFullScreenChange)

        document.addEventListener("mozfullscreenchange", handleFullScreenChange)

        document.addEventListener("MSFullscreenChange", handleFullScreenChange)

        return () =>{
            
            document.removeEventListener("fullscreenchange", handleFullScreenChange)

            document.removeEventListener("webkitfullscreenchange", handleFullScreenChange)

            document.removeEventListener("mozfullscreenchange", handleFullScreenChange)

            document.removeEventListener("MSFullscreenChange", handleFullScreenChange)
        }
    
    }, [])

    const toggleMic = useCallback(() =>{

        setIsMicMuted(prev =>{

            if(localStream){

                const audioTrack = localStream.getAudioTracks()[0]

                if(audioTrack){

                    audioTrack.enabled = prev

                }

            }

            return !prev

        })

    }, [localStream])

    const toggleCam = useCallback(() =>{

        setIsCamOff(prev =>{

            if(localStream){

                const videoTrack = localStream.getVideoTracks()[0]

                if(videoTrack){

                    videoTrack.enabled = prev

                }

            }

            return !prev

        })
     
    }, [localStream])

    const toggleFullScreen = useCallback(() =>{

        if(!document.fullscreenElement){

            const targetElement = videoContainer 

            if(targetElement){

                if(targetElement.requestFullscreen){

                    targetElement.requestFullscreen()

                }else if((targetElement as any).webkitRequestFullscreen){

                    (targetElement as any).webkitRequestFullscreen()

                }else if((targetElement as any).mozRequestFullScreen){

                    (targetElement as any).mozRequestFullScreen()

                }

            }

        }else{

            if(document.exitFullscreen){

                document.exitFullscreen()

            }else if((document as any).webkitExitFullscreen){

                (document as any).webkitExitFullscreen()

            }else if((document as any).mozCancelFullScreen){

                (document as any).mozCancelFullScreen()

            }

        }

    }, [videoContainer])

    const joinSessionRoom = useCallback(async (appointmentID: string) =>{

        setConnectionStatus("connecting")

        console.log(`Attempting to join session room for appointment ID: ${appointmentID}`)

        try{

            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

            setLocalStream(stream)

            showToast("Successfully accessed media devices.", "success")

        }catch(error){

            console.error("Error accessing media devices:", error)

            showToast("Failed to access media devices. Please check your permissions.", "error")

            setConnectionStatus("failed")

        }

    }, [])

    const leaveSessionRoom = useCallback(async () =>{

        showToast("Leaving session room...", "info")

        localStream?.getTracks().forEach(track => track.stop())

        setLocalStream(null)

        setRemoteStream(null)


    }, [localStream, showToast])

    const contextValue: VideoCallContextProps ={

        isMicMuted,
        isCamOff,
        toggleMic,
        toggleCam,
        isFullScreen,
        toggleFullScreen,
        connectionStatus,
        joinSessionRoom,
        leaveSessionRoom,
        localStream,
        remoteStream,
        videoContainer,
        setVideoContainer

    }

    return(

        <VideoCallContext.Provider value={contextValue}>

            {children}

        </VideoCallContext.Provider>

    )

}

export const useVideoCallContext = () =>{

    const context = useContext(VideoCallContext)

    if(!context) throw new Error('useVideoCallContext must be used within VideoCallContextProvider')

    return context

}