import { useContext } from "react"
import { ProfileContext } from "../../../../context/ProfileContext"

const ModalFooter: React.FC = ()=>{

    const profileContext = useContext(ProfileContext)

    if(!profileContext) return null

    const { readyToSubmit, setShowModal, isEditing, loading } = profileContext,
          saveButtonText = loading ? (isEditing ? 'Saving Changes...' : 'Adding Profile...') : (isEditing ? 'Save Changes' : 'Add Profile')

    return(

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200 w-full ">

            <button
                type="submit"
                className={`${readyToSubmit ? ' bg-primary-bg text-secondary-bg hover:bg-opacity-90 cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'} px-10 py-3 rounded-lg font-medium transition-colors duration-300 w-full max-w-md mt-4`}
            >{saveButtonText}</button>

            <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 py-3 px-10 rounded-lg w-full font-medium max-w-md mt-4"
                onClick={() => setShowModal(false)}
            >Cancel</button>

        </div>

    )

}

export default ModalFooter