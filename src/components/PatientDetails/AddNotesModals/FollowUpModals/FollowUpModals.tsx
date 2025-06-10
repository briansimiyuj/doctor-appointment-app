import { PendingFollowUp } from "../../../../assets/types/PendingFollowUp"
import ModalHeader from "../../ModalHeader"

interface FollowUpModalsProps{

    followUp: PendingFollowUp
    onConfirm: (appointment: any, date: string, time: string, consultationType: "in-person" | "online") => void
    onCancel: () => void

}

const FollowUpModals: React.FC<FollowUpModalsProps> = ({ followUp, onConfirm, onCancel }) =>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-screen">

                <ModalHeader title="Schedule Follow Up" onClose={onCancel}/>

            </div>

        </div>

    )

}

export default FollowUpModals