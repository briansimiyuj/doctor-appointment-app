import { useModalContext } from "../../../../../../context/ModalContext"
import AlternativeInput from "./AlternativeInput"
import ConfirmationCheckBox from "./ConfirmationCheckBox"
import ReasonInput from "./ReasonInput"

const ModalBody: React.FC = ()=>{

    const { appointment } = useModalContext()

    return(

        <div className="mb-4">

            <p className="mb-2 text-gray-700">

                Are you sure you want to cancel the appointment on <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>?

            </p>


            <ReasonInput/>

            <AlternativeInput/>

            <ConfirmationCheckBox/>

        </div>

    )

}

export default ModalBody