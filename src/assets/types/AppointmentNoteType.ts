export interface AppointmentNoteType{

    _id: string
    appointmentID: string
    patientID: string
    doctorID: string
    notes: string 
    doctorName: string
    createdAt: string
    updatedAt?: string
    prescription: string
    diagnosis: string
    followUpDate?: string | null

}