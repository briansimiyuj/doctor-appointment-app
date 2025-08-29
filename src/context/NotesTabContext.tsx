import { createContext, useContext, useState } from "react"
import { NotesTabContextProps } from "../assets/contextProps/NotesTabContextProps"
import { NoteType } from "../assets/types/NoteType"
import { PrescriptionType } from "../assets/types/PrescriptionType"

interface NotesTabProviderProps{

    children: React.ReactNode

}

const NotesTabContext = createContext<NotesTabContextProps | undefined>(undefined)

export const NotesTabProvider: React.FC<NotesTabProviderProps> = ({ children }) =>{
    
    const [showAddNoteModal, setShowAddNoteModal] = useState<boolean>(false),
          [showDeleteNoteModal, setShowDeleteNoteModal] = useState<boolean>(false),
          [showViewNoteModal, setShowViewNoteModal] = useState<boolean>(false),
          [showAddPrescriptionModal, setShowAddPrescriptionModal] = useState<boolean>(
            import .meta.env.VITE_DEV_MODE === "true" ? true : false
          ),
          [showViewPrescriptionModal, setShowViewPrescriptionModal] = useState<boolean>(false),
          [showDeletePrescriptionModal, setShowDeletePrescriptionModal] = useState<boolean>(false),
          [selectedPrescription, setSelectedPrescription] = useState<PrescriptionType | null>(null),
          [selectedNote, setSelectedNote] = useState<NoteType | null>(null),
          [title, setTitle] = useState<string>(''),         
          [content, setContent] = useState<string>('')

    const openAddNoteModal = () =>{
    
       setShowAddNoteModal(true)

       setSelectedNote(null)
    
    }

    const openViewNoteModal = (note: NoteType) =>{

        setSelectedNote(note)

        setShowViewNoteModal(true)

    }

    const openDeleteNoteModal = (note: NoteType) =>{

        setSelectedNote(note)

        setShowDeleteNoteModal(true)

    }

    const openAddPrescriptionModal = () =>{

        setShowAddPrescriptionModal(true)

        setSelectedPrescription(null)

    }

    const openViewPrescriptionModal = (prescription: PrescriptionType) =>{

        setSelectedPrescription(prescription)

        setShowViewPrescriptionModal(true)

    }

    const openEditPrescriptionModal = (prescription: PrescriptionType) =>{

        setSelectedPrescription(prescription)

        setShowAddPrescriptionModal(true)

    }

    const openDeletePrescriptionModal = (prescription: PrescriptionType) =>{

        setSelectedPrescription(prescription)

        setShowDeletePrescriptionModal(true)

    }

    const closeModals = () =>{

        setShowAddNoteModal(false)

        setShowDeleteNoteModal(false)

        setShowViewNoteModal(false)

        setShowAddPrescriptionModal(false)

        setShowDeletePrescriptionModal(false)

        setSelectedNote(null)

        setSelectedPrescription(null)

    }

    const openEditNoteModal = (note: NoteType) =>{

        setSelectedNote(note)

        setTitle(note.title)

        setContent(note.content)

        setShowAddNoteModal(true)

    }

    const value: NotesTabContextProps ={

        showAddNoteModal,
        showDeleteNoteModal,
        showViewNoteModal,
        showAddPrescriptionModal,
        showViewPrescriptionModal,
        showDeletePrescriptionModal,
        selectedNote,
        selectedPrescription,
        openAddNoteModal,
        openViewNoteModal,
        openDeleteNoteModal,
        openEditNoteModal,
        openAddPrescriptionModal,
        openEditPrescriptionModal,
        openViewPrescriptionModal,
        openDeletePrescriptionModal,
        closeModals,
        title,
        setTitle,
        content,
        setContent

    }


    return(
        
        <NotesTabContext.Provider value={value}>

            {children}

        </NotesTabContext.Provider>

    )

}

export const useNotesTabContext = () =>{

    const context = useContext(NotesTabContext)

    if(!context){

        throw new Error("useNotesTabContext must be used within a NotesTabProvider")

    }

    return context

}