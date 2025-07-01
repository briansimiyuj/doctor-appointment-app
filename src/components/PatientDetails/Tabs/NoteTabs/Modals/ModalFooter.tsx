import { useNotesTabContext } from "../../../../../context/NotesTabContext"

const ModalFooter: React.FC = ()=>{

    const { closeModals, title, content } = useNotesTabContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={closeModals}
            >Back</button>

            <button 
                type="submit" 
                disabled={!title && !content}
                className={`bg-primary-btn text-secondary-bg py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto ${title && content ? "hover:bg-blue-600" : "cursor-not-allowed opacity-50"}`}
            >Save Note</button>

        </div>

    )

}

export default ModalFooter