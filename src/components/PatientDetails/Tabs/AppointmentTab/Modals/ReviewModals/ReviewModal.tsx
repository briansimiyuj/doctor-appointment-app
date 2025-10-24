import { DoctorReviewsContextProvider } from "../../../../../../context/DoctorReviewsContext"
import ModalHeader from "../ModalHeader"
import ModalBody from "./ModalBody"

interface ReviewModalProps{

    onClose: () => void

}

const ReviewModal: React.FC<ReviewModalProps> = ({ onClose }) => {

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="Rate And Review This Doctor" onClose={onClose}/>

                <DoctorReviewsContextProvider>

                    <ModalBody/>

                </DoctorReviewsContextProvider>

            </div>

        </div>

    )

}

export default ReviewModal