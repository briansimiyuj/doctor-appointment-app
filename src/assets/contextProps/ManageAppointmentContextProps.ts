import { AppointmentType } from "../types/AppointmentType"

export interface ManageAppointmentContextProps{
    
    appointment: AppointmentType | null
    loading: boolean
    error: string | null
    consultationType: 'online' | 'in-person'

    sessionStartTime: Date | null
    sessionEndTime: Date | null
    elapsedTime: number
    scheduledDuration: number
    remainingTime: number
    isOvertime: boolean
    isSessionActive: boolean
    minutesToExtend: number
    setMinutesToExtend: (minutes: number) => void   

    startSession: () => Promise<void>
    endSession: () => Promise<void>
    extendSession: (minutes: number) => Promise<void>
    pauseSession: (reason?: string) => void
    resumeSession: () => void
    isPaused: boolean
    pauseReason: string | null
    
    showCompletionModal: boolean
    openCompletionModal: () => void
    closeCompletionModal: () => void
    
    showLabOrderModal: boolean
    openLabOrderModal: () => void
    closeLabOrderModal: () => void
    
    showReferralModal: boolean
    openReferralModal: () => void
    closeReferralModal: () => void

    markNoShow: (reason: string) => Promise<void>

}