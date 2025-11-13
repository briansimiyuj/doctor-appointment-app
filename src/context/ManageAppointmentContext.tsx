import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ManageAppointmentContextProps } from "../assets/contextProps/ManageAppointmentContextProps"
import { usePatientDetails } from "./PatientDetailsContext"
import { useToast } from "../hooks/useToast"
import { updateAppointmentSessionDataInFirebase, updateAppointmentStatusInFirebase } from "../firebase/firebaseApi"

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
          [minutesToExtend, setMinutesToExtend] = useState(0),
          [showCompletionModal, setShowCompletionModal] = useState(false),
          [showLabOrderModal, setShowLabOrderModal] = useState(false),
          [showViewLabOrderModal, setShowViewLabOrderModal] = useState(false),
          [showReferralModal, setShowReferralModal] = useState(false),
          [showViewReferralModal, setShowViewReferralModal] = useState(false),
          [scheduledDuration, setScheduledDuration] = useState(30),
          timeIntervalRef = useRef<NodeJS.Timeout | null>(null),
          appointment = patientAppointments.find(app => app._id === appointmentID) || null,
          consultationType = appointment?.consultationType || "in-person",
          remainingTime = Math.max(scheduledDuration * 60 - elapsedTime, 0),
          isOvertime = elapsedTime > (scheduledDuration * 60)

    
    useEffect(() =>{

        if(appointment){
            
            if(appointment.scheduledDurationMinutes && appointment.scheduledDurationMinutes !== scheduledDuration){

                setScheduledDuration(appointment.scheduledDurationMinutes)

            }

            if(appointment.sessionStatus === "active" && appointment.actualStartTime){
                
                const storedStartTime = new Date(appointment.actualStartTime),
                      now = new Date(),
                      timeDifferenceSeconds = Math.floor((now.getTime() - storedStartTime.getTime()) / 1000)
                
                setSessionStartTime(storedStartTime)

                setIsSessionActive(true)
                
                setElapsedTime(timeDifferenceSeconds) 
                
                if(!isSessionActive){

                    showToast("Active session restored.", "info")

                }

            } 
            
            else if(appointment.sessionStatus === "completed" && appointment.actualDurationSeconds !== undefined){

                setIsSessionActive(false)

                setElapsedTime(appointment.actualDurationSeconds)

            }
        
        }

    }, [appointment]) 

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

        if(!appointment || !appointment._id){

            showToast("Error: Cannot start session without appointment data.", "error")

            return
            
        }
        
        try{

            setLoading(true)

            const startTime = new Date(),
                 startTimeISO = startTime.toISOString()

            await updateAppointmentSessionDataInFirebase(appointment._id, {
                sessionStatus: "active",
                actualStartTime: startTimeISO,
                isStarted: true
            })

            setSessionStartTime(startTime)

            setIsSessionActive(true)

            setElapsedTime(0)

            setIsPaused(false)

            setPauseReason(null)

            showToast("Session started", "success")

        }catch(err){

            console.error("Failed to start session: ", err)

            setIsSessionActive(false) 

            setSessionStartTime(null)

            setError("Failed to start session.")

            showToast("Failed to start session.", "error")

        }finally{

            setLoading(false)

        }

    }, [appointment, showToast])

    const endSession = useCallback(async() =>{
    
        if(!appointment || !appointment._id){

            showToast("Error: Cannot end session without appointment data.", "error")

            return

        }

        try{

            setLoading(true)
            
            const endTime = new Date(),
                  endTimeISO = endTime.toISOString(),
                  finalDuration = elapsedTime

            await updateAppointmentSessionDataInFirebase(appointment._id, {
                sessionStatus: "completed",
                actualEndTime: endTimeISO,
                actualDurationSeconds: finalDuration
            })

            setSessionEndTime(endTime)

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
    }, [appointment, elapsedTime, showToast])

    const extendSession = useCallback(async(minutes: number) =>{

        if(!appointment || !appointment._id){

            showToast("Error: Cannot extend session without appointment data.", "error")

            return

        }

        try{

            setLoading(true)
            
            const newDurationMinutes = scheduledDuration + minutes

            await updateAppointmentSessionDataInFirebase(appointment._id, {
                scheduledDurationMinutes: newDurationMinutes
            })

            setScheduledDuration(prev => prev + minutes)

            showToast(`Session extended by ${minutes} minute${minutes > 1 ? 's' : ''}`, "success")

        }catch(err){

            console.error("Failed to extend session: ", err)

            setError("Failed to extend session.")

            showToast("Failed to extend session.", "error")

        }finally{

            setLoading(false)

        }
    }, [appointment, scheduledDuration, showToast])

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

    const openViewLabOrderModal = () => setShowViewLabOrderModal(true)

    const closeViewLabOrderModal = () => setShowViewLabOrderModal(false)

    const openViewReferralModal = () => setShowViewReferralModal(true)

    const closeViewReferralModal = () => setShowViewReferralModal(false)

    const markNoShow = useCallback(async (reason?: string) =>{

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
        setLoading,
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
        markNoShow,
        minutesToExtend,
        setMinutesToExtend,
        showViewLabOrderModal,
        showViewReferralModal,
        openViewLabOrderModal,
        closeViewLabOrderModal,
        openViewReferralModal,
        closeViewReferralModal

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