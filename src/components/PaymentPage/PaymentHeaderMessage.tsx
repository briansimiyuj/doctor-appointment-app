import { FaUserMd } from "react-icons/fa"
import { BillingRecord } from "../../assets/types/BillingType"
import { useProfileContext } from "../../context/ProfileContext"

interface PaymentHeaderMessageProps{

    invoice: BillingRecord

}

const PaymentHeaderMessage: React.FC<PaymentHeaderMessageProps> = ({ invoice })=>{

    const { profile } = useProfileContext()

    const getUserMessage = () =>{
    
        if(profile?.type === "patient"){
        
            return(
            
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">

                    <p className="text-blue-700 dark:text-blue-300 text-sm flex items-center gap-2">

                        <FaUserMd className="w-4 h-4"/>

                        <span>Your invoice from Dr. {invoice.doctorName}</span>

                    </p>

                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">

                        {invoice.status === "pending" && "Please complete payment to finalize your consultation."}

                        {invoice.status === "paid" && "Thank you for your payment. A receipt has been sent to your email."}

                        {invoice.status === "cancelled" && "This invoice has been cancelled. Please contact support for assistance."}

                    </p>

                </div>
            
            )
        
        }

        if(profile?.type === "doctor"){
        
            return(
            
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">

                    <p className="text-purple-700 dark:text-purple-300 text-sm flex items-center gap-2">

                        <FaUserMd className="w-4 h-4"/>

                        <span>Invoice for patient {invoice.patientName}</span>

                    </p>

                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">

                        {invoice.status === "pending" && "Patient has been notified to complete payment."}

                        {invoice.status === "paid" && "Payment has been processed successfully."}

                        {invoice.status === "cancelled" && "This invoice has been voided."}

                    </p>

                </div>
            
            )
        
        }

        return null
    
    }

    return getUserMessage()

}

export default PaymentHeaderMessage