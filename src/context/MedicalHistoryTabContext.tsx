import { createContext, useContext, useState } from "react"
import { MedicalHistoryTabContextProps } from "../assets/contextProps/MedicalHistoryTabContextProps"

interface MedicalHistoryTabContextProviderProps{

    children: React.ReactNode

}

export const MedicalHistoryTabContext=createContext<MedicalHistoryTabContextProps | undefined>(undefined)

export const MedicalHistoryTabContextProvider:React.FC<MedicalHistoryTabContextProviderProps> = ({ children })=>{

    const [showModal, setShowModal] = useState(false),
          [editingIndex, setEditingIndex] = useState<number | null>(null),
          [editingValue, setEditingValue] = useState(''),
          [mode, setMode] = useState<"add" | "edit" | "delete">("add")

    const openAddModal = () =>{
    
       setMode("add")
       
       setShowModal(true)

       setEditingIndex(null)
        
       setEditingValue('')
    
    }

    const openEditModal = (index: number, value: string) =>{

        setMode("edit")

        setShowModal(true)

        setEditingIndex(index)

        setEditingValue(value)
       
    }

    const openDeleteModal = (index: number, value: string) =>{

        setMode("delete")

        setShowModal(true)

        setEditingIndex(index)

        setEditingValue(value)

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