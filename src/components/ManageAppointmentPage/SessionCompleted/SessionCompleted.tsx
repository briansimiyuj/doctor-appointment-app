import { FaCheckCircle, FaClipboardCheck, FaFileMedical, FaHistory, FaUserCheck, FaMoneyBillWave } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const SessionCompleted: React.FC = () =>{

    const { appointment, elapsedTime, formatTime } = useManageAppointmentContext(),
          patientName = appointment?.patient?.patientInfo?.name || "Patient",
          patientProfileImage = appointment?.patient?.patientInfo?.profileImage?.content,
          sessionDuration = formatTime(elapsedTime),
          completedAt = new Date().toLocaleTimeString([], { 
            hour: "2-digit", 
            minute: "2-digit" 
          })

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 border border-gray-200 dark:border-gray-700">

            <div className="text-center mb-6">

                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">

                    <FaCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400"/>

                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">

                    Session Completed Successfully

                </h2>

                <p className="text-gray-600 dark:text-gray-400">

                    Consultation with {patientName} has been completed at {completedAt}

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">

                    <div className="w-12 h-12 m-auto mb-2 md:w-14 md:h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">

                        {

                            patientProfileImage ?(

                                <img 
                                    src={patientProfileImage} 
                                    alt="Patient" 
                                    className="w-full h-full object-cover"
                                />

                            ):(

                                <FaUserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400"/>

                            )

                        }

                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>

                    <p className="font-semibold text-gray-900 dark:text-white">{patientName}</p>

                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">

                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-2">

                        <FaHistory className="w-6 h-6 text-purple-600 dark:text-purple-400"/>

                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">Session Duration</p>

                    <p className="font-semibold text-gray-900 dark:text-white">{sessionDuration}</p>

                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">

                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">

                        <FaClipboardCheck className="w-6 h-6 text-green-600 dark:text-green-400"/>

                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>

                    <p className="font-semibold text-green-600 dark:text-green-400">Completed</p>

                </div>

            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg p-6">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">

                    <FaFileMedical className="mr-2 text-blue-600 dark:text-blue-400"/>

                    Next Steps

                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4">

                    Use the sidebar to complete any remaining documentation for this session:

                </p>

                <ul className="space-y-2 text-gray-600 dark:text-gray-400">

                    <li className="flex items-start">

                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>

                        <span>Add clinical notes and session summary</span>

                    </li>

                    <li className="flex items-start">

                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>

                        <span>Create prescriptions if medication was prescribed</span>

                    </li>

                    <li className="flex items-start">

                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>

                        <span>Order lab tests or generate referrals if needed</span>

                    </li>

                    <li className="flex items-start">

                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>

                        <span>Review and submit billing information</span>

                    </li>

                </ul>

            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">

                    Complete the final billing process for this consultation session.

                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <button
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition flex items-center justify-center"
                    >

                        <span>Return to Patient Details</span>

                    </button>

                    <button
                        onClick={() =>{
                            // TODO: Implement billing submission logic
                            console.log("Review and submit billing information")
                            // This could open a billing modal or navigate to billing page
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white dark:text-white rounded-lg font-medium transition flex items-center justify-center"
                    >

                        <FaMoneyBillWave className="mr-2"/>

                        <span>Review & Submit Billing</span>

                    </button>

                </div>

            </div>

        </div>

    )

}

export default SessionCompleted