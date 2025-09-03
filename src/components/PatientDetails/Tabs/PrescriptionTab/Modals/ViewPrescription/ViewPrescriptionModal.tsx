import { useNotesTabContext } from "../../../../../../context/NotesTabContext"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"

const ViewPrescriptionModal: React.FC = ()=>{

    const { closeModals } = useNotesTabContext()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

               <ModalHeader title="View Prescription" onClose={closeModals}/>

               <ModalBody/>

            </div>

        </div>

    )

}

export default ViewPrescriptionModal