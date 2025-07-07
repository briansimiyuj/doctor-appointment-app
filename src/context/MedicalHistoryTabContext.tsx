import { createContext, useContext, useState } from "react"
import { MedicalHistoryTabContextProps } from "../assets/contextProps/MedicalHistoryTabContextProps"
import { MedicalHistoryType } from "../assets/types/MedicalHistoryType"

interface MedicalHistoryTabContextProviderProps{

    children: React.ReactNode

}

export const MedicalHistoryTabContext=createContext<MedicalHistoryTabContextProps | undefined>(undefined)

export const MedicalHistoryTabContextProvider:React.FC<MedicalHistoryTabContextProviderProps> = ({ children })=>{

    const [showModal, setShowModal] = useState(
        import .meta.env.VITE_DEV_MODE === "true" ? true : false
    ),
          [editingIndex, setEditingIndex] = useState<number | null>(null),
          [editingValue, setEditingValue] = useState(''),
          [mode, setMode] = useState<"add" | "edit" | "delete">("add"),
          [targetSection, setTargetSection] = useState<MedicalHistoryType | null>(
            import.meta.env.VITE_DEV_MODE === "true" ? ("allergies" as unknown as MedicalHistoryType) : null
          )

    const openAddModal = (section: MedicalHistoryType) =>{
    
       setMode("add")
       
       setShowModal(true)

       setEditingIndex(null)
        
       setEditingValue('')

       setTargetSection(section)
    
    }

    const openEditModal = (index: number, value: string, section: MedicalHistoryType) =>{

        setMode("edit")

        setShowModal(true)

        setEditingIndex(index)

        setEditingValue(value)

        setTargetSection(section)
       
    }

    const openDeleteModal = (index: number, value: string, section: MedicalHistoryType) =>{

        setMode("delete")

        setShowModal(true)

        setEditingIndex(index)

        setEditingValue(value)

        setTargetSection(section)

    }

    const closeModal = () =>{

        setShowModal(false)

        setEditingIndex(null)

        setEditingValue('')

    }

    const contextValue: MedicalHistoryTabContextProps ={

        showModal,
        editingIndex,
        editingValue,
        setEditingValue,
        mode,
        openAddModal,
        openEditModal,
        closeModal,
        openDeleteModal,
        targetSection

    }

    return(

        <MedicalHistoryTabContext.Provider value={contextValue}>

            {children}

        </MedicalHistoryTabContext.Provider>

    )

}

export const useMedicalHistoryTabContext= () =>{

    const context = useContext(MedicalHistoryTabContext)

    if(!context) throw new Error('useMedicalHistoryTabContext must be used within MedicalHistoryTabContextProvider')

    return context

}