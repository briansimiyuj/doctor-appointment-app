import { DatePickerProvider } from "../../../context/DatePickerContext"
import { useRescheduleModal } from "../../../context/RescheduleModalContext"
import { ScheduleProvider } from "../../../context/ScheduleContext"
import DatePicker from "./DatePicker/DatePicker"
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

            <ScheduleProvider>
                
                <DatePicker/>

                <DatePickerProvider>

                    <TimePicker/>

                </DatePickerProvider>

            </ScheduleProvider>

        </>

    )

}

export default ModalBody