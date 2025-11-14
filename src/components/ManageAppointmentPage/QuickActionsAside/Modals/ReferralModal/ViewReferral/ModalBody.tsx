import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import ClinicalReason from "./ClinicalReason"
import ReferralHeader from "./ReferralHeader"
import ReferredDoctor from "./ReferredDoctor"
import ReferringDoctor from "./ReferringDoctor"

const ModalBody: React.FC = ()=>{

    const { appointment, refferalData } = useManageAppointmentContext()

    if(!appointment) return null

    const formatDate = (dateString: string) =>{

        const date = new Date(dateString)

        return date.toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })

    }

    const getUrgencyColor = (urgency: string | null) =>{

        switch(urgency){

            case "Emergency": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            case "Urgent": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            case "Routine": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"

        }
    }

    return(

        <div className="space-y-6 mt-4">

            {
            
                refferalData &&(

                    <>

                        <ReferralHeader referralData={refferalData!} getUrgencyColor={getUrgencyColor} formatDate={formatDate}/>
                    
                        <ReferringDoctor referralData={refferalData!}/>

                        <ReferredDoctor referralData={refferalData!}/>

                        <ClinicalReason referralData={refferalData!}/>
                    
                    </>
                    
                )
            
            }

        </div>

    )

}

export default ModalBody