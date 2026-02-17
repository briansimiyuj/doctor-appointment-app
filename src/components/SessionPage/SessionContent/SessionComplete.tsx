import { FaCheckCircle, FaHistory, FaMoneyBillWave } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"
import { useNavigate } from "react-router-dom"

const SessionComplete: React.FC = ()=>{

    const { appointment, formatTime, elapsedTime } = useManageAppointmentContext(),
            needsPayment = appointment?.paymentStatus !== "paid",
            totalDurationFormatted = formatTime(elapsedTime), 
            navigate = useNavigate(),
            invoiceID = appointment?.invoiceID,
            appointmentID = appointment?._id

    const handlePayNow = ()=>{

        if(invoiceID) navigate(`/my-invoices/${appointmentID}/${invoiceID}`)
        
    }

    return(

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl min-h-[400px] flex flex-col items-center justify-center text-center">

            <FaCheckCircle className="w-16 h-16 text-green-500 mb-6"/>

            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Session Completed Successfully</h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-lg">

                Thank you for attending your consultation with Doctor {appointment?.doctor?.doctorInfo.name || 'your Doctor'}.

            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">

                <div className="flex flex-col items-center">

                    <span className="text-xl font-bold text-gray-900 dark:text-gray-200">{totalDurationFormatted}</span>

                    <span className="text-sm text-gray-500 dark:text-gray-400">Total Duration</span>

                </div>

                <div className="flex flex-col items-center">

                    <span className={`text-xl font-bold ${needsPayment ? 'text-red-500' : 'text-green-500'}`}>

                        {needsPayment ? 'Pending' : 'Paid'}

                    </span>

                    <span className="text-sm text-gray-500 dark:text-gray-400">Payment Status</span>

                </div>

            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-sm">

                {

                    needsPayment &&(

                        <button
                            onClick={handlePayNow}
                            className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150"
                        >

                            <FaMoneyBillWave className="mr-2"/> Pay Outstanding Fee

                        </button>

                    )

                }

                <button
                    // onClick={handleViewHistory}
                    className={`flex-1 flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition duration-150 
                        ${needsPayment ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200' : 'bg-green-600 hover:bg-green-700 text-white dark:text-white shadow-md'}`}
                >

                    <FaHistory className="mr-2"/> 
                    View Appointment History
                </button>

            </div>


        </div>

    )

}

export default SessionComplete