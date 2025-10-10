import { AppointmentNoteType } from "../types/AppointmentNoteType"

export interface AddNotesContextProps{

    notes: string
    setNotes: (notes: string) => void
    prescription: string
    setPrescription: (prescription: string) => void
    diagnosis: string
    setDiagnosis: (diagnosis: string) => void
    followUpDate: string
    setFollowUpDate: (date: string) => void
    isSubmitting: boolean
    setIsSubmitting: (isSubmitting: boolean) => void
    appointmentNotes: AppointmentNoteType[]
    addAppointmentNotes: (note: AppointmentNoteType) => void
    getAppointmentNotes: (appointmentID: string) => AppointmentNoteType[]
    fetchNotesForAppointment: (appointmentID: string) => void
    subscribeToAppointmentNotes: (appointmentID: string) => void
    loading: boolean
    resetForm: () => void

}