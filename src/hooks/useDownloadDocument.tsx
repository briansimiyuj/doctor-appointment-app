import { DocumentType } from "../assets/types/DocumentType"

export const useDownloadDocument = () =>{

    const downloadDocument = (document: DocumentType) =>{
    
        if(!document.content){
            
           console.error('Document content is not available for download.')

            return

        }

        const link = window.document.createElement("a")

        link.href = document.content 

        link.download = document.name || "document"

        link.click()

        link.remove()

        console.log(`Document ${document.name} downloaded successfully.`)
    
    }

    return { downloadDocument }

}
