import { createContext, useContext, useState, useCallback } from "react"
import { LabTestContextProps } from "../assets/contextProps/LabTestContextProps"
import { LabUrgency, LabTestPanel } from "../assets/types/LabTestType"

interface LabTestContextProviderProps{

    children: React.ReactNode

}

export const LabTestContext = createContext<LabTestContextProps | undefined>(undefined)

export const LabTestContextProvider:React.FC<LabTestContextProviderProps> = ({ children })=>{

    const [testsOrdered, setTestsOrdered] = useState<LabTestPanel[]>([]),
          [clinicalJustification, setClinicalJustification] = useState(''),
          [urgency, setUrgency] = useState<LabUrgency | null>(null),
          [preferredLab, setPreferredLab] = useState(''),
          [labEmail, setLabEmail] = useState(''),
          [labPhone, setLabPhone] = useState(''),
          [labAddress, setLabAddress] = useState(''),
          [loading, setLoading] = useState(false),
          [preparationInstructions, setPreparationInstructions] = useState('')

    const toggleTestOrder = useCallback((test: LabTestPanel) =>{

        setTestsOrdered(prev =>{

            if(prev.includes(test)){

                return prev.filter(t => t !== test)

            }else{

                return [...prev, test]

            }

        })
        
    }, [])

    const contextValue: LabTestContextProps ={

        testsOrdered,
        toggleTestOrder,
        clinicalJustification,
        setClinicalJustification,
        urgency,
        setUrgency,
        preferredLab,
        setPreferredLab,
        labEmail,
        setLabEmail,
        labPhone,
        setLabPhone,
        labAddress,
        setLabAddress,
        loading,
        setLoading,
        preparationInstructions,
        setPreparationInstructions

    }

    return(

        <LabTestContext.Provider value={contextValue}>

            {children}

        </LabTestContext.Provider>

    )

}

export const useLabTestContext = () =>{

    const context = useContext(LabTestContext)

    if(!context) throw new Error('useLabTestContext must be used within LabTestContextProvider')

    return context

}