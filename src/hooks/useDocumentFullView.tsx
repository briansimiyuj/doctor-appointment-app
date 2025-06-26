import { DocumentType } from "../assets/types/DocumentType"

export const useDocumentFullView = () =>{
    
    const openDocumentFullView = (document: DocumentType) =>{

        localStorage.setItem("fullViewDocument", JSON.stringify(document))

        const fullViewPath = `/document-viewer/${document._id}`

        window.open(fullViewPath, "_blank")

    }

    const getFullViewDocument = (): DocumentType | null =>{
    
        const savedDocument = localStorage.getItem("fullViewDocument")

        return savedDocument ? JSON.parse(savedDocument) : null
    
    }

    return{

        openDocumentFullView,
        getFullViewDocument

    }

}
