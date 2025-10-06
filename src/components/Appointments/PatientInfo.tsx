import { AppointedPatientType } from "../../assets/types/AppointedPatientType"
import { AppointmentType } from "../../assets/types/AppointmentType"

type PatientInfo ={

    patients: AppointedPatientType
    appointment: AppointmentType

}

const PatientInfo: React.FC<PatientInfo> = ({ patients, appointment })=>{

    const patient = patients.patientInfo

    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{patient?.name}</h2>

            <p>{patient?.gender}, {patient?.age} years old</p>

            <p>{patient?.contact?.phone}</p>

            <p>{new Date(appointment?.date).toLocaleDateString()} at</p>

            <p>{appointment?.time}</p>


        </div>

    )

}

export default PatientInfo