import { FaArrowLeft, FaDownload, FaEnvelope, FaPrint } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { BillingRecord } from "../../assets/types/BillingType"
import { useExportInvoice } from "../../hooks/useExportInvoice"

interface PaymentActionsProps{

    invoice: BillingRecord

}

const PaymentActions: React.FC<PaymentActionsProps> = ({ invoice })=>{

    const { handleExportInvoice } = useExportInvoice(),
          appointmentID = invoice.appointmentID,
          navigate = useNavigate()

    const handlePrint = () => window.print()

    const handleDownload = () => handleExportInvoice(invoice)

    const handleEmail = () => console.log("Email receipt to:", invoice.patientEmail)

    const handleBack = () => navigate(`/manage-appointment/${appointmentID}`)

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Actions</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                <button
                    onClick={handlePrint}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >

                    <FaPrint className="w-5 h-5 text-blue-600 dark:text-blue-400"/>

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Print</span>

                </button>

                <button
                    onClick={handleDownload}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >

                    <FaDownload className="w-5 h-5 text-green-600 dark:text-green-400"/>

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Download</span>

                </button>

                <button
                    onClick={handleEmail}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >

                    <FaEnvelope className="w-5 h-5 text-purple-600 dark:text-purple-400"/>

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>

                </button>

                <button
                    onClick={handleBack}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >

                    <FaArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400"/>

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Back</span>

                </button>

            </div>

            {

                invoice.patientEmail && (

                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">

                        Receipt will be sent to: {invoice.patientEmail}

                    </p>

                )

            }

        </div>

    )

}

export default PaymentActions