import { useNotesTabContext } from "../../../../../context/NotesTabContext"
import { PrescriptionContextProvider } from "../../../../../context/PrescriptionContext"
import ModalHeader from "../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const AddPrescriptionModal: React.FC = ()=>{

    const { selectedPrescription, closeModals } = useNotesTabContext()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader
                    title={selectedPrescription ? "Edit Prescription" : "Add Prescription"}
                    onClose={closeModals}
                />

                <PrescriptionContextProvider>

                    <ModalBody/>

                    <ModalFooter title={selectedPrescription ? "Update Prescription" : "Add Prescription"} onClose={closeModals}/>

                </PrescriptionContextProvider>

            </div>

        </div>

    )

}

export default AddPrescriptionModal