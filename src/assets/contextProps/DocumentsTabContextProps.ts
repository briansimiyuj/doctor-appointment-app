import { DocumentType } from "../types/DocumentType"

export interface DocumentsTabContextProps{

    showUploadArea: boolean
    setShowUploadArea: (show: boolean) => void
    toggleUploadArea: () => void
    selectedFiles: File[]
    setSelectedFiles: (files: File[]) => void
    isUploading: boolean
    setIsUploading: (isUploading: boolean) => void

    selectedDocument: DocumentType | null
    setSelectedDocument: (document: DocumentType | null) => void
    showViewModal: boolean
    setShowViewModal: (show: boolean) => void

    isDownloading: boolean
    setIsDownloading: (isDownloading: boolean) => void

    showDeleteModal: boolean
    setShowDeleteModal: (show: boolean) => void
    documentToDelete: DocumentType | null
    setDocumentToDelete: (document: DocumentType | null) => void

    openViewModal: (document: DocumentType) => void
    closeViewModal: () => void
    openDeleteModal: (document: DocumentType) => void
    closeDeleteModal: () => void

}