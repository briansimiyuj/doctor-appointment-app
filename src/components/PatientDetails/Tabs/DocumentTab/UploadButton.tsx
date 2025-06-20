import { FiUpload } from "react-icons/fi"
import { useUploadFile } from "../../../../hooks/useUploadFile"

const UploadButton: React.FC = ()=>{

    const { handleFileUpload, isUploading, canUpload, selectedFilesCount } = useUploadFile()

    return(

        <div className="mt-4 flex justify-center">

            <button 
                className={`bg-primary-btn flex items-center gap-2 text-secondary-bg text-sm px-4 py-2 rounded-md hover:bg-primary-btn-hover transition-colors duration-200 ${!canUpload && 'cursor-not-allowed'}`}
                onClick={handleFileUpload}
                disabled={!canUpload}
            > 

                <FiUpload className="w-6 h-6"/>

                {

                    isUploading ? 'Uploading...' : `Upload ${selectedFilesCount} file${selectedFilesCount > 1 ? 's' : ''}`

                }

            </button>

        </div>

    )

}

export default UploadButton