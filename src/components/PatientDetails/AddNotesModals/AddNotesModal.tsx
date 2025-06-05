import { AppointmentType } from "../../../assets/types/AppointmentType";

interface AddNotesModalProps{

    appointment: AppointmentType | null
    onClose: () => void

}

const AddNotesModal: React.FC<AddNotesModalProps> = ({ appointment, onClose }) =>{

    return(

        <h1>AddNotesModal</h1>

    )

}

export default AddNotesModal