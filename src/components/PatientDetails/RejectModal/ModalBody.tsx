import { useModalContext } from "../../../context/ModalContext"
import ConfirmationCheckBox from "./ConfirmationCheckBox"
import ReasonInput from "./ReasonInput"

const ModalBody: React.FC = ()=>{

    const { appointment } = useModalContext()

    return(

        <div className="mb-4">

            <p className="mb-2 text-gray-700">

                Are you sure you want to reject the appointment on <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>?

            </p>

            <ReasonInput/>

            <ConfirmationCheckBox/>

        </div>

    )

}

export default ModalBody