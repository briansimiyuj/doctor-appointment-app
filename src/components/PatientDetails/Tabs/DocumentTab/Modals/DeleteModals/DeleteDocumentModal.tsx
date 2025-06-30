import { useDocumentsTab } from "../../../../../../context/DocumentsTabContext"
import { useDeleteDocument } from "../../../../../../hooks/useDeleteDocument"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"

const DeleteDocumentModal: React.FC = ()=>{

    const { closeDeleteModal, documentToDelete } = useDocumentsTab(),
          { handleDeleteDocument } = useDeleteDocument()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="Delete Document" onClose={closeDeleteModal}/>

                <p className="text-center mt-4">Are you sure you want to delete <strong>{documentToDelete?.name}</strong></p>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3  mt-6">

                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 text-xl font-bold rounded-md transition-all duration-300 mr-2"
                        onClick={closeDeleteModal}
                    >Cancel</button>

                    <button
                        className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 text-xl font-bold rounded-md transition-all duration-300 mr-2"
                        onClick={handleDeleteDocument}
                    >Delete</button>

                </div>

            </div>

        </div>

    )

}

export default DeleteDocumentModal