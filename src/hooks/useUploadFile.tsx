import { DocumentType } from "../assets/types/DocumentType"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useDocumentsTab } from "../context/DocumentsTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useProfileContext } from "../context/ProfileContext"
import { useFileSelection } from "./useFileSelection"
import { v4 as uuidv4 } from "uuid"

export const useUploadFile = () =>{

    const { isUploading, setIsUploading, setShowUploadArea } = useDocumentsTab(),
          { selectedFiles, clearFiles } = useFileSelection(),
          { addDocument } = usePatientDetails(),
          { profile } = useProfileContext(),
          { appointmentID } = useAppointmentsContext()

    const processFile = async(file: File): Promise<DocumentType> =>{
        
        const content = await new Promise<string>(resolve =>{

            const reader = new FileReader()

            reader.onload = () => resolve(reader.result as string)

            reader.readAsDataURL(file)
            
        })
        
        let normalizedType = file.type
        
        if(!normalizedType){
        
            if(file.name.toLowerCase().endsWith(".pdf")){
                
                normalizedType = "application/pdf"
        
            }else if(file.name.toLowerCase().match(/\.(jpg|jpeg)$/)){
        
                normalizedType = "image/jpeg"
        
            }else if(file.name.toLowerCase().endsWith(".png")){
        
                normalizedType = "image/png"
        
            }else if(file.name.toLowerCase().endsWith(".webp")){
        
                normalizedType = "image/webp"
        
            }
        }

        return{

            _id: uuidv4(),
            name: file.name,
            type: normalizedType,
            content: content,
            appointmentID,
            size: file.size,
            uploadDate: new Date(),
            uploadedBy: profile?.name || "Anonymous", 
            uploadedByID: profile?._id || "anonymous",

        }

    }

    const handleFileUpload = async() =>{
    
        if(selectedFiles.length === 0){

            console.error('No files selected')

            return

        }

        setIsUploading(true)

        try{
            
            await new Promise(resolve => setTimeout(resolve, 2000))

            const uploadedDocuments: DocumentType[] = await Promise.all(

                (selectedFiles as unknown as File[]).map(file => processFile(file))

            )

            uploadedDocuments.forEach(document => addDocument(document))

            localStorage.setItem("documents", JSON.stringify(uploadedDocuments))

            clearFiles()

            setShowUploadArea(false)

            alert('Files uploaded successfully')

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
        selectedFilesCount: selectedFiles.length,
        processFile 

    }

}
