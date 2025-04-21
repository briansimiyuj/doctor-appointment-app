import { ModalProvider } from "../../../context/ModalContext"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

interface CancelAppointmentModalProps{

    appointment: any, 
    onClose: () => void

}

const CancelAppointmentModal: React.FC<CancelAppointmentModalProps> = ({ appointment, onClose })=>{

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg">

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Cancel Appointment</h2>

                <ModalProvider appointment={appointment} onClose={onClose} onReject={undefined}>

                    <ModalBody/>

                    <ModalFooter/>

                </ModalProvider>

            </div>

        </div>

    )

}

export default CancelAppointmentModal