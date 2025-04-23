import { AppointmentType } from "../types/AppointmentType";

export interface RescheduleModalContextProps{

    appointment: AppointmentType | null
    newDate: string | null
    setNewDate: (date: string) => void
    newTime: string | null
    setNewTime: (time: string) => void
    isConfirmed: boolean  
    setIsConfirmed: (confirmed: boolean) => void
    handleRescheduleConfirm: () => void
    onClose: () => void
    isValid: boolean

}