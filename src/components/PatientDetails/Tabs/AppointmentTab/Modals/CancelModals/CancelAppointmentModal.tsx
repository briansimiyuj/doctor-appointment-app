import { TimeSlotType } from "../../../../../../assets/types/TimeSlotType"
import { ModalProvider } from "../../../../../../context/ModalContext"
import ModalHeader from "../ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

interface CancelAppointmentModalProps{

    appointment: any, 
    onClose: () => void
    cancelAppointment: (slot: TimeSlotType) => void

}

const CancelAppointmentModal: React.FC<CancelAppointmentModalProps> = ({ appointment, onClose })=>{

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg overflow-y-auto max-h-[90vh]">

                <ModalHeader title="Cancel Appointment" onClose={onClose}/>

                <ModalProvider appointment={appointment} onClose={onClose} onReject={undefined}>

                    <ModalBody/>

                    <ModalFooter/>

                </ModalProvider>

            </div>

        </div>

    )

}

export default CancelAppointmentModal