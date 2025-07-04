import { useNotesTabContext } from "../../../../../context/NotesTabContext"
import { useEditGeneralNotes } from "../../../../../hooks/useEditGeneralNotes"

const EditModalFooter: React.FC = ()=>{

    const { closeModals } = useNotesTabContext(),
          { canUpdate, handleUpdate } = useEditGeneralNotes()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={closeModals}
            >Back</button>

            <button 
                type="submit" 
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 ${canUpdate ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!canUpdate}
                onClick={handleUpdate}
            >Edit Note</button>

        </div>

    )

}

export default EditModalFooter