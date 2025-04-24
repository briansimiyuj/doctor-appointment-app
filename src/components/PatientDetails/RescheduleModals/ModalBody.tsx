import { useRescheduleModal } from "../../../context/RescheduleModalContext"
import DatePicker from "./DatePicker/DatePicker"

const ModalBody: React.FC = ()=>{

    const { appointment } = useRescheduleModal()

    return(

        <>

            <div className="mb-4">

                <p className="text-gray-700">

                    You are rescheduling the appointment originally scheduled for <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>.

                </p>

            </div>

            <DatePicker/>

        </>

    )

}

export default ModalBody