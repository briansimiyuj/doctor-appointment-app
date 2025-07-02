import { useNotesTabContext } from "../../../../../context/NotesTabContext"
import { useAddGeneralNotes } from "../../../../../hooks/useAddGeneralNotes"

const ModalFooter: React.FC = ()=>{

    const { closeModals } = useNotesTabContext(),
          { canSave, handleAddNote } = useAddGeneralNotes()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={closeModals}
            >Back</button>

            <button 
                type="submit" 
                disabled={!canSave}
                className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto ${canSave ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"}`}
                onClick={handleAddNote}
            >Save Note</button>

        </div>

    )

}

export default ModalFooter