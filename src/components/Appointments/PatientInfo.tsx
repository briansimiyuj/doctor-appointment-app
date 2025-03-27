import { AppointedPatientType } from "../../assets/types/AppointedPatientType"

type PatientInfo ={

    patients: AppointedPatientType

}

const PatientInfo: React.FC<PatientInfo> = ({ patients })=>{

    const patient = patients.patientInfo

    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{patient?.name}</h2>

            <p>{patient?.gender}, {patient?.age} years old</p>

            <p>{patient?.medicalHistory?.diseases}</p>

            <p>{patient?.contact?.phone}</p>

            <p>{patient?.appointment?.date} at</p>

            <p>{patient?.appointment?.time}</p>

        </div>

    )

}

export default PatientInfo