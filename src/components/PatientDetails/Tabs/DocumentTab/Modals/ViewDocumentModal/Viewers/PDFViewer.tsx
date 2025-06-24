import { DocumentType } from "../../../../../../../assets/types/DocumentType";

interface PDFViewerProps{

    document: DocumentType

}

const PDFViewer: React.FC<PDFViewerProps> = ({ document })=>{

    return(

        <div className="bg-gray-50">

            {

                document.content ?(
                    
                    <iframe
                        src={document.content}
                        title={document.name}
                        width="100%"
                        height="500px"
                        className="border-0"
                    ></iframe>

                ):(

                    <div className="py-12 text-center">

                        <p className="text-gray-500">PDF preview not available.</p>

                    </div>
                )

            }

        </div>

    )

}

export default PDFViewer