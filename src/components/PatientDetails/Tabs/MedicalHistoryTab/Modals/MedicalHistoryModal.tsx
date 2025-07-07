import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"
import ModalHeader from "../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"

const MedicalHistoryModal: React.FC = ()=>{

    const { closeModal, mode, targetSection } = useMedicalHistoryTabContext()

    return(

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

                <ModalHeader
                    title={mode === "add" ? `Add ${targetSection ?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}` : `Edit ${targetSection ?.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`}
                    onClose={closeModal}
                />

                <ModalBody/>

            </div>

        </div>

    )

}

export default MedicalHistoryModal