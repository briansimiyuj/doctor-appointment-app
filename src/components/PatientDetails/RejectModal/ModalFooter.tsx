import { useModalContext } from "../../../context/ModalContext"

const ModalFooter: React.FC = ()=>{

    const { onClose, isValid, handleRejectAppointment } = useModalContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>


            <button
                className={`bg-red-600 text-white py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto ${isValid ? "bg-red-700" : "cursor-not-allowed opacity-50"}`}
                onClick={handleRejectAppointment}
            >Reject Appointment</button>

        </div>

    )

}

export default ModalFooter