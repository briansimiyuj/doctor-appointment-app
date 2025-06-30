import { useDocumentsTab } from "../../../../../../context/DocumentsTabContext"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"

const DeleteDocumentModal: React.FC = ()=>{

    const { closeDeleteModal } = useDocumentsTab()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="Delete Document" onClose={closeDeleteModal}/>

            </div>

        </div>

    )

}

export default DeleteDocumentModal