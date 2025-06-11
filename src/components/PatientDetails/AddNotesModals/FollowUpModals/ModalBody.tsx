import { PendingFollowUp } from "../../../../assets/types/PendingFollowUp"
import { DatePickerProvider } from "../../../../context/DatePickerContext"
import { DateTimeProvider } from "../../../../context/DateTimeContext"
import { ScheduleAppointmentProvider } from "../../../../context/ScheduleAppointmentContext"
import { ScheduleProvider } from "../../../../context/ScheduleContext"
import DatePicker from "../../RescheduleModals/DatePicker/DatePicker"
import TimePicker from "../../RescheduleModals/TimePicker/TimePicker"
import ScheduleConsultationTypeSelector from "../../ScheduleModals/ScheduleConsultationTypeSelector"

interface FollowUpModalsProps{

    followUp: PendingFollowUp
    onCancel: () => void

}

const ModalBody: React.FC<FollowUpModalsProps> = ({ followUp, onCancel }) => {

    return(

        <DateTimeProvider initialDate={followUp.followUpDate} initialTime={followUp.defaultTime}>

            <ScheduleProvider>

                <ScheduleAppointmentProvider
                    appointment={followUp.appointment} 
                    onClose={onCancel} 
                    consultationType={followUp.consultationType}
                >

                    <DatePickerProvider>

                        <DatePicker/>

                        <TimePicker/>

                    </DatePickerProvider>

                    <ScheduleConsultationTypeSelector/>

            </ScheduleAppointmentProvider>

            </ScheduleProvider>

        </DateTimeProvider>

    )

}

export default ModalBody