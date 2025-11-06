import { FaPlus } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const ExtendSessionControls: React.FC = ()=>{

    const { isSessionActive, loading, minutesToExtend, setMinutesToExtend, extendSession } = useManageAppointmentContext(),
          buttonText = loading ? `Adding ${minutesToExtend} min...` : minutesToExtend ? `Add ${minutesToExtend} min` : 'Add min';

    return(

        <div className={`p-4 rounded-lg transition duration-300 ${isSessionActive ? 'bg-indigo-400 dark:bg-gray-800 border border-indigo-200' : 'bg-gray-100 dark:bg-gray-900'}`}>

            <h3 className="text-lg font-semibold text-black dark:text-white mb-2 flex items-center">

                <FaPlus className="mr-2"/> Extend Session
                
            </h3>

            <div className="flex space-x-2">

                <select
                    name="minutesToExtend"
                    className={`w-1/3 p-2 border bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 ${isSessionActive ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    disabled={!isSessionActive}
                    value={minutesToExtend}
                    onChange={e => setMinutesToExtend(Number(e.target.value))}
                >

                    <option value={5}>5 min</option>

                    <option value={10}>10 min</option>

                    <option value={15}>15 min</option>

                    <option value={30}>30 min</option>

                </select>

                <button
                    disabled={!isSessionActive || loading}
                    className={`flex-grow p-2 bg-indigo-600 text-white dark:text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400 ${isSessionActive ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={() => extendSession(minutesToExtend)}
                >{buttonText}</button>

            </div> 

        </div>

    )

}

export default ExtendSessionControls