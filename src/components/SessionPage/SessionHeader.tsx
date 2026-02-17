import { useMemo } from "react"
import { useManageAppointmentContext } from "../../context/ManageAppointmentContext"
import { FiCreditCard } from "react-icons/fi"
import { BsFillDoorClosedFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const SessionHeader: React.FC = ()=>{

    const { appointment, sessionStatus, statusColorClass, formatTime, elapsedTime } = useManageAppointmentContext(),
          doctorName = appointment?.doctor?.doctorInfo.name,
          invoiceID = appointment?.invoiceID,
          appointmentID = appointment?._id,
          navigate = useNavigate()

    const handlePayNow = () =>{
    
        if(invoiceID) navigate(`/my-invoices/${appointmentID}/${invoiceID}`)
    
    }      

    const getStatusText = () =>{
    
       if(sessionStatus === "Loading...") return 'Loading session...'

       if(sessionStatus === "Paused") return "Session Paused"    

       if(sessionStatus === "Active") return "Session Live"

       if(sessionStatus === "Overtime") return "Session in Overtime"

        if(sessionStatus === "Completed") return "Session Completed"

        return "Waiting to Start Session"

    }

    const statusTextColor = useMemo(()=>{

        return statusColorClass.replace('bg-', 'text-')

    }, [statusColorClass])

    return(

        <header className="bg-white dark:bg-gray-800 shadow-md  border-b border-gray-200 dark:border-gray-700">
            
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center flex-col sm:flex-row space-y-3 sm:space-y-0">

                <div className="flex flex-col">

                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">Live Session</h1>

                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctorName ? `Doctor ${doctorName}` : 'Your Doctor'}</p>

                </div>

                <div className="hidden sm:flex flex-col items-center">

                    <span className={`font-semibold ${statusTextColor} text-lg`}>{getStatusText()}</span>

                    <span className="text-xs text-gray-500 dark:text-gray-400">

                        Elapsed: {formatTime(elapsedTime)}

                    </span>

                </div>

                <div className="flex items-center space-x-4 flex-col sm:flex-row space-y-2 sm:space-y-0">
                    
                    <button
                        onClick={() => handlePayNow()}
                        className="flex items-center text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white dark:text-white px-4 py-2 rounded-lg transition duration-150 shadow-md"
                        title="Complete Payment for the Session"
                    >

                        <FiCreditCard className="mr-2 h-4 w-4"/>

                        Pay Now

                    </button>

            
                    <button
                        className="flex items-center text-sm font-medium bg-red-600 hover:bg-red-700 text-white dark:text-white px-4 py-2 rounded-lg transition duration-150 shadow-md"
                        title="Exit the session and return to appointment details"
                        onClick={() => navigate(`/appointments/${appointment?._id}`)}
                    >
                        <BsFillDoorClosedFill className="mr-2 h-4 w-4"/>

                        Exit Session

                    </button>

                </div>

            </div>

        </header>

    )

}

export default SessionHeader