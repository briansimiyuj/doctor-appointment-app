import { PrescriptionType } from "../types/PrescriptionType"

export interface PrescriptionContextProps{

    prescriptions: PrescriptionType[]
    setPrescriptions: (prescriptions: PrescriptionType[]) => void
    addPrescription: () => void
    removePrescription: (index: number) => void
    updateField: (index: number, field: keyof PrescriptionType, value: string) => void
    
}