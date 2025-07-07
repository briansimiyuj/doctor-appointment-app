import { MedicalHistoryType } from "../../../../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../../../../context/MedicalHistoryTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import MedicalHistorySection from "./Sections/MedicalHistorySection" 
import MedicalHistoryTabHeader from "./MedicalHistoryTabHeader"
import MedicalHistoryModal from "./Modals/MedicalHistoryModal"

const MedicalHistoryTab: React.FC = ()=>{

    const { openAddModal, showModal } = useMedicalHistoryTabContext(),
          { medicalConditions, allergies, medications, surgeries } = usePatientDetails()

    return(

        <div className="p-4">
        
            <MedicalHistoryTabHeader/>

            <MedicalHistorySection
                title="Medical Conditions"
                items={medicalConditions}
                onAdd={() => openAddModal("medicalConditions" as unknown as MedicalHistoryType)}
            />

            <MedicalHistorySection
                title="Allergies"
                items={allergies}
                onAdd={() => openAddModal("allergies" as unknown as MedicalHistoryType)}
            />

            <MedicalHistorySection
                title="Medications"
                items={medications}
                onAdd={() => openAddModal("medications" as unknown as MedicalHistoryType)}
            />

            <MedicalHistorySection
                title="Surgeries"
                items={surgeries}
                onAdd={() => openAddModal("surgeries" as unknown as MedicalHistoryType)}
            />

            { showModal && <MedicalHistoryModal/> }
        
        </div>

    )

}

export default MedicalHistoryTab