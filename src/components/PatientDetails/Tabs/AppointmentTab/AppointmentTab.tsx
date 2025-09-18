import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import Appointment from "./Appointment"
import AppointmentTabHeader from "./AppointmentTabHeader"

const AppointmentTab: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails()

    if(!patientAppointments) return null

    return(

        <div className="p-4">

            <AppointmentTabHeader/>

            {

                patientAppointments &&(

                    <Appointment/>

                )

            }

        </div>

    )

}

export default AppointmentTab
