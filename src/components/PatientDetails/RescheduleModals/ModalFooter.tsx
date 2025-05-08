import { useRescheduleModal } from "../../../context/RescheduleModalContext"

const ModalFooter: React.FC = ()=>{

    const { onClose, isValid, handleRescheduleConfirm } = useRescheduleModal()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">


            <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>

            <button
                className={`px-4 py-2 bg-primary-bg text-white rounded-md duration-300 transition-all ${isValid ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'}`}
                onClick={handleRescheduleConfirm}
                disabled={!isValid}
            >Confirm Reschedule</button>

        </div>

    )

}

export default ModalFooter