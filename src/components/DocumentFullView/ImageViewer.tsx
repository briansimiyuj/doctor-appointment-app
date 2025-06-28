import { DocumentType } from "../../assets/types/DocumentType"

interface ImageViewerProps{

    document: DocumentType | null

} 

const ImageViewer: React.FC<ImageViewerProps> = ({ document })=>{

    return(

        <img
            src={document?.content}
            alt={document?.name}
            className="object-cover w-full rounded border"
        />

    )

}

export default ImageViewer