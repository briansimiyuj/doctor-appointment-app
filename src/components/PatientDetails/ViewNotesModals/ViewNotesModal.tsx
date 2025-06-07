import ModalHeader from "../ModalHeader"

interface ViewNotesModalProps{

    onClose: () => void

}

const ViewNotesModal: React.FC<ViewNotesModalProps> = ({ onClose }) =>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

               <ModalHeader title="View Notes" onClose={onClose}/>

            </div>

        </div>

    )

}

export default ViewNotesModal