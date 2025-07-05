export interface MedicalHistoryTabContextProps{

    showModal: boolean
    editingIndex: number | null
    editingValue: string
    setEditingValue: (value: string) => void
    mode: "add" | "edit" | "delete"
    openAddModal: () => void
    openEditModal: (index: number, value: string) => void
    openDeleteModal: (index: number, value: string) => void
    closeModal: () => void

}