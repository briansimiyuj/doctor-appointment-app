export interface PrescriptionType{

    _id: string
    medicineName: string
    dose: string
    frequency: string
    duration: string
    notes?: string
    appointmentID: string
    doctorID: string
    createdAt: string
    updatedAt?: string
    
}
