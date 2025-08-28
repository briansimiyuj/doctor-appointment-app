import { NoteType } from "../types/NoteType"
import { PrescriptionType } from "../types/PrescriptionType"

export interface NotesTabContextProps{

    showAddNoteModal: boolean
    showDeleteNoteModal: boolean
    showViewNoteModal: boolean
    showAddPrescriptionModal: boolean
    showViewPrescriptionModal: boolean
    showDeletePrescriptionModal: boolean
    selectedNote: NoteType | null
    selectedPrescription: PrescriptionType | null
    openAddNoteModal: () => void
    openViewNoteModal: (note: NoteType) => void
    openViewPrescriptionModal: (prescription: PrescriptionType) => void
    openDeleteNoteModal: (note: NoteType) => void
    openEditNoteModal: (note: NoteType) => void
    openAddPrescriptionModal: () => void
    openEditPrescriptionModal: (prescription: PrescriptionType) => void
    openDeletePrescriptionModal: (prescription: PrescriptionType) => void
    closeModals: () => void
    title: string
    setTitle: (title: string) => void
    content: string
    setContent: (content: string) => void

}