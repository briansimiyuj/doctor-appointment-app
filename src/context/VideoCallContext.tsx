import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { VideoCallContextProps } from "../assets/contextProps/VideoCallContextProps"
import { useToast } from "../hooks/useToast"
import { io, Socket } from "socket.io-client"

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
          { showToast } = useToast(),
          socketRef = useRef<Socket | null>(null),
          peerConnectionRef = useRef<RTCPeerConnection | null>(null),
          currentRoomRef = useRef<string | null>(null)

    const ICE_SERVERS ={

        iceServers:[

            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:stun1.l.google.com:19302" }

        ]

    }

    useEffect(() =>{
    
        socketRef.current = io("http://localhost:3001", {

            transports: ["websocket"],
            reconnection: true

        })

        socketRef.current.on("connect", () =>{

            console.log("Connected to signaling server")

        })

        socketRef.current.on("disconnect", () =>{

            console.log("Disconnected from signaling server")

        })

        return () =>{

            socketRef.current?.disconnect()

        }
    
    }, [])

    useEffect(() =>{
    
        if(!socketRef.current) return

        const socket = socketRef.current

        socket.on("user-joined", async (data) =>{

            console.log("User joined", data.userID)

            showToast("A user has joined the session.", "info")

            await createOffer()

        })

        socket.on("offer", async (data) =>{

            console.log("Received offer")

            await handleOffer(data.offer, data.from)

        })

        socket.on("answer", async (data) =>{

            console.log("Received answer")

            await handleAnswer(data.answer)

        })

        socket.on("ice-candidate", async (data) =>{

            console.log('Received ICE candidate', data.candidate)

            await handleIceCandidate(data.candidate)
            
        })

        socket.on("user-left", (data) =>{

            console.log("User left", data.userID)

            showToast("The other user has left the session.", "info")

            cleanupPeerConnection()

        })

        return () =>{

            socket.off("user-joined")

            socket.off("offer")

            socket.off("answer")

            socket.off("ice-candidate")

            socket.off("user-left")

        }
    
    }, [showToast])

    const createPeerConnection = useCallback(() =>{

        try{
        
            const peerConnection = new RTCPeerConnection(ICE_SERVERS)

            if(localStream){

                localStream.getTracks().forEach(track =>{
                    
                    peerConnection.addTrack(track, localStream)

                })

            }

            peerConnection.ontrack = (event) =>{

                console.log('Received remote track', event.streams[0])

                setRemoteStream(event.streams[0])

                setConnectionStatus("connected")

            }

            peerConnection.onicecandidate = (event) =>{
                
                if(event.candidate){

                    console.log('Sending ICE candidate', event.candidate)

                    socketRef.current?.emit("ice-candidate", {

                        candidate: event.candidate,
                        room: currentRoomRef.current

                    })

                }

            }

            peerConnection.onconnectionstatechange = () =>{

                console.log('Peer connection state changed:', peerConnection.connectionState)

                switch(peerConnection.connectionState){

                    case "connected":

                        setConnectionStatus("connected")
                        showToast("Connected to the other user.", "success")
                    
                    break

                    case "disconnected":
                    case "failed":

                        setConnectionStatus("failed")
                        showToast("Disconnected from the other user.", "error")

                    break

                    case "closed":

                        setConnectionStatus("disconnected")
                    
                    break

                }
            }
            
            peerConnectionRef.current = peerConnection

            return peerConnection

        }catch(error){

            console.error("Error creating RTCPeerConnection:", error)
            
            setConnectionStatus("failed")

            return null

        }

    }, [localStream, showToast])

    const createOffer = async() =>{
    
        try{

            const peerConnection = peerConnectionRef.current || createPeerConnection(),
                  socket = socketRef.current

            if(!peerConnection) return

            console.log('Creating offer')

            const offer = await peerConnection.createOffer({

                offerToReceiveAudio: true,
                offerToReceiveVideo: true  

            })

            await peerConnection.setLocalDescription(offer)

            socket?.emit("offer", {

                offer,
                room: currentRoomRef.current

            })

        }catch(error){

            console.error("Error creating offer:", error)

            showToast("Failed to create offer.", "error")

        }
    
    }

    const handleOffer = async (offer: RTCSessionDescriptionInit, from: string) =>{

        try{

            const peerConnection = peerConnectionRef.current || createPeerConnection(),
                  socket = socketRef.current

            if(!peerConnection) return

            console.log('Received offer from', from)

            await peerConnection.setRemoteDescription(new RTCSessionDescription(offer))

            const answer = await peerConnection.createAnswer()

            await peerConnection.setLocalDescription(answer)

            socket?.emit("answer", {

                answer,
                to: from,
                room: currentRoomRef.current

            })

        }catch(error){

            console.error("Error handling offer:", error)

            showToast("Failed to handle offer.", "error")

        }
        
    }

    const handleAnswer = async (answer: RTCSessionDescriptionInit) =>{

        try{

            const peerConnection = peerConnectionRef.current

            if(!peerConnection) return

            console.log('Received answer')

            await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))

        }catch(error){

            console.error("Error handling answer:", error)

            showToast("Failed to handle answer.", "error")

        }

    }

    const handleIceCandidate = async (candidate: RTCIceCandidateInit) =>{
        

        try{

            const peerConnection = peerConnectionRef.current

            if(!peerConnection) return

            console.log('Received ICE candidate')

            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate))

        }catch(error){

            console.error("Error handling ICE candidate:", error)

        }

    }

    const cleanupPeerConnection = () =>{

        if(peerConnectionRef.current){

            peerConnectionRef.current.close()

            peerConnectionRef.current = null

        }

        setRemoteStream(null)

        setConnectionStatus("disconnected")

    }

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

    useEffect(() =>{
    
        const handleKeyDown = (e: KeyboardEvent) =>{

            const isTypingInInput = (e.target as HTMLElement).tagName === "INPUT" || (e.target as HTMLElement).tagName === "TEXTAREA" || (e.target as HTMLElement).isContentEditable

            if(isTypingInInput) return
        
            if(e.key === "f" || e.key === "F"){

                e.preventDefault()

                toggleFullScreen()

            }
        
        }

        document.addEventListener("keydown", handleKeyDown)

        return () =>{

            document.removeEventListener("keydown", handleKeyDown)
            
        }
    
    }, [toggleFullScreen])

    const joinSessionRoom = useCallback(async (appointmentID: string) =>{

        const socket = socketRef.current

        setConnectionStatus("connecting")

        currentRoomRef.current = appointmentID

        console.log(`Attempting to join session room for appointment ID: ${appointmentID}`)

        try{

            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

            setLocalStream(stream)

            showToast("Successfully accessed media devices.", "success")

            socket?.emit("join-room", { room: appointmentID })

        }catch(error){

            console.error("Error accessing media devices:", error)

            showToast("Failed to access media devices. Please check your permissions.", "error")

            setConnectionStatus("failed")

        }

    }, [showToast])

    const leaveSessionRoom = useCallback(async () =>{

        const socket = socketRef.current

        showToast("Leaving session room...", "info")

        if(currentRoomRef.current){

            socket?.emit("leave-room", { room: currentRoomRef.current })

        }

        localStream?.getTracks().forEach(track => track.stop())

        cleanupPeerConnection()

        setLocalStream(null)

        currentRoomRef.current = null

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