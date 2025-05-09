import { DatePickerProvider } from "../../../context/DatePickerContext"
import { useRescheduleModal } from "../../../context/RescheduleModalContext"
import { ScheduleProvider } from "../../../context/ScheduleContext"
import ConfirmationCheckBox from "./ConfirmationCheckBox"
import ConsultationTypeSelector from "./ConsultationTypeSelector"
import DatePicker from "./DatePicker/DatePicker"
import DoctorSelector from "./DoctorSelector/DoctorSelector"
import TimePicker from "./TimePicker/TimePicker"

const ModalBody: React.FC = ()=>{

    const { appointment } = useRescheduleModal()

    return(

        <>

            <div className="mb-4">

                <p className="text-gray-700">

                    You are rescheduling the appointment originally scheduled for <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>.

                </p>

            </div>

            <DoctorSelector/>

            <ConsultationTypeSelector/>

            <ScheduleProvider>
                
                <DatePicker/>

                <DatePickerProvider>

                    <TimePicker/>

                </DatePickerProvider>

            </ScheduleProvider>

            <ConfirmationCheckBox/>

        </>

    )

}

export default ModalBody