import { FiDownload, FiEye, FiTrash2 } from "react-icons/fi";
import { DocumentType } from "../../../../assets/types/DocumentType";
import { useDocumentsTab } from "../../../../context/DocumentsTabContext";
import { useDownloadDocument } from "../../../../hooks/useDownloadDocument";

interface DocumentCardActionsProps{

    document: DocumentType

}

const DocumentCardActions: React.FC<DocumentCardActionsProps> = ({ document })=>{

    const { openViewModal, openDeleteModal } = useDocumentsTab(),
          { downloadDocument } = useDownloadDocument()

    return(

        <div className="flex flex-col mt-6 gap-2">

            <button 
                className="bg-primary-btn flex items-center gap-2 text-base px-4 py-2 rounded dark:text-white text-white justify-center"
                onClick={() => openViewModal(document)}
            >

                <FiEye className="w-6 h-6"/>

                View

            </button>

            <button 
                className="bg-gray-800 dark:bg-gray-300 flex items-center gap-2 text-base px-4 py-2 rounded text-white dark:text-black justify-center"
                onClick={() => downloadDocument(document)}
            >
                
                <FiDownload className="w-6 h-6"/>

                Download

            </button>

            <button 
                className="bg-red-500 flex items-center gap-2 text-base px-4 py-2 rounded text-white dark:text-white  justify-center"
                onClick={() => openDeleteModal(document)}
            >

                <FiTrash2 className="w-6 h-6"/>

                Delete

            </button>

        </div>

    )

}

export default DocumentCardActions