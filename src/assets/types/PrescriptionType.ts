export interface PrescriptionType{

    _id: string
    prescriptionName: string
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
