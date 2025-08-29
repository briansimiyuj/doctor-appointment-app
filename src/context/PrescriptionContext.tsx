import { createContext, useContext, useState } from "react"
import { PrescriptionContextProps } from "../assets/contextProps/PrescriptionContextProps"
import { PrescriptionType } from "../assets/types/PrescriptionType"

interface PrescriptionContextProviderProps{

    children: React.ReactNode

}

export const PrescriptionContext = createContext<PrescriptionContextProps | undefined>(undefined)

export const PrescriptionContextProvider:React.FC<PrescriptionContextProviderProps> = ({ children })=>{

    const [prescriptions, setPrescriptions] = useState<PrescriptionType[]>([
        { medicineName: '', dose: '', frequency: '', duration: '', notes: '' }
    ])

    const updateField = (index: number, field: keyof PrescriptionType, value: string) =>{
    
       setPrescriptions(prescriptions.map((item, i) => i === index ? { ...item, [field]: value } : item))
    
    }

    const addPrescription = () =>{

        setPrescriptions([...prescriptions, { medicineName: '', dose: '', frequency: '', duration: '', notes: '' }])

    }

    const removePrescription = (index: number) =>{
        
        setPrescriptions(prescriptions.filter((_, i) => i !== index))

    }

    const contextValue: PrescriptionContextProps ={

        addPrescription,
        removePrescription,
        updateField,
        prescriptions,
        setPrescriptions

    }

    return(

        <PrescriptionContext.Provider value={contextValue}>

            {children}

        </PrescriptionContext.Provider>

    )

}

export const usePrescriptionContext=()=>{

      const context=useContext(PrescriptionContext)

      if(!context)throw new Error('usePrescriptionContext must be used within PrescriptionContextProvider')

      return context

}