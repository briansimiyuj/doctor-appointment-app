import { useDocumentsTab } from "../../../../context/DocumentsTabContext"
import DocumentsTabHeader from "./DocumentsTabHeader"
import DocumentUploadArea from "./DocumentUploadArea"

const DocumentTab: React.FC = ()=>{

    const { showUploadArea } = useDocumentsTab()

    return(

        <div className="p-4">

            <DocumentsTabHeader/>

            { showUploadArea && <DocumentUploadArea/> }

        </div>
    )

}

export default DocumentTab