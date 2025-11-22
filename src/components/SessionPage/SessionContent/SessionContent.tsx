import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"
import SessionComplete from "./SessionComplete"

const SessionContent: React.FC = ()=>{

    const { sessionStatus, appointment } = useManageAppointmentContext()

    if(!appointment){

        return(

            <div className="bg-red-50 dark:bg-red-900 p-8 rounded-lg shadow-xl min-h-[400px] flex items-center justify-center">

                <p className="text-xl text-red-700 dark:text-red-300">Error: Appointment details not found.</p> 

            </div>

        )
    }

    if(sessionStatus === "Loading..."){

        return(

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl min-h-[400px] flex items-center justify-center">

                <p className="text-xl text-gray-600 dark:text-gray-300">loading session details...</p>

            </div>

        )
    
    }

    if(sessionStatus === "Completed"){

        return(

            <SessionComplete/>

        )

    }

}

export default SessionContent