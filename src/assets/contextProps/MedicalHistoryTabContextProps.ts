import { MedicalHistoryType } from "../types/MedicalHistoryType"

export interface MedicalHistoryTabContextProps{

    showModal: boolean
    editingIndex: number | null
    editingValue: string
    setEditingValue: (value: string) => void
    originalValue: string
    mode: "add" | "edit" | "delete"
    openAddModal: (section: MedicalHistoryType) => void
    targetSection: MedicalHistoryType | null
    openEditModal:(
        index: number,
        value: string,
        section: MedicalHistoryType
    ) => void
    openDeleteModal:(
        index: number,
        value: string,
        section: MedicalHistoryType
    ) => void
    closeModal: () => void

}