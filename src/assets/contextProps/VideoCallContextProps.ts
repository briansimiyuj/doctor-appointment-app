export interface VideoCallContextProps{

    isMicMuted: boolean
    isCamOff: boolean
    toggleMic: () => void
    toggleCam: () => void
    isFullScreen: boolean
    toggleFullScreen: () => void
    connectionStatus: "connected" | "connecting" | "disconnected" | "failed"
    localStream: MediaStream | null
    remoteStream: MediaStream | null
    joinSessionRoom: (appointmentID: string) => Promise<void>
    leaveSessionRoom: () => Promise<void>
    videoContainer: HTMLElement | null
    setVideoContainer: (element: HTMLElement | null) => void
    peerConnection: RTCPeerConnection | null
    socket: any | null

}