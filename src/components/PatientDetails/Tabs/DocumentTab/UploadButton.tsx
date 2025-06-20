import { FiUpload } from "react-icons/fi"
import { useDocumentsTab } from "../../../../context/DocumentsTabContext"
import { useFileSelection } from "../../../../hooks/useFileSelection"

const UploadButton: React.FC = ()=>{

    const { isUploading } = useDocumentsTab(),
          { selectedFiles } = useFileSelection()

    return(

        <div className="mt-4 flex justify-center">

            <button className="bg-primary-btn flex items-center gap-2 text-secondary-bg text-sm px-4 py-2 rounded-md hover:bg-primary-btn-hover transition-colors duration-200"> 

                <FiUpload className="w-6 h-6"/>

                {

                    isUploading ? 'Uploading...' : `Upload ${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''}`

                }

            </button>

        </div>

    )

}

export default UploadButton