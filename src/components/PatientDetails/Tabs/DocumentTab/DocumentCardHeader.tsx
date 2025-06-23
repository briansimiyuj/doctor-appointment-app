import { FiFileText, FiImage } from "react-icons/fi";
import { DocumentType } from "../../../../assets/types/DocumentType";

interface DocumentCardHeaderProps{

    document: DocumentType

}

const DocumentCardHeader: React.FC<DocumentCardHeaderProps> = ({ document })=>{

    const getFileIcon = (type: string) =>{
    
        if(type.startsWith("image/")){

            return <FiImage className="text-blue-500 w-6 h-6"/>
        
        }

        return <FiFileText className="text-gray-500 w-6 h-6"/>
    
    }

    const fileIcon = getFileIcon(document.type)

    const formatDate = (date: Date) =>{
    
        return new Date(date).toLocaleDateString("en-US", {

            year: "numeric",
            month: "long",
            day: "numeric"
     
        })
    
    }

    return(

        <div className="flex items-start gap-3 mb-3">

            {fileIcon}

            <div className="flex-1">

                <h4 className="font-medium text-gray-900">{document.name}</h4>

                <p className="text-gray-500 text-sm">Uploaded on {formatDate(document.uploadDate)}</p>

                <p>By {document.uploadedBy}</p>

            </div>

        </div>

    )

}

export default DocumentCardHeader