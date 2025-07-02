import { useNotesTabContext } from "../../../../../../context/NotesTabContext"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"

const ViewNotesModal: React.FC = ()=>{

    const { closeModals } = useNotesTabContext()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="View Note" onClose={closeModals}/>

            </div>

        </div>
                

    )

}

export default ViewNotesModal