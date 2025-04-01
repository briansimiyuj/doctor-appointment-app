import { usePatientDetails } from "../context/PatientDetailsContext"

const PatientDetailsPage: React.FC = ()=>{

    const { patientDetails } = usePatientDetails()

    console.log(patientDetails)

    return(

        <h1>{patientDetails?.patientInfo?.name}</h1>

    )

}

export default PatientDetailsPage