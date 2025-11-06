import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ManageAppointmentContextProps } from "../assets/contextProps/ManageAppointmentContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { useToast } from "../hooks/useToast"
import { updateAppointmentStatusInFirebase } from "../firebase/firebaseApi"

interface ManageAppointmentContextProviderProps{

    children: React.ReactNode
    appointmentID: string

}

export const ManageAppointmentContext = createContext<ManageAppointmentContextProps | undefined>(undefined)

export const ManageAppointmentContextProvider:React.FC<ManageAppointmentContextProviderProps> = ({ children, appointmentID })=>{

    const { patientAppointments } = usePatientDetails(),
          { showToast } = useToast(),
          [loading, setLoading] = useState(false),
          [error, setError] = useState<string | null>(null),
          [sessionStartTime, setSessionStartTime] = useState<Date | null>(null),
          [sessionEndTime, setSessionEndTime] = useState<Date | null>(null),
          [elapsedTime, setElapsedTime] = useState(0),
          [isPaused, setIsPaused] = useState(false),
          [pauseReason, setPauseReason] = useState<string | null>(null),
          [isSessionActive, setIsSessionActive] = useState(false),
          [showCompletionModal, setShowCompletionModal] = useState(false),
          [showLabOrderModal, setShowLabOrderModal] = useState(false),
          [showReferralModal, setShowReferralModal] = useState(false),
          [scheduledDuration, setScheduledDuration] = useState(30),
          timeIntervalRef = useRef<NodeJS.Timeout | null>(null),
          appointment = patientAppointments.find(app => app._id === appointmentID) || null,
          consultationType = appointment?.consultationType || "in-person",
          remainingTime = Math.max(scheduledDuration * 60 - elapsedTime, 0),
          isOvertime = elapsedTime > (scheduledDuration * 60)

    useEffect(() =>{
    
        if(isSessionActive && !isPaused){

            timeIntervalRef.current = setInterval(() =>{

                setElapsedTime(prev => prev + 1)

            }, 1000)

        }else{

            if(timeIntervalRef.current){

                clearInterval(timeIntervalRef.current)

                timeIntervalRef.current = null

            }

        }

        return () =>{


            if(timeIntervalRef.current){

                clearInterval(timeIntervalRef.current)

            }

        }
    
    }, [isSessionActive, isPaused])

    useEffect(() =>{

        if(isOvertime && isSessionActive && !isPaused){

            const minutesOverTime = Math.floor((elapsedTime - (scheduledDuration * 60)) / 60)

            if((elapsedTime - (scheduledDuration * 60)) % 60 === 0){

                showToast(`Session is ${minutesOverTime} minute${minutesOverTime > 1 ? 's' : ''} over time.`, "warning")

            }

        }
        
    }, [elapsedTime, isOvertime, isSessionActive, isPaused, scheduledDuration, showToast])

    const startSession = useCallback(async() =>{

        try{

            setLoading(true)

            setSessionStartTime(new Date())

            setIsSessionActive(true)

            setElapsedTime(0)

            setIsPaused(false)

            setPauseReason(null)

            showToast("Session started", "success")

        }catch(err){

            console.error("Failed to start session: ", err)

            setError("Failed to start session.")

            showToast("Failed to start session.", "error")

        }finally{

            setLoading(false)

        }

    }, [appointmentID, showToast])

    const endSession = useCallback(async() =>{


        try{

            setLoading(true)

            setSessionEndTime(new Date())

            setIsSessionActive(false)

            setIsPaused(false)

            if(timeIntervalRef.current){

                clearInterval(timeIntervalRef.current)

                timeIntervalRef.current = null

            }

            showToast("Session ended", "success")

        }catch(err){

            console.error("Failed to end session: ", err)

            setError("Failed to end session.")

            showToast("Failed to end session.", "error")

        }finally{

            setLoading(false)

        }

    }, [appointmentID, elapsedTime, showToast])

    const extendSession = useCallback(async(minutes: number) =>{

        try{

            setLoading(true)

            setScheduledDuration(prev => prev + minutes)

            showToast(`Session extended by ${minutes} minute${minutes > 1 ? 's' : ''}`, "success")

        }catch(err){

            console.error("Failed to extend session: ", err)

            setError("Failed to extend session.")

            showToast("Failed to extend session.", "error")

        }finally{

            setLoading(false)

        }

    }, [appointmentID, showToast])

    const pauseSession = useCallback((reason?: string) =>{

        setIsPaused(true)

        setPauseReason(reason || "No reason provided")

        showToast(`Session paused${reason ? `: ${reason}` : ''}`, "info")

        
    }, [showToast])

    const resumeSession = useCallback(async() =>{

        setIsPaused(false)

        showToast("Session resumed", "success")

    }, [showToast])

    const openCompletionModal = () => setShowCompletionModal(true)

    const closeCompletionModal = () => setShowCompletionModal(false)

    const openReferralModal = () => setShowReferralModal(true)

    const closeReferralModal = () => setShowReferralModal(false)

    const openLabOrderModal = () => setShowLabOrderModal(true)

    const closeLabOrderModal = () => setShowLabOrderModal(false)

    const markkNoShow = useCallback(async (reason?: string) =>{

        if(!appointment){

            showToast("No appointment found to mark as no-show.", "error")

            return

        }

        try{
            
            setLoading(true)

            if(isSessionActive) await endSession()

            await updateAppointmentStatusInFirebase("cancelled", appointment._id)

            showToast(`Appointment marked as no-show ${reason ? `: with  ${reason}` : ''}`, "success")

        }catch(err){

            console.error("Failed to mark appointment as no-show: ", err)

            setError("Failed to mark appointment as no-show.")

            showToast("Failed to mark appointment as no-show.", "error")

        }finally{

            setLoading(false)

        }

    }, [appointment, isSessionActive, endSession, updateAppointmentStatusInFirebase, showToast])
          

    const contextValue: ManageAppointmentContextProps ={

        appointment,
        loading,
        error,       
        consultationType,
        sessionStartTime,
        sessionEndTime,
        elapsedTime,
        scheduledDuration,
        remainingTime,
        isOvertime,
        isSessionActive,
        startSession,
        endSession,
        extendSession,
        pauseSession,
        resumeSession,
        isPaused,
        pauseReason,
        openCompletionModal,
        closeCompletionModal,
        showCompletionModal,
        openReferralModal,
        closeReferralModal,
        showReferralModal,
        openLabOrderModal,
        closeLabOrderModal,
        showLabOrderModal,
        markNoShow: markkNoShow,
        

    }

    return(

        <ManageAppointmentContext.Provider value={contextValue}>

            {children}

        </ManageAppointmentContext.Provider>
 
    )

}

export const useManageAppointmentContext = () =>{

    const context = useContext(ManageAppointmentContext)

    if(!context) throw new Error('useManageAppointmentContext must be used within ManageAppointmentContextProvider')

    return context

}