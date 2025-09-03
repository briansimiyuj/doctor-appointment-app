import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import AddPrescriptionModal from "./Modals/AddPrescriptionModal"
import PrescriptionList from "./PrescriptionList"
import PrescriptionTabHeader from "./PrescriptionTabHeader"

const PrescriptionTab: React.FC = ()=>{

    const { prescriptions } = usePatientDetails(),
          { showAddPrescriptionModal } = useNotesTabContext()

    console.log(prescriptions)

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

            { showAddPrescriptionModal && <AddPrescriptionModal/> }

        </>

    )

}

export default PrescriptionTab