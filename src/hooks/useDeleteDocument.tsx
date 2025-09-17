import { useDocumentsTab } from "../context/DocumentsTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useDeleteDocument = () =>{

    const { removeDocument } = usePatientDetails(),
          { documentToDelete, closeDeleteModal } = useDocumentsTab()

    const handleDeleteDocument = () =>{
        
        if(!documentToDelete) return
    
        removeDocument(documentToDelete._id)

        closeDeleteModal()

        alert('Document deleted successfully')
    
    }

    return { handleDeleteDocument }

}
