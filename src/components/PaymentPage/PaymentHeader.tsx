import { FaCheckCircle, FaClock, FaReceipt, FaTimesCircle } from "react-icons/fa"
import { BillingRecord } from "../../assets/types/BillingType"

interface PaymentHeaderProps{

    invoice: BillingRecord

}

const PaymentHeader: React.FC<PaymentHeaderProps> = ({ invoice })=>{

    const createdAt = invoice.createdAt instanceof Date ? invoice.createdAt : new Date((invoice.createdAt as { seconds: number }).seconds * 1000)

    const getStatusConfig = (status: string) =>{
    
        switch(status){

            case "pending":

                return{

                    icon: FaClock,
                    color: "text-yellow-600 dark:text-yellow-400",
                    bg: "bg-yellow-100 dark:bg-yellow-900/30",
                    border: "border-yellow-200 dark:border-yellow-800",
                    text: "Pending Payment"

                }

            case "paid":

                return{

                    icon: FaCheckCircle,
                    color: "text-green-600 dark:text-green-400",
                    bg: "bg-green-100 dark:bg-green-900/30",
                    border: "border-green-200 dark:border-green-800",
                    text: "Payment Completed"

                }

            case "cancelled":

                return{

                    icon: FaTimesCircle,
                    color: "text-red-600 dark:text-red-400",
                    bg: "bg-red-100 dark:bg-red-900/30",
                    border: "border-red-200 dark:border-red-800",
                    text: "Bill Cancelled"
                
                }

            default:

                return{

                    icon: FaReceipt,
                    color: "text-gray-600 dark:text-gray-400",
                    bg: "bg-gray-100 dark:bg-gray-800",
                    border: "border-gray-200 dark:border-gray-700",
                    text: status
                }

        }
    
    }

    const status = getStatusConfig(invoice.status),
          StatusIcon = status.icon

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="w-full">

                    <div className="flex items-center justify-around gap-2 mb-2 flex-wrap">

                        <div className="flex gap-2 items-center">

                            <FaReceipt className="text-blue-600 dark:text-blue-400 text-xl"/>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Invoice</h1>

                        </div>


                        <p className="text-gray-600 dark:text-gray-400 mt-1">#{invoice._id.slice(0, 6)}</p>

                         <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Issued on {createdAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                        
                    </div>


                    <div className={`flex items-center mt-5 flex-col sm:flex-row gap-3 px-4 py-3 rounded-lg ${status.bg} ${status.border} border`}>
                    
                        <StatusIcon className={`w-10 h-10 ${status.color}`}/>

                        <p className={`font-semibold text-xl ${status.color}`}>{status.text}</p>

                        <p className="text-sm sm:text-xl text-center text-gray-500 dark:text-gray-400 mt-0.5">

                            {invoice.status === "pending" && 'Waiting for payment confirmation'}

                            {invoice.status === "paid" && 'Payment has been received'}

                            {invoice.status === "cancelled" && 'Payment has been cancelled'}

                        </p>
                    
                    </div>

                </div>

            </div>
            

        </div>

    )

}

export default PaymentHeader