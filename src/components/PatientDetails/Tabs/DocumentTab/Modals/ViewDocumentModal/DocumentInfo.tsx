import { FiFile, FiImage } from "react-icons/fi"
import { DocumentType } from "../../../../../../assets/types/DocumentType"

interface DocumentInfoProps{

    document: DocumentType

}

const DocumentInfo: React.FC<DocumentInfoProps> = ({ document })=>{

    const getFileIcon = (type: string) =>{
    
        if(type?.startsWith("image/")){

            return <FiImage className="text-blue-500 w-8 h-8"/>

        }

        return <FiFile className="text-red-500 w-8 h-8"/>
    
    }

    const getFileType = (type: string) =>{
    
        const typeMap: { [key: string]: string } ={

            "application/pdf": "PDF Document",
            "application/msword": "Word Document",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word Document",
            "image/jpeg": "JPEG Image",
            "image/png": "PNG Image",
            "image/jpg": "JPEG Image"

        }

        return typeMap[type] || type
    
    }

    const fileIcon = getFileIcon(document?.type),
          fileType = getFileType(document?.type)

    return(

        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-500 rounded-lg">

            {fileIcon}

            <div>

                <h3 className="font-medium text-gray-900">{document?.name}</h3>

                <p className="text-sm text-gray-500">{fileType}</p>

            </div>

        </div>

    )

}

export default DocumentInfo