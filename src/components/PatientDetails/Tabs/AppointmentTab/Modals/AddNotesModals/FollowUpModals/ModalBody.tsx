import { PendingFollowUp } from "../../../../../../../assets/types/PendingFollowUp"
import { DatePickerProvider } from "../../../../../../../context/DatePickerContext"
import { DateTimeProvider } from "../../../../../../../context/DateTimeContext"
import { ScheduleAppointmentProvider } from "../../../../../../../context/ScheduleAppointmentContext"
import { ScheduleProvider } from "../../../../../../../context/ScheduleContext"
import DatePicker from "../../RescheduleModals/DatePicker/DatePicker"
import TimePicker from "../../RescheduleModals/TimePicker/TimePicker"
import ScheduleConsultationTypeSelector from "../../ScheduleModals/ScheduleConsultationTypeSelector"
import FooterWrapper from "./FooterWrapper"

interface FollowUpModalsProps{

    followUp: PendingFollowUp
    onCancel: () => void
    onSave: (date: string, time: string, consultationType: "in-person" | "online") => void

}

const ModalBody: React.FC<FollowUpModalsProps> = ({ followUp, onCancel, onSave }) =>{

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

                <FooterWrapper 
                    onCancel={onCancel} 
                    onSave={onSave} 
                    initialDate={followUp.followUpDate} 
                    initialTime={followUp.defaultTime} 
                    initialConsultationType={followUp.consultationType}
                />

            </ScheduleAppointmentProvider>

            </ScheduleProvider>

        </DateTimeProvider>

    )

}

export default ModalBody