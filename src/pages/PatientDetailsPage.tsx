import PatientContactInfo from "../components/PatientDetails/PatientContactInfo"
import PatientHeader from "../components/PatientDetails/PatientHeader"
import TabsNavigation from "../components/PatientDetails/TabsNavigation"

const PatientDetailsPage: React.FC = ()=>{

    return(

        <div className="container mx-auto px-4 py-8">

            <PatientHeader/>

            <PatientContactInfo/>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">

                <TabsNavigation/>

            </div>

        </div>

    )

}

export default PatientDetailsPage