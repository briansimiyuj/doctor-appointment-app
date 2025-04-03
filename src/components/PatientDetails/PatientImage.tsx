import { usePatientDetails } from "../../context/PatientDetailsContext"

const PatientImage: React.FC = ()=>{

    const { patientDetails } = usePatientDetails(),
          patient = patientDetails?.patientInfo

    return(

        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">

            <img 
                src={patient?.image} 
                alt={`${patient?.image}'s image`}
                className="w-full h-full object-cover"
            />

        </div>

    )

}

export default PatientImage