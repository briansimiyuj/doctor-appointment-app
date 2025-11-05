import { LabTestPanel, LabUrgency } from "../types/LabTestType"

export interface LabTestContextProps{
    
    testsOrdered: LabTestPanel[] 
    toggleTestOrder: (test: LabTestPanel) => void 
    clinicalJustification: string
    setClinicalJustification: (reason: string) => void
    urgency: LabUrgency | null
    setUrgency: (level: LabUrgency) => void
    preferredLab: string
    setPreferredLab: (labName: string) => void
    labEmail: string
    setLabEmail: (email: string) => void
    labPhone: string
    setLabPhone: (phone: string) => void
    labAddress: string
    setLabAddress: (address: string) => void
    loading: boolean
    setLoading: (loading: boolean) => void
    preparationInstructions: string
    setPreparationInstructions: (instructions: string) => void

}