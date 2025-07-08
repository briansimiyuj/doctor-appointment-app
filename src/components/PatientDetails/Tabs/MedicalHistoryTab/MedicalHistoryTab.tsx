import { MedicalHistoryType } from "../../../../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../../../../context/MedicalHistoryTabContext"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import MedicalHistorySection from "./Sections/MedicalHistorySection" 
import MedicalHistoryTabHeader from "./MedicalHistoryTabHeader"
import MedicalHistoryModal from "./Modals/MedicalHistoryModal"

const MedicalHistoryTab: React.FC = ()=>{

    const { openAddModal, showModal, openEditModal, openDeleteModal } = useMedicalHistoryTabContext(),
          { medicalConditions, allergies, medications, surgeries } = usePatientDetails()

    return(

        <div className="p-4">
        
            <MedicalHistoryTabHeader/>

            <MedicalHistorySection
                title="Medical Conditions"
                items={medicalConditions}
                section="medicalConditions"
                onAdd={openAddModal}
                onEdit={openEditModal}
                onDelete={openDeleteModal}  
            />

            <MedicalHistorySection
                title="Allergies"
                items={allergies}
                section="allergies"
                onAdd={openAddModal}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
            />

            <MedicalHistorySection
                title="Medications"
                items={medications}
                section="medications"
                onAdd={openAddModal}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
            />

            <MedicalHistorySection
                title="Surgeries"
                items={surgeries}
                section="surgeries"
                onAdd={openAddModal}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
            />

            { showModal && <MedicalHistoryModal/> }
        
        </div>

    )

}

export default MedicalHistoryTab