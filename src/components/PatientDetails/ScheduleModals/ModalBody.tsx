import DatePicker from "../RescheduleModals/DatePicker/DatePicker"
import TimePicker from "../RescheduleModals/TimePicker/TimePicker"
import ScheduleConsultationTypeSelector from "./ScheduleConsultationTypeSelector"

const ModalBody: React.FC = () =>{

    return(

        <div className="space-y-6">

            <div>

                <DatePicker/>

                <TimePicker/>

                <ScheduleConsultationTypeSelector/>

            </div>

        </div>

    )

}

export default ModalBody