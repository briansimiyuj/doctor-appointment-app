import { useDocumentsTab } from "../../../../context/DocumentsTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import DocumentsList from "./DocumentsList"
import DocumentsTabHeader from "./DocumentsTabHeader"
import DocumentUploadArea from "./DocumentUploadArea"
import DeleteDocumentModal from "./Modals/DeleteModals/DeleteDocumentModal"
import ViewDocumentModal from "./Modals/ViewDocumentModal/ViewDocumentModal"

const DocumentTab: React.FC = ()=>{

    const { showUploadArea, showViewModal, showDeleteModal } = useDocumentsTab(),
          { documents } = usePatientDetails()

    return(

        <div className="p-4">

            <DocumentsTabHeader/>

            { showUploadArea && <DocumentUploadArea/> }

            {

                documents && documents.length > 0 ?(

                    <DocumentsList/>

                ):(

                    <div className="text-center py-8">

                        <p className="text-gray-500">No documents uploaded yet.</p>

                    </div>

                )

            }

            { showViewModal && <ViewDocumentModal/> }

            { showDeleteModal && <DeleteDocumentModal/> }

        </div>
    )

}

export default DocumentTab