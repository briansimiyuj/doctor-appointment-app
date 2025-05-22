import DatePicker from "../RescheduleModals/DatePicker/DatePicker"
import TimePicker from "../RescheduleModals/TimePicker/TimePicker"
import ConfirmationCheckBox from "./ConfirmationCheckBox"
import ScheduleConsultationTypeSelector from "./ScheduleConsultationTypeSelector"

const ModalBody: React.FC = () =>{

    return(

        <div className="space-y-6">

            <div>

                <DatePicker/>

                <TimePicker/>

                <ScheduleConsultationTypeSelector/>

                <ConfirmationCheckBox/>

            </div>

        </div>

    )

}

export default ModalBody