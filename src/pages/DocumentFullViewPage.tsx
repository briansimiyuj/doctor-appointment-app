import ImageViewer from "../components/DocumentFullView/ImageViewer"
import { useDocumentFromStorage } from "../hooks/useDocumentFromStorage"

const DocumentFullViewPage: React.FC = ()=>{

    const { document } = useDocumentFromStorage()

    return(

        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-4">

            {

                document?.type.startsWith("image/") &&(

                    <ImageViewer document={document}/>

                )

            }

        </div>


    )

}

export default DocumentFullViewPage