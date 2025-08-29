import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import PrescriptionList from "./PrescriptionList"
import PrescriptionTabHeader from "./PrescriptionTabHeader"

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

                        <p className="text-gray-500">No Prescription available for this patient</p>

                    </div>

                )

            }

        </>

    )

}

export default PrescriptionTab