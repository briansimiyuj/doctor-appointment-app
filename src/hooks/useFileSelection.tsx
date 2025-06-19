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

        console.log('Files selected')
        
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) =>{
    
       e.preventDefault()

       e.stopPropagation()

        const files = e.dataTransfer.files

        if(files && files.length > 0){

            const validFiles = validateFiles(files)

            setSelectedFiles([...selectedFiles, ...validFiles])

        }

       console.log('files dropped')
    
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>{

        e.preventDefault()

        e.stopPropagation()

        console.log('files dragged over')

    }

    const handleBrowseClick = (fileInputRef: React.RefObject<HTMLInputElement>) =>{
    
        fileInputRef.current?.click()

        console.log('File explorer opened') 
    
    }

    const removeFile = (index: number) =>{
    
       const updatedFiles = selectedFiles.filter((_, i) => i !== index)

       setSelectedFiles(updatedFiles)

       console.log('File removed')
    
    }

    const clearFiles = () =>{
    
       setSelectedFiles([])

       console.log('Files cleared')
    
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