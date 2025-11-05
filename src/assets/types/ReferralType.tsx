export type ReferralUrgency = "Routine" | "Urgent" | "Emergency" | null
export type SpecialityType = "Dermatologist" | "Cardiologist" | "Neurologist" | "Gastroenterologist" | "Ophthalmologist" | "Orthopedist" | "Pediatrician" | "Psychiatrist" | "Radiologist" | "Urologist" | "General Practitioner" | "Other" | null

export interface ReferralType{

    _id: string
    appointmentID: string

    senderDoctor:{
        _id: string
        name: string
        email: string
        phone: string
        hospital: string
    }

    speciality: SpecialityType
    recipientName: string
    
    recipientContact:{
        email: string
        phone: string
        hospital: string
        hospitalLocation: string
    }

    clinicalReason: string
    urgency: ReferralUrgency

}