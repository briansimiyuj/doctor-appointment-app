import { useAddPrescription } from "../../../../../hooks/useAddPrescription"

interface ModalFooterProps{

    title: string
    onClose: () => void 
    
}

const ModalFooter: React.FC<ModalFooterProps> = ({ title, onClose })=>{

    const { canSave, handleAddPrescription } = useAddPrescription()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>

            <button
                className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto ${canSave ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"}`}
                onClick={handleAddPrescription}
            >{title}</button>

        </div>

    )

}

export default ModalFooter