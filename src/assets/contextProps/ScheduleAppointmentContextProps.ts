export interface ScheduleAppointmentContextProps{

    newDate: Date | string | null
    setNewDate: (date: string | null) => void
    newTime: string | null
    setNewTime: (time: string | null) => void
    consultationType: "in-person" | "online" | null
    setConsultationType: (type: "in-person" | "online" | null) => void
    isConfirmed: boolean
    setIsConfirmed: (isConfirmed: boolean) => void
    isValid: boolean 
    handleScheduleConfirm: () => void
    onClose: () => void

}