import { useNotesTabContext } from "../../../../../../context/NotesTabContext"
import { useDeletePrescription } from "../../../../../../hooks/useDeletePrescription"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"

const DeletePrescriptionModal: React.FC = ()=>{

    const { closeModals, selectedPrescription } = useNotesTabContext(),
          { handleDeletePrescription } = useDeletePrescription()
    
        return(
    
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
    
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">
    
                   <ModalHeader title="Delete Prescription" onClose={closeModals}/>
     
                   <p className="text-center mt-4">Are you sure you want to permanently delete <span className="font-semibold">{selectedPrescription?.medicineName}</span> from the prescription list?</p>  

                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3  mt-6">

                        <button className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:hover:bg-gray-700 text-gray-700 py-2 px-4 rounded-md transition-all duration-300" onClick={closeModals}>Cancel</button>

                        <button
                            className="bg-red-500 text-white dark:text-white py-2 px-4 rounded-md hover:bg-red-600"
                            onClick={handleDeletePrescription}
                        >Confirm Delete</button>

                    </div>
    
                </div>
    
            </div>
    
        )

}

export default DeletePrescriptionModal