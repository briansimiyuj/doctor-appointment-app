import { useNotesTabContext } from "../../../../../../context/NotesTabContext"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"

const DeleteNotesModal: React.FC = ()=>{

    const { closeModals, selectedNote } = useNotesTabContext()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">


            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="Delete Note" onClose={closeModals}/>

                <p className="text-center mt-4">Are you sure you want to permanently delete <span className="font-semibold">{selectedNote?.title}</span> note?</p>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3  mt-6">

                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300" onClick={closeModals}>Cancel</button>

                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Confirm Delete</button>

                </div>

            </div>

        </div>

    )

}

export default DeleteNotesModal