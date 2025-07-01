import { NoteType } from "../types/NoteType"

export interface NotesTabContextProps{

    showAddNoteModal: boolean
    showDeleteNoteModal: boolean
    showViewNoteModal: boolean
    selectedNote: NoteType | null
    openAddNoteModal: () => void
    openViewNoteModal: (note: NoteType) => void
    openDeleteNoteModal: (note: NoteType) => void
    closeModals: () => void
    title: string
    setTitle: (title: string) => void
    content: string
    setContent: (content: string) => void

}