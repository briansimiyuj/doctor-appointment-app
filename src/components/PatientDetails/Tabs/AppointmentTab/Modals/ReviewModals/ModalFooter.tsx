import { useDoctorReviewsContext } from "../../../../../../context/DoctorReviewsContext"

interface ModalFooterProps{
    
    onClose: () => void
    
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose }) => {

    const { ratings, isSubmitting } = useDoctorReviewsContext()

    const readyToSubmit = ratings > 0,
          submitButtonText = isSubmitting ? 'Submitting Review...' : 'Submit Review'

    return(

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-gray-200 w-full">

            <button
                type="submit"
                disabled={!readyToSubmit || isSubmitting}
                className={`${readyToSubmit && !isSubmitting ? 'bg-primary-bg text-secondary-bg hover:bg-opacity-90 cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'} px-10 py-3 rounded-lg font-medium transition-colors duration-300 w-full max-w-md mt-4`}
            >{submitButtonText}</button>

            <button
                type="button"
                disabled={isSubmitting}
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 py-3 px-10 rounded-lg w-full font-medium max-w-md mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={onClose}
            >Cancel</button>

        </div>

    )

}

export default ModalFooter