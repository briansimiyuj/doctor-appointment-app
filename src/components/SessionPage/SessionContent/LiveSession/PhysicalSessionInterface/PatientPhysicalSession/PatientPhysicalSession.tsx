import { formatDisplayDate, formatDisplayTime } from "../../../../../../assets/utils/appointmentLogic"
import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import { FaUserMd, FaDoorClosed, FaClock, FaComments } from "react-icons/fa"

const PatientPhysicalSession: React.FC = () =>{

    const { appointment, isChatModalOpen, toggleChatModal, consultationType, roomNumber } = useManageAppointmentContext()
 
    if (consultationType !== "in-person") return null

    const doctorName = appointment?.doctor?.doctorInfo.name || "Dr. Smith",
          appointmentTime = appointment?.date ? formatDisplayTime(appointment.date) : "—",
          appointmentDate = appointment?.date ? formatDisplayDate(appointment.date) : "—"

    return(

        <div className="h-full flex flex-col p-4 md:p-6">
            
            <div className="mb-6">
                
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Consultation</h1>
                
                <p className="text-gray-600 dark:text-gray-400 mt-1">You're currently in consultation with your doctor</p>
            
            </div>

            <div className="flex-1 space-y-6">
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
                    
                    <div className="flex items-start space-x-4">
                        
                        <div className="flex-shrink-0">
                            
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                
                                <FaUserMd className="w-6 h-6 text-blue-500 dark:text-blue-400"/>
                            
                            </div>
                        
                        </div>
                        
                        <div className="flex-1">
                            
                            <h3 className="font-semibold text-gray-900 dark:text-white">{doctorName}</h3>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your consulting physician</p>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                        
                        <div className="flex items-center space-x-3">
                            
                            <FaDoorClosed className="w-5 h-5 text-green-500"/>
                            
                            <div>
                                
                                <p className="text-sm text-gray-500 dark:text-gray-400">Room</p>
                                
                                <p className="font-semibold text-gray-900 dark:text-white">{roomNumber || "Consultation Room"}</p>
                            
                            </div>
                        
                        </div>
                    
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                        
                        <div className="flex items-center space-x-3">
                            
                            <FaClock className="w-5 h-5 text-purple-500"/>
                            
                            <div>
                                
                                <p className="text-sm text-gray-500 dark:text-gray-400">Appointment</p>
                                
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    
                                    <div>{appointmentTime}</div>
                                    
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{appointmentDate}</div>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    
                    <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">During Your Consultation</h4>
                    
                    <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                        
                        <li>• Discuss your symptoms and concerns openly</li>
                        
                        <li>• Ask questions if something is unclear</li>
                        
                        <li>• Share your medical history if needed</li>
                        
                        <li>• Discuss treatment options and next steps</li>
                        
                    
                    </ul>
                
                </div>

            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                
                <button
                    onClick={toggleChatModal}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg transition-colors ${
                        isChatModalOpen 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                            : 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    
                    <FaComments className="w-5 h-5"/>
                    
                    <span>{isChatModalOpen ? 'Close Chat' : 'Message Doctor'}</span>
                
                </button>
            
            </div>

        </div>
    )

}

export default PatientPhysicalSession