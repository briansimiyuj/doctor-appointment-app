import { useDocumentsTab } from "../context/DocumentsTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useToast } from "./useToast"
import { db, storage } from "../firebaseConfig"
import { ref, deleteObject } from "firebase/storage"
import { doc, deleteDoc } from "firebase/firestore"
import { useState } from "react"

export const useDeleteDocument = () =>{

    const { removeDocument } = usePatientDetails(),
          { documentToDelete, closeDeleteModal } = useDocumentsTab(),
          { showToast } = useToast()
    
    const [isDeleting, setIsDeleting] = useState(false)

    const getStorageRefFromUrl = (downloadUrl: string) =>{
    
        try{

            const url = new URL(downloadUrl),
                  pathMatch = url.pathname.match(/\/o\/(.+?)(\?|$)/)
            
            if(pathMatch && pathMatch[1]){

                const storagePath = decodeURIComponent(pathMatch[1])

                return ref(storage, storagePath)

            }
            
            return null

        }catch(error){

            console.error('Error parsing storage URL:', error)

            return null

        }
    
    }

    const getFirestorePath = (documentID: string, appointmentID?: string) =>{
    
        if(appointmentID){

            return { collection: "appointments", path: [appointmentID, "documents", documentID] }

        }else{

            return { collection: "generalDocuments", path: [documentID] }

        }
    
    }

    const deleteFromStorage = async(downloadUrl: string) =>{
    
        const storageRef = getStorageRefFromUrl(downloadUrl)
        
        if(!storageRef){

            throw new Error('Could not extract storage path from URL')

        }

        await deleteObject(storageRef)
    
    }

    const deleteFromFirestore = async(documentID: string, appointmentID?: string) =>{
    
        const { collection, path } = getFirestorePath(documentID, appointmentID),
              documentRef = doc(db, collection, ...path)
        
        await deleteDoc(documentRef)
    
    }

    const handleDeleteDocument = async() =>{
    
        if(!documentToDelete) return

        setIsDeleting(true)

        try{

            if(documentToDelete.content){

                await deleteFromStorage(documentToDelete.content)

            }

            await deleteFromFirestore(
                documentToDelete._id, 
                documentToDelete.appointmentID
            )

            removeDocument(documentToDelete._id)

            closeDeleteModal()

            showToast("Document deleted successfully", "success")

        }catch(error){

            console.error('Error deleting document:', error)
            
            showToast("Error deleting document", "error")

        }finally{

            setIsDeleting(false)

        }
    
    }

    return { handleDeleteDocument, isDeleting }

}