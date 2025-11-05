import { ReferralUrgency, SpecialityType } from "../types/ReferralType"

export interface ReferralContextProps{

    recipientName: string
    setRecipientName: (name: string) => void
    recipientEmail: string
    setRecipientEmail: (email: string) => void
    recipientPhone: string
    setRecipientPhone: (phone: string) => void
    recipientHospital: string
    setRecipientHospital: (hospital: string) => void
    recipientHospitalLocation: string
    setRecipientHospitalLocation: (location: string) => void
    speciality: SpecialityType
    setSpeciality: (specialty: SpecialityType) => void
    clinicalReason: string
    setClinicalReason: (reason: string) => void
    urgency: ReferralUrgency
    setUrgency: (urgency: ReferralUrgency) => void
    loading: boolean
    setLoading: (loading: boolean) => void

}