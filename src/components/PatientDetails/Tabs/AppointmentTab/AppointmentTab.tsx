import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import Appointment from "./Appointment"
import AppointmentTabHeader from "./AppointmentTabHeader"

const AppointmentTab: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails()

    return(

        <div className="p-4">

            <AppointmentTabHeader/>

              {/* // FIXME: add a state to show a message when there are no appointments */}

            {

                patientAppointments &&(

                    <Appointment/>

                )

            }

        </div>

    )

}

export default AppointmentTab
