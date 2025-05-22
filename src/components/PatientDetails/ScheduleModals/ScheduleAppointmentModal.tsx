import { AppointmentType } from "../../../assets/types/AppointmentType"
import { DatePickerProvider } from "../../../context/DatePickerContext"
import { DateTimeProvider } from "../../../context/DateTimeContext"
import { ScheduleAppointmentProvider } from "../../../context/ScheduleAppointmentContext"
import { ScheduleProvider } from "../../../context/ScheduleContext"
import ModalHeader from "../ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

interface ScheduleAppointmentModalProps{

    onClose: () => void
    appointment: AppointmentType

}

const ScheduleAppointmentModal: React.FC<ScheduleAppointmentModalProps> = ({ onClose,  appointment }) =>{

    return(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden">

                <ModalHeader title="Schedule Appointment" onClose={onClose}/>

                <DateTimeProvider>

                    <DatePickerProvider>

                        <ScheduleProvider>

                            <ScheduleAppointmentProvider appointment={appointment} onClose={onClose}>

                                <div className="p-6">

                                    <ModalBody/>

                                    <ModalFooter/>

                                </div>

                            </ScheduleAppointmentProvider>

                        </ScheduleProvider>

                    </DatePickerProvider>

                </DateTimeProvider>

            </div>

        </div>

    )

}

export default ScheduleAppointmentModal