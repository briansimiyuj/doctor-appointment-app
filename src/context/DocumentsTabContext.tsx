import { createContext, useContext, useState } from "react"
import { DocumentsTabContextProps } from "../assets/contextProps/DocumentsTabContextProps"
import { DocumentType } from "../assets/types/DocumentType"

interface DocumentsTabContextProviderProps{

    children: React.ReactNode

}

const DocumentsTabContext = createContext<DocumentsTabContextProps | undefined>(undefined)

export const DocumentsTabContextProvider: React.FC<DocumentsTabContextProviderProps> = ({ children })=>{

    const [showUploadArea, setShowUploadArea] = useState(false),
          [selectedFiles, setSelectedFiles] = useState<DocumentType[]>([]),
          [isUploading, setIsUploading] = useState(false),
          [selectedDocument, setSelectedDocument] = useState<DocumentType | null>(null),
          [showViewModal, setShowViewModal] = useState(false),
          [isDownloading, setIsDownloading] = useState(false),
          [showDeleteModal, setShowDeleteModal] = useState(false),
          [documentToDelete, setDocumentToDelete] = useState<DocumentType | null>(null)

    const toggleUploadArea = () =>{
    
       setShowUploadArea(!showUploadArea)
    
    }

    const openViewModal = (document: DocumentType) =>{
    
       setSelectedDocument(document)

       setShowViewModal(true)
    
    }

    const closeViewModal = () =>{
    
       setSelectedDocument(null)

       setShowViewModal(false)
    
    }

    const openDeleteModal = (document: DocumentType) =>{
    
       setDocumentToDelete(document)

       setShowDeleteModal(true)
    
    }

    const closeDeleteModal = () =>{

       setDocumentToDelete(null)

       setShowDeleteModal(false)

    }

    const contextValue: DocumentsTabContextProps ={

        showUploadArea,
        setShowUploadArea,
        toggleUploadArea,
        selectedFiles,
        setSelectedFiles,
        isUploading,
        setIsUploading,
        selectedDocument,
        setSelectedDocument,
        showViewModal,
        setShowViewModal,
        isDownloading,
        setIsDownloading,
        showDeleteModal,
        setShowDeleteModal,
        documentToDelete,
        setDocumentToDelete,
        openViewModal,
        closeViewModal,
        openDeleteModal,
        closeDeleteModal

    }

    return(

        <DocumentsTabContext.Provider value={contextValue}>

            {children}

        </DocumentsTabContext.Provider>

    )

}

export const useDocumentsTab = ()=>{

    const context = useContext(DocumentsTabContext)

    if(!context) throw new Error('useDocumentsTab must be used within a DocumentsTabProvider')

    return context

}