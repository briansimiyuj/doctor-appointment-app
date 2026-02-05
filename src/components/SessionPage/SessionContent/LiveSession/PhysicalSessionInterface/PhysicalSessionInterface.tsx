import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"
import { useProfileContext } from "../../../../../context/ProfileContext"
import DoctorPhysicalSession from "./DoctorPhysicalSession/DoctorPhysicalSession"

const PhysicalSessionInterface: React.FC = ()=>{

    const { appointment } = useManageAppointmentContext(),
          { profile } = useProfileContext(),
          consultationType = appointment?.consultationType

    if(consultationType !== "in-person") return null

    if(profile?.type === "doctor"){

        return <DoctorPhysicalSession/>

    }

    return(

        <div className="h-full flex items-center justify-center p-4">

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Physical Session Interface</h1>

        </div>

    )

}

export default PhysicalSessionInterface