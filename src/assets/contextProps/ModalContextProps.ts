import { AppointmentType } from "../types/AppointmentType";

export interface ModalContextProps{

    appointment: AppointmentType | null
    reason: string
    setReason: (reason: string) => void
    alternative: string
    setAlternative: (alternative: string) => void
    isConfirmed: boolean
    setIsConfirmed: (isConfirm: boolean) => void
    handleCancelAppointment: () => void
    onClose: () => void
    isValid: boolean
    handleRejectAppointment: () => void

}