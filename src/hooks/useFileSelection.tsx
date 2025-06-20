import { DocumentType } from "../assets/types/DocumentType"
import { useDocumentsTab } from "../context/DocumentsTabContext"

export const useFileSelection = () =>{

    const { selectedFiles, setSelectedFiles } = useDocumentsTab()

    const validateFiles = (files: FileList | DocumentType[]): DocumentType[] =>{
    
        const validFiles: DocumentType[] = [],
             maxSize = 1024 * 1024 * 10,
             allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

        if(files instanceof FileList){

            Array.from(files).forEach(file =>{

                if(!allowedTypes.includes(file.type)){

                    console.error(`Invalid file type: ${file.type}`)

                    return

                }

                if(file.size > maxSize){ 

                    console.error(`File too large: ${file.name}`)
                    
                    return

                }
              
                validFiles.push(file as unknown as DocumentType)

            })

        }else{


            (files as DocumentType[]).forEach(file =>{

                if(!allowedTypes.includes(file.type)){
            
                    console.error(`Invalid file type: ${file.type}`)

                    return

                }

                if(file.size > maxSize){ 

                    console.error(`File too large: ${file.name}`)

                    return

                }
              
                validFiles.push(file)

            })

        }
        
        return validFiles
    
    }

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const files = e.target.files

        if(files && files.length > 0){

            const validFiles = validateFiles(files)

            setSelectedFiles([...selectedFiles, ...validFiles])

        } 

    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) =>{
    
       e.preventDefault()

       e.stopPropagation()

        const files = e.dataTransfer.files

        if(files && files.length > 0){

            const validFiles = validateFiles(files)

            setSelectedFiles([...selectedFiles, ...validFiles])

        }
    
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>{

        e.preventDefault()

        e.stopPropagation()

    }

    const handleBrowseClick = (fileInputRef: React.RefObject<HTMLInputElement>) =>{
    
        fileInputRef.current?.click()
    
    }

    const removeFile = (index: number) =>{
    
       const updatedFiles = selectedFiles.filter((_, i) => i !== index)

       setSelectedFiles(updatedFiles)

    
    }

    const clearFiles = () =>{
    
       setSelectedFiles([])
    
    }

    return{

        selectedFiles,
        handleFileSelection,
        handleDrop,
        handleDragOver,
        handleBrowseClick,
        removeFile,
        clearFiles

    }

} 