import PatientContactInfo from "../components/PatientDetails/PatientContactInfo"
import PatientHeader from "../components/PatientDetails/PatientHeader"

const PatientDetailsPage: React.FC = ()=>{

    return(

        <div className="container mx-auto px-4 py-8">

            <PatientHeader/>

            <PatientContactInfo/>

        </div>

    )

}

export default PatientDetailsPage