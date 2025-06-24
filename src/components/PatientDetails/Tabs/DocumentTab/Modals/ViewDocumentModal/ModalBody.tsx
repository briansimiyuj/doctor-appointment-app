import { DocumentType } from "../../../../../../assets/types/DocumentType"
import DocumentInfo from "./DocumentInfo"

interface ViewDocumentModalProps{

    document: DocumentType

}

const ModalBody: React.FC<ViewDocumentModalProps> = ({ document })=>{

    return(

        <div className="space-y-4">

            <DocumentInfo document={document}/>

        </div>

    )

}

export default ModalBody