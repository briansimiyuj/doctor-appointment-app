import { DocumentType } from "../../../../assets/types/DocumentType"

interface DocumentCardProps{

    document: DocumentType
    key: number
    
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document, key })=>{

    return(

        <h1>DocumentCard</h1>

    )

}

export default DocumentCard