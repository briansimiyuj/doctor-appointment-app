import { useNotesTabContext } from "../../../../../context/NotesTabContext"
import ModalHeader from "../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const AddNotesModal: React.FC = ()=>{

    const { closeModals } = useNotesTabContext()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader title="Add Notes" onClose={closeModals}/>

                <ModalBody/>

                <ModalFooter/>

            </div>

        </div>

    )

}

export default AddNotesModal