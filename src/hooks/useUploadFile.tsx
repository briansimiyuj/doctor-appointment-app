import { DocumentType } from "../assets/types/DocumentType"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useDocumentsTab } from "../context/DocumentsTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useProfileContext } from "../context/ProfileContext"
import { useFileSelection } from "./useFileSelection"
import { v4 as uuidv4 } from "uuid"
import { storage } from "../firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

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
            content, 
            appointmentID,
            size: file.size,
            uploadDate: new Date(),
            uploadedBy: profile?.name || "Anonymous", 
            uploadedByID: profile?._id || "anonymous",

        }

    }

    const uploadFileToFirebase = async(file: File, document: DocumentType): Promise<DocumentType> =>{

        const uniqueFilename = `${file.name}-${uuidv4()}`,
              storageRef = ref(storage, `uploads/${uniqueFilename}`),
              uploadResult = await uploadBytes(storageRef, file),
              url = await getDownloadURL(uploadResult.ref)

        return{

            ...document, 
            content: url,

        }

    }

    const uploadAndProcessFile = async(file: File): Promise<DocumentType> =>{
    
        const initialDocument = await processFile(file),
             finalDocument = await uploadFileToFirebase(file, initialDocument)

        return finalDocument
    
    }


    const handleFileUpload = async() =>{
    
        if(selectedFiles.length === 0){

            console.error('No files selected')

            return

        }

        setIsUploading(true)

        try{
            
            await new Promise(resolve => setTimeout(resolve, 2000))

            const filesArray = selectedFiles as unknown as File[]

            const initialDocuments: DocumentType[] = await Promise.all(

                filesArray.map(file => processFile(file))

            )
            
            const uploadPromises = filesArray.map((file, index) =>{

                const initialDocument = initialDocuments[index]
                
                return uploadFileToFirebase(file, initialDocument)

            })

            const finalDocuments: DocumentType[] = await Promise.all(uploadPromises)

            finalDocuments.forEach(document => addDocument(document))

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
        processFile,
        uploadAndProcessFile

    }

}