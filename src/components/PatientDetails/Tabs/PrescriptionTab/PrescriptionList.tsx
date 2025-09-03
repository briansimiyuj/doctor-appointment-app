import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import { PrescriptionContextProvider } from "../../../../context/PrescriptionContext"
import PrescriptionItem from "./PrescriptionItem"

const PrescriptionList: React.FC = ()=>{

    const { prescriptions } = usePatientDetails()

    return(

        <ul className="space-y-3">

            {

                prescriptions.map(prescription =>(

                    <PrescriptionContextProvider>

                       <PrescriptionItem key={prescription._id} prescription={prescription}/>

                    </PrescriptionContextProvider>

                ))

            }

        </ul>

    )

}

export default PrescriptionList