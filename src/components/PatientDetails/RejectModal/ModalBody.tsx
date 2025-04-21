import { useModalContext } from "../../../context/ModalContext"

const ModalBody: React.FC = ()=>{

    const { appointment } = useModalContext()

    return(

        <div className="mb-4">

            <p className="mb-2 text-gray-700">

                Are you sure you want to reject the appointment on <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>?

            </p>

        </div>

    )

}

export default ModalBody