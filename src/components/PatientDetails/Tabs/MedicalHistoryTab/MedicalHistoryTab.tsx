import { MedicalHistoryType } from "../../../../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../../../../context/MedicalHistoryTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import MedicalHistorySection from "./Sections/MedicalHistorySection" 
import MedicalHistoryTabHeader from "./MedicalHistoryTabHeader"

const MedicalHistoryTab: React.FC = ()=>{

    const { openAddModal } = useMedicalHistoryTabContext(),
          { medicalConditions, allergies, medications, surgeries } = usePatientDetails()

    return(

        <div className="p-4">
        
            <MedicalHistoryTabHeader/>

            <MedicalHistorySection
                title="Medical Conditions"
                items={medicalConditions}
                onAdd={() => openAddModal("medicalConditions" as unknown as MedicalHistoryType)}
            />
        
        </div>

    )

}

export default MedicalHistoryTab