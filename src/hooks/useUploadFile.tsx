import { DummyAppointment } from "../assets/dummyData/DummyAppointment"
import { DocumentType } from "../assets/types/DocumentType"
import { useDocumentsTab } from "../context/DocumentsTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useFileSelection } from "./useFileSelection"
import { v4 as uuidv4 } from "uuid"

export const useUploadFile = () =>{

    const { isUploading, setIsUploading, setShowUploadArea } = useDocumentsTab(),
          { selectedFiles, clearFiles } = useFileSelection(),
          { addDocument } = usePatientDetails()

    const handleFileUpload = async() =>{
    
        if(selectedFiles.length === 0){

            console.error('No files selected')

            return

        }

        setIsUploading(true)

        try{
            
            await new Promise(resolve => setTimeout(resolve, 2000))

            const uploadedDocuments: DocumentType[] = selectedFiles.map(file =>({

                _id: uuidv4(),
                name: file.name,
                type: file.type,
                size: file.size,
                uploadDate: new Date(),
                uploadedBy: DummyAppointment.doctor.name
                
            }))

            uploadedDocuments.forEach(document => addDocument(document))

            clearFiles()

            setShowUploadArea(false)

            console.log('Files uploaded successfully:', uploadedDocuments)

        }catch(error){

            console.error('Error uploading files: ', error) 

        }finally{

            setIsUploading(false)

        }
    
    }

    const canUpload = selectedFiles.length > 0 && !isUploading

    return{

        handleFileUpload,
        isUploading,
        canUpload,
        selectedFilesCount: selectedFiles.length

    }

}
