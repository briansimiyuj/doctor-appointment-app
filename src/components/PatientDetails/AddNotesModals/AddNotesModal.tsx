import { AddNotesProvider } from "../../../context/AddNotesContext"
import { DatePickerProvider } from "../../../context/DatePickerContext"
import { DateTimeProvider } from "../../../context/DateTimeContext"
import { useScheduleFollowUp } from "../../../hooks/useScheduleFollowUp"
import ModalHeader from "../ModalHeader"
import FollowUpModals from "./FollowUpModals/FollowUpModals"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

interface AddNotesModalProps{
    
    onClose: () => void

}

const AddNotesModal: React.FC<AddNotesModalProps> = ({ onClose }) =>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

                <ModalHeader title="Add Notes" onClose={onClose}/>

                <DateTimeProvider>
                    
                    <DatePickerProvider>

                    <AddNotesProvider>

                        <AddNotesModalContent onClose={onClose}/>

                    </AddNotesProvider>

                    </DatePickerProvider>

                </DateTimeProvider>

            </div>


        </div>

    )

}


const AddNotesModalContent: React.FC<AddNotesModalProps> = ({ onClose }) =>{

    const { pendingFollowUp, confirmFollowUpScheduling, cancelFollowUpScheduling } = useScheduleFollowUp()

    return(

        <>

            <ModalBody/>
        
                {

                    pendingFollowUp &&( 

                        <FollowUpModals
                            followUp={pendingFollowUp}
                            onConfirm={confirmFollowUpScheduling}
                            onCancel={cancelFollowUpScheduling}
                        />

                    )

                }

            <ModalFooter onClose={onClose}/>
        
        
        </>

    )
    
}

export default AddNotesModal