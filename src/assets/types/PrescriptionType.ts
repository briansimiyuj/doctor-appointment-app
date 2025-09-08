export interface PrescriptionType{

    _id: string
    medicineName: string
    dose: string
    frequency: string
    duration: string
    notes?: string
    appointmentID: string
    doctorID: string
    doctorName: string
    createdAt: string
    updatedAt?: string | null
    
}
