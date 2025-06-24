import { DocumentType } from "../../../../../../../assets/types/DocumentType"

interface ImageViewerProps{

    document: DocumentType

}

const ImageViewer: React.FC<ImageViewerProps> = ({ document })=>{

    return(

        <div className="bg-gray-50 p-4 text-center">

            {

                document.content ?(

                    <img
                        src={document.content}
                        alt={document.name}
                        className="max-h-96 max-w-full mx-auto rounded"
                    />

                ):(

                    <div className="py-12">
                    
                        <p className="text-gray-500">Image preview not available.</p>
                    
                    </div>

                )

            }

        </div>

    )

}

export default ImageViewer