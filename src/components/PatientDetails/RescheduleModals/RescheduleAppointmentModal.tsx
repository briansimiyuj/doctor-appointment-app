import { RescheduleModalProvider } from "../../../context/RescheduleModalContext"
import ModalHeader from "../ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

interface RescheduleAppointmentModalProps{

    appointment: any
    onClose: () => void

}

const RescheduleAppointmentModal: React.FC<RescheduleAppointmentModalProps> = ({  appointment, onClose }) =>{

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 transition-all duration-300 ease-out">

                <ModalHeader title="Reschedule Appointment" onClose={onClose}/>

                <RescheduleModalProvider appointment={appointment} onClose={onClose}>

                    <ModalBody/>

                    <ModalFooter/>

                </RescheduleModalProvider>

            </div>

        </div>

    )

}

export default RescheduleAppointmentModal