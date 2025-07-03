import { createContext, useContext, useState } from "react"
import { NotesTabContextProps } from "../assets/contextProps/NotesTabContextProps"
import { NoteType } from "../assets/types/NoteType"

interface NotesTabProviderProps{

    children: React.ReactNode

}

const NotesTabContext = createContext<NotesTabContextProps | undefined>(undefined)

export const NotesTabProvider: React.FC<NotesTabProviderProps> = ({ children }) =>{
    
    const [showAddNoteModal, setShowAddNoteModal] = useState<boolean>(false),
          [showDeleteNoteModal, setShowDeleteNoteModal] = useState<boolean>(false),
          [showViewNoteModal, setShowViewNoteModal] = useState<boolean>(false),
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

    const closeModals = () =>{

        setShowAddNoteModal(false)

        setShowDeleteNoteModal(false)

        setShowViewNoteModal(false)

        setSelectedNote(null)

    }

    const value: NotesTabContextProps ={

        showAddNoteModal,
        showDeleteNoteModal,
        showViewNoteModal,
        selectedNote,
        openAddNoteModal,
        openViewNoteModal,
        openDeleteNoteModal,
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