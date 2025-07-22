import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"
import { useMedicalHistoryActions } from "../../../../../hooks/useMedicalHistoryActions"

const ModalFooter: React.FC = () =>{

  const { mode, closeModal, editingValue, editingIndex, targetSection, originalValue } = useMedicalHistoryTabContext(),
        { addFunction, updateFunction, removeFunction } = useMedicalHistoryActions()


    const getTargetSectionName = () =>{
        
        switch (targetSection){
            
            case 'medicalConditions': return 'Medical Condition'
            case 'allergies': return 'Allergy'
            case 'medications': return 'Medication'
            case 'surgeries': return 'Surgery'
            default: return ''

        }
        
    }

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-500 text-gray-700 py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto"
            >Back</button>

            {
        
                mode === "add" &&(

                    <button
                        type="button"
                        className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-blue-600 ${!editingValue ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={editingValue ? false : true}
                        onClick={() =>{
                            if(targetSection) addFunction(targetSection, editingValue)}
                        } 
                    >Add {getTargetSectionName()}</button>

                )
                
            }

            {
        
                mode === "edit" &&(

                    <button
                        type="button"
                        className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-blue-600 ${editingValue === originalValue ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={editingValue === originalValue ? true : false}
                        onClick={() =>{
                            if(targetSection && editingIndex !== null) updateFunction(targetSection, editingIndex, editingValue)
                        }}
                    >Edit {getTargetSectionName()}</button>

                )
            
            }

            {
        
                mode === "delete" &&(

                    <button
                        type="button"
                        className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 w-full sm:w-auto hover:bg-red-600"
                        onClick={() =>{
                            if(targetSection && editingIndex !== null) removeFunction(targetSection, editingIndex)
                        }}
                    >Delete {getTargetSectionName()}</button>

                )
                
            }

        </div>

    )

}

export default ModalFooter