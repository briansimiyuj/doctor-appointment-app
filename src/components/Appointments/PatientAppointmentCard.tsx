import { AppointedPatientType } from "../../assets/types/AppointedPatientType"
import { AppointmentType } from "../../assets/types/AppointmentType"
import AppointmentPhoto from "./AppointmentPhoto"
import PatientInfo from "./PatientInfo"

type PatientAppointmentCardProps ={

    patient: AppointedPatientType
    appointment: AppointmentType

}

const PatientAppointmentCard: React.FC<PatientAppointmentCardProps> = ({ patient, appointment })=>{

    return(

        <div className="grid grid-cols-1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5">

                <AppointmentPhoto patients={patient}/>

                <PatientInfo patients={patient} appointment={appointment}/>

            </div>

            
        </div>

    )

}

export default PatientAppointmentCard