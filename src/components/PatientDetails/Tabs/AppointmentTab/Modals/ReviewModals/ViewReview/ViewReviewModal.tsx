import ModalHeader from "../../ModalHeader"
import ModalBody from "./ModalBody"

interface ViewReviewModalProps{

    onClose: () => void

}

const ViewReviewModal: React.FC<ViewReviewModalProps> = ({ onClose })=>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <ModalHeader title="View Reviews" onClose={onClose}/>

                <ModalBody/>

                <button
                    className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 font-semibold dark:hover:bg-gray-600 text-gray-700 py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                    onClick={onClose}
                >Back</button>


            </div>

        </div>

    )

}

export default ViewReviewModal