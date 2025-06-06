import ClinicalNotesInput from "./Inputs/ClinicalNotesInput"
import DiagnosisInput from "./Inputs/DiagnosisInput"
import FollowUpDateInput from "./Inputs/FollowUpDateInput"
import PrescriptionInput from "./Inputs/PrescriptionInput"

const NotesForm: React.FC = ()=>{

    return(

        <div className="space-y-4 mb-6">

            <ClinicalNotesInput/>

            <DiagnosisInput/>

            <PrescriptionInput/>

            <FollowUpDateInput/>

        </div>

    )

}

export default NotesForm