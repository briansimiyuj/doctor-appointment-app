import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import PrescriptionList from "../../../PatientDetails/Tabs/PrescriptionTab/PrescriptionList"
import PrescriptionTabHeader from "../../../PatientDetails/Tabs/PrescriptionTab/PrescriptionTabHeader"

const PrescriptionTab: React.FC = ()=>{

    const { prescriptions } = usePatientDetails()

    return(

        <>
        
            <PrescriptionTabHeader/>

            {

                prescriptions && prescriptions.length > 0 ?(
                
                    <PrescriptionList/>

                ):(

                    <div className="text-center py-8">

                        <p className="text-gray-500">You have no prescription yet.</p>

                    </div>

                )

            }
        
        </>

    )

}

export default PrescriptionTab