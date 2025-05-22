import { useScheduleAppointmentContext } from "../../../context/ScheduleAppointmentContext"

const ModalFooter: React.FC = ()=>{

    const { onClose, isValid, handleScheduleConfirm } = useScheduleAppointmentContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>

            <button
                className={`bg-primary-bg hover:bg-primary-bg-dark text-white py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto ${isValid ? "" : "opacity-50 cursor-not-allowed"}`}
                onClick={handleScheduleConfirm}
                disabled={!isValid}
            >Schedule Appointment</button>

        </div>

    )

}

export default ModalFooter