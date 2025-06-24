import { DocumentType } from "../../../../../../assets/types/DocumentType"
import ImageViewer from "./Viewers/ImageViewer"

interface FileViewerProps{

    document: DocumentType

}

const FileViewer: React.FC<FileViewerProps> = ({ document })=>{

    const renderViewer = () =>{
    
        if(document?.type?.startsWith("image/") || document?.type === "image"){

            return <ImageViewer document={document}/>
            
        }
    
    }

    return(

        <div className="border rounded-lg overflow-hidden">

            {renderViewer()}

        </div>

    )

}

export default FileViewer