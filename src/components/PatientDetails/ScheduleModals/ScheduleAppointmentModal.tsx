import ModalHeader from "../ModalHeader"

interface ScheduleAppointmentModalProps{

    onClose: () => void

}

const ScheduleAppointmentModal: React.FC<ScheduleAppointmentModalProps> = ({ onClose }) =>{

    return(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden">

                <ModalHeader title="Schedule Appointment" onClose={onClose}/>

            </div>

        </div>

    )

}

export default ScheduleAppointmentModal