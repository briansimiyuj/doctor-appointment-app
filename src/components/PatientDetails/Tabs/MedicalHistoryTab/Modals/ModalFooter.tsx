import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"

const ModalFooter: React.FC = () =>{

  const { mode, closeModal, editingValue, targetSection } = useMedicalHistoryTabContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto"
            >Back</button>

            {
        
                mode === "add" &&(

                    <button
                        type="button"
                        className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-blue-600 ${!editingValue ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={editingValue ? false : true}
                    >Add {targetSection ?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</button>

                )
                
            }

            {
        
                mode === "edit" &&(

                    <button
                        type="button"
                        className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-blue-600 ${!editingValue ? "opacity-50 cursor-not-allowed" : ""}`}
                    >Edit {targetSection ?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</button>

                )
            
            }

            {
        
                mode === "delete" &&(

                    <button
                        type="button"
                        className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-red-600"
                    >Delete {targetSection ?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</button>

                )
                
            }

        </div>

    )

}

export default ModalFooter