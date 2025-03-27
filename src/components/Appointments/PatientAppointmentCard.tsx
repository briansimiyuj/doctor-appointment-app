import { AppointedPatientType } from "../../assets/types/AppointedPatientType"
import AppointmentPhoto from "./AppointmentPhoto"
import PatientInfo from "./PatientInfo"

type PatientAppointmentCardProps ={

    patient: AppointedPatientType

}

const PatientAppointmentCard: React.FC<PatientAppointmentCardProps> = ({ patient })=>{

    return(

        <div className="grid grid-cols-1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5">

                <AppointmentPhoto patients={patient}/>

                <PatientInfo patients={patient}/>

            </div>

            
        </div>

    )

}

export default PatientAppointmentCard