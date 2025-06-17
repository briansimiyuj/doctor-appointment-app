import BrowseFilesButton from "./BrowseFilesButton"

const DocumentUploadArea: React.FC = ()=>{

    return(

        <div className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">

            <BrowseFilesButton/>

            <div className="text-gray-500 text-sm space-y-2">

                <p>Supported file types: PDF, DOC, DOCX, JPG, JPEG, PNG</p>

                <p>Maximum file size: 10MB per file</p>

            </div>

        </div>

    )

}

export default DocumentUploadArea