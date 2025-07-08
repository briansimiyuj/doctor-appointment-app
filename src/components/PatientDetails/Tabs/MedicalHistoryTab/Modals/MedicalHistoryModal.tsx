import { MedicalHistoryType } from "../../../../../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"
import ModalHeader from "../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const MedicalHistoryModal: React.FC = ()=>{

    const { closeModal, mode, targetSection } = useMedicalHistoryTabContext()

    const getTargetSectionName = (section: MedicalHistoryType | null) =>{
        
        switch(section){
            
            case 'medicalConditions': return 'Medical Condition'
            case 'allergies': return 'Allergy'
            case 'medications': return 'Medication'
            case 'surgeries': return 'Surgery'
            default: return ''

        }
        
    }

    return(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

                <ModalHeader
                    title={mode === "add" ? `Add ${getTargetSectionName(targetSection)}` : mode === "edit" ? `Edit ${getTargetSectionName(targetSection)}` : `Delete ${getTargetSectionName(targetSection)}`}
                    onClose={closeModal}
                />

                <ModalBody/>

                <ModalFooter/>

            </div>

        </div>

    )

}

export default MedicalHistoryModal