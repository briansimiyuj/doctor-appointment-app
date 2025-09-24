import { toast, ToastOptions } from "react-toastify"

type ToastType = "success" | "error" | "info" | "warning" | "default"

export const useToast = () =>{

    const showToast = (message: string, type: ToastType = "default", options?: ToastOptions) =>{
    
        switch(type){

            case "success":
                toast.success(message, options) 
            break

            case "error":
                toast.error(message, options)
            break

            case "info":
                toast.info(message, options)
            break
            
            case "warning":
                toast.warn(message, options)
            break

            default:
                toast(message, options)
            break

        }
    
    }

    return { showToast }

}
