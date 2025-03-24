import { AppointedPatientType } from "../../assets/types/AppointedPatientType"

type PatientAppointmentCardProps ={

    patient: AppointedPatientType

}

const PatientAppointmentCard: React.FC<PatientAppointmentCardProps> = ({ patient })=>{

    return(

        <h1>{patient.patientInfo.name}</h1>

    )

}

export default PatientAppointmentCard