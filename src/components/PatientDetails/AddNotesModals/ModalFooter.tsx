import { useAddNotes } from "../../../context/AddNotesContext"

interface ModalFooterProps{

    onClose: () => void

}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) =>{

    const { notes, isSubmitting } = useAddNotes()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer"
                onClick={onClose}
            >Cancel</button>

            <button
                className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={!notes.trim() || isSubmitting}
            >Save</button>
            
        </div>

    )

}

export default ModalFooter