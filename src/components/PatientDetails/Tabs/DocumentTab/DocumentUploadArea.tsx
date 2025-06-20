import { useDocumentsTab } from "../../../../context/DocumentsTabContext"
import SelectedFiles from "./SelectedFiles"
import BrowseFilesButton from "./BrowseFilesButton"
import UploadButton from "./UploadButton"

const DocumentUploadArea: React.FC = ()=>{

    const { selectedFiles } = useDocumentsTab()

    return(

        <div className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 overflow-x-auto w-full">

            <BrowseFilesButton/>

            <div className="text-gray-500 text-sm space-y-2">

                <p>Supported file types: PDF, DOC, DOCX, JPG, JPEG, PNG</p>

                <p>Maximum file size: 10MB per file</p>

            </div>

            {

                selectedFiles.length > 0 &&( 

                    <>

                        <SelectedFiles/>

                        <UploadButton/>

                    </>

                )

            }

        </div>

    )

}

export default DocumentUploadArea