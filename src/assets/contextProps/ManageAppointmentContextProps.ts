import { AppointmentType } from "../types/AppointmentType"
import { LabTestType } from "../types/LabTestType"
import { ReferralType } from "../types/ReferralType"

export interface ManageAppointmentContextProps{
    
    appointment: AppointmentType | null
    loading: boolean
    setLoading: (loading: boolean) => void
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
    showViewLabOrderModal: boolean
    openViewLabOrderModal: () => void
    closeViewLabOrderModal: () => void
    
    showReferralModal: boolean
    openReferralModal: () => void
    closeReferralModal: () => void
    showViewReferralModal: boolean
    openViewReferralModal: () => void
    closeViewReferralModal: () => void

    refferalData: ReferralType | null
    labOrderData: LabTestType | null

    markNoShow: (reason: string) => Promise<void>
    noShowReason: string 
    setNoShowReason: (reason: string) => void

}