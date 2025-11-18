import { FaUserSlash } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const NoShowControl: React.FC = () =>{
    
    const { loading, isSessionActive, noShowReason, setNoShowReason, markNoShow } = useManageAppointmentContext()

    return(

        <div className="pt-4 border-t border-gray-100">

            <input
                type="text"
                placeholder="Optional No-Show Reason"
                className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm"
                disabled={loading || isSessionActive}
                value={noShowReason}
                onChange={e => setNoShowReason(e.target.value)}
            />

            <button
                className="flex items-center justify-center w-full px-4 py-2 bg-red-700 text-white dark:text-white font-semibold rounded-lg hover:bg-red-800 transition disabled:bg-gray-400"
                disabled={loading || isSessionActive}
                onClick={() => markNoShow(noShowReason)}
            >

                <FaUserSlash className="mr-2"/> Mark as No-Show

            </button>

            {

                isSessionActive &&(
                    
                    <p className="text-xs text-red-500 mt-2 text-center">End session before marking as No-Show.</p>

                )

            }

        </div>
    
    )

}

export default NoShowControl