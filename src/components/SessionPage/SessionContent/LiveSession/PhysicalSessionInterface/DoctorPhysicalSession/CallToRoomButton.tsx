import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import { FaBullhorn, FaUserCheck } from "react-icons/fa"

const CallToRoomButton: React.FC = () => {

    const { 
        checkInStatus, 
        waitingRoomStatus, 
        roomNumber, 
        callPatientToRoom,
        consultationType 
    } = useManageAppointmentContext()

    // Only for in-person appointments
    if (consultationType !== "in-person") return null

    // Only show when patient is checked in but not yet with doctor
    if (checkInStatus !== 'in-waiting-room' && waitingRoomStatus !== 'waiting') return null

    // Don't show if no room is assigned
    if (!roomNumber) return null

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            
            <div className="flex items-center justify-between mb-4">
                
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    Patient Waiting
                </h3>
                
                <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
                    
                    <FaBullhorn className="w-5 h-5" />
                    
                    <span className="font-medium">Ready to Call</span>
                
                </div>
            
            </div>

            <div className="space-y-4">
                
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    
                    <div className="flex items-start space-x-3">
                        
                        <div className="flex-shrink-0">
                            
                            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                                
                                <span className="text-yellow-600 dark:text-yellow-400 text-lg">⏳</span>
                            
                            </div>
                        
                        </div>
                        
                        <div>
                            
                            <p className="font-medium text-yellow-800 dark:text-yellow-300">
                                Patient is in Waiting Room
                            </p>
                            
                            <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                                Patient is waiting to be called to {roomNumber ? `Room ${roomNumber}` : 'the consultation room'}
                            </p>
                        
                        </div>
                    
                    </div>
                
                </div>

                <button
                    onClick={callPatientToRoom}
                    className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white dark:text-white font-semibold rounded-lg transition-colors"
                >
                    
                    <FaUserCheck className="w-5 h-5" />
                    
                    <div className="text-left">
                        
                        <div>Call Patient to Room</div>
                        
                        <div className="text-sm font-normal opacity-90">
                            {roomNumber ? `Room ${roomNumber}` : 'Consultation Room'}
                        </div>
                    
                    </div>
                
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    This will notify the patient to proceed to the consultation room
                </p>

            </div>

        </div>
    )

}

export default CallToRoomButton