export type TestPanelType = "CBC" | "CMP" | "Lipid Panel" | "Thyroid Panel" | "A1C" | "Urinalysis" | "Coagulation Panel" | "Infectious Disease" | "Other"
export type LabUrgency = "Routine" | "ASAP" | "STAT"
export type LabTestPanel = TestPanelType | string

export interface LabTestType{

    _id: string
    appointmentID: string
    
    senderDoctor:{
        _id: string
        name: string
        email: string
        phone: string
        hospital: string
    }

    testsOrdered: TestPanelType[] | string[]
    clinicalJustification: string 
    urgency: LabUrgency

    preferredLab: string 
    labContact:{
        email: string
        phone: string
        address: string
    }

    preparationInstructions: string
    
}