import { useManageAppointmentContext } from "../../../../context/ManageAppointmentContext"
import VideoInterface from "./VideoInterface/VideoInterface"

const LiveSession: React.FC = ()=>{

    const { appointment } = useManageAppointmentContext(),
          isOnline = appointment?.consultationType === "online"


    return(

        <div className="bg-gray-50 dark:bg-gray-900 h-full min-h-[600px] rounded-lg shadow-xl overflow-hidden">

            <div className="flex h-full">

                {

                    isOnline && <VideoInterface/>

                }

            </div>

        </div>

    )

}

export default LiveSession