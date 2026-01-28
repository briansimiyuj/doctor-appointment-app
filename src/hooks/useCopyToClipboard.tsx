import { useToast } from "./useToast"

export const useCopyToClipboard = () =>{

    const { showToast } = useToast()

    const copy = async(text: string): Promise<boolean> =>{
    
        if(!text){
        
           showToast("No text to copy", "error")

           return false
        
        }

        try{
        
            if(navigator.clipboard && window.isSecureContext){
            
                await navigator.clipboard.writeText(text)

                showToast("Copied to clipboard", "success") 

                return true
            
            }else{

                const textArea = document.createElement("textarea")

                textArea.value = text

                document.body.appendChild(textArea)

                textArea.select()

                document.body.removeChild(textArea)
                
                showToast("Copied to clipboard", "success")

                return true
            }
        
        }catch(error){
        
           console.error('Failed to copy text: ', error)

           showToast("Failed to copy text", "error")

           return false
        
        }
    
    }

    return { copy }

}