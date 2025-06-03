import { BiCheck } from "react-icons/bi"
import { useCompleteAppointment } from "../../../hooks/useCompleteAppointment"

const StatusManagement: React.FC= () =>{     
    
    const completeAppointment = useCompleteAppointment(),
          handleMarkAsCompleted = completeAppointment?.handleMarkAsCompleted

    return(

        <div className="bg-gray-50 rounded-lg p-4">

            <h3 className="text-lg font-semibold mb-4 text-gray-800">Status Management</h3>
            
            <button
                onClick={handleMarkAsCompleted}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            
                <span className="flex items-center justify-center gap-2">

                    <BiCheck className="w-5 h-5"/>

                    Mark as Completed

                </span>
            
            </button>

        </div>

    )

}

export default StatusManagement