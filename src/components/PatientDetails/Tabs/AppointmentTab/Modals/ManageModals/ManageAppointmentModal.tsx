import ModalHeader from "../ModalHeader"
import ModalBody from "./ModalBody"

interface ManageAppointmentModalProps{

    onClose: () => void

}

const ManageAppointmentModal: React.FC<ManageAppointmentModalProps> = ({ onClose }) =>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

                <ModalHeader title="Manage Appointment" onClose={onClose}/>

                <ModalBody onClose={onClose}/>

            </div>
            
        </div>

    )

}

export default ManageAppointmentModal