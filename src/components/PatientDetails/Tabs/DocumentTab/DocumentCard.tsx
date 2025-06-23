import { DocumentType } from "../../../../assets/types/DocumentType"
import DocumentCardActions from "./DocumentCardActions"
import DocumentCardHeader from "./DocumentCardHeader"

interface DocumentCardProps{

    document: DocumentType
    key: number
    
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document })=>{

    return(

        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">

            <DocumentCardHeader document={document}/>

            <DocumentCardActions document={document}/>

        </div>

    )

}

export default DocumentCard