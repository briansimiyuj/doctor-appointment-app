import { useContext } from "react"
import { useModalContext } from "../../../../../../context/ModalContext"
import { ProfileContext } from "../../../../../../context/ProfileContext"
import { AppointmentType } from "../../../../../../assets/types/AppointmentType"

interface ModalFooterProps{

    cancelAppointment: (appointmentID: string) => void
    appointment: AppointmentType

}

const ModalFooter: React.FC<ModalFooterProps> = ({ cancelAppointment, appointment })=>{

    const { onClose, isValid, handleCancelAppointment } = useModalContext(), 
          profileContext = useContext(ProfileContext)


    if(!profileContext) return null

    const { profile } = profileContext,
          cancelAction = profile?.type === "doctor" ? handleCancelAppointment : () => cancelAppointment(appointment._id)

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

            <button 
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:hover:bg-gray-700 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                onClick={onClose}
            >Back</button>

            <button
                className={`px-4 py-2 bg-red-600 text-white dark:text-white rounded-md duration-300 transition-all ${isValid ? 'hover:bg-red-700' : 'opacity-50 cursor-not-allowed'}`}
                onClick={cancelAction}
                disabled={!isValid}
            >Confirm Cancellation</button>

        </div>

    )

}

export default ModalFooter