import ClinicalNotesInput from "./Inputs/ClinicalNotesInput"
import DiagnosisInput from "./Inputs/DiagnosisInput"

const NotesForm: React.FC = ()=>{

    return(

        <div className="space-y-4 mb-6">

            <ClinicalNotesInput/>

            <DiagnosisInput/>

        </div>

    )

}

export default NotesForm