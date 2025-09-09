import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import ViewPrescriptionModal from "../../../PatientDetails/Tabs/PrescriptionTab/Modals/ViewPrescription/ViewPrescriptionModal"
import PrescriptionList from "../../../PatientDetails/Tabs/PrescriptionTab/PrescriptionList"
import PrescriptionTabHeader from "../../../PatientDetails/Tabs/PrescriptionTab/PrescriptionTabHeader"

const PrescriptionTab: React.FC = ()=>{

    const { prescriptions } = usePatientDetails(),
          { showViewPrescriptionModal } = useNotesTabContext()

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

            { showViewPrescriptionModal && <ViewPrescriptionModal/> }
        
        </>

    )

}

export default PrescriptionTab