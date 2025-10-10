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
    setAppointmentNotes: (appointmentNotes: AppointmentNoteType[]) => void
    addAppointmentNotes: (note: AppointmentNoteType) => void
    getAppointmentNotes: (appointmentID: string) => AppointmentNoteType[]
    subscribeToAppointmentNotes: (appointmentID: string) => void
    formatFirebaseTimestamp: (timestamp: any) => void
    loading: boolean
    setLoading: (loading: boolean) => void
    resetForm: () => void

}