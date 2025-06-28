import { DocumentType } from "../../assets/types/DocumentType"

interface PDFViewerProps{

    document: DocumentType | null

}

const PDFViewer: React.FC<PDFViewerProps> = ({ document })=>{

    return(

        <iframe
            src={document?.content}
            title={document?.name}
            className="w-full h-[80vh] border rounded"
        ></iframe>

    )

}

export default PDFViewer