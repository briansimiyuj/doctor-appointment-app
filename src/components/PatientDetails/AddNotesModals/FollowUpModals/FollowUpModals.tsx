import { PendingFollowUp } from "../../../../assets/types/PendingFollowUp"

interface FollowUpModalsProps{

    followUp: PendingFollowUp
    onConfirm: (appointment: any, date: string, time: string, consultationType: "in-person" | "online") => void
    onCancel: () => void

}

const FollowUpModals: React.FC<FollowUpModalsProps> = ({ followUp, onConfirm, onCancel }) =>{

    return(

        <h1>FollowUpModals</h1>

    )

}

export default FollowUpModals