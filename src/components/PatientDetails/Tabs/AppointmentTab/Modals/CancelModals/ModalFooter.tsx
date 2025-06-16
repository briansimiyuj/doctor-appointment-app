import { useModalContext } from "../../../../../../context/ModalContext"

const ModalFooter: React.FC = ()=>{

    const { onClose, isValid, handleCancelAppointment } = useModalContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

            <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>

            <button
                className={`px-4 py-2 bg-red-600 text-white rounded-md duration-300 transition-all ${isValid ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'}`}
                onClick={handleCancelAppointment}
                disabled={!isValid}
            >Confirm Cancellation</button>

        </div>

    )

}

export default ModalFooter