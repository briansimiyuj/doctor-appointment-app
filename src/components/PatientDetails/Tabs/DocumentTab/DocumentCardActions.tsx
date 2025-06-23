import { FiDownload, FiEye, FiTrash2 } from "react-icons/fi";
import { DocumentType } from "../../../../assets/types/DocumentType";

interface DocumentCardActionsProps{

    document: DocumentType

}

const DocumentCardActions: React.FC<DocumentCardActionsProps> = ({ document })=>{

    return(

        <div className="flex flex-col mt-6 gap-2">

            <button 
                className="bg-primary-btn flex items-center gap-2 text-base px-4 py-2 rounded text-white justify-center"
            >

                <FiEye className="w-6 h-6"/>

                View

            </button>

            <button 
                className="bg-gray-800 flex items-center gap-2 text-base px-4 py-2 rounded text-white justify-center"
            >
                
                <FiDownload className="w-6 h-6"/>

                Download

            </button>

            <button 
                className="bg-red-500 flex items-center gap-2 text-base px-4 py-2 rounded text-white justify-center"
            >

                <FiTrash2 className="w-6 h-6"/>

                Delete

            </button>

        </div>

    )

}

export default DocumentCardActions