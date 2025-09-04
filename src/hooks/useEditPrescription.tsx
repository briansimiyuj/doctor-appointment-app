import { PrescriptionType } from "../assets/types/PrescriptionType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { usePrescriptionContext } from "../context/PrescriptionContext"

export const useEditPrescription = () =>{

    const { selectedPrescription, closeModals } = useNotesTabContext(),
          { updatePrescription } = usePatientDetails(),
          { prescriptions } = usePrescriptionContext()

    if(!selectedPrescription){

        console.error("No prescription selected")

        return { handleEditPrescription: () => {}, canUpdate: false }

    }

    const current = prescriptions[0]

    const canUpdate =
        current.medicineName.trim() !== selectedPrescription.medicineName.trim() ||
        current.dose.trim() !== selectedPrescription.dose.trim() ||
        current.frequency.trim() !== selectedPrescription.frequency.trim() ||
        current.duration.trim() !== selectedPrescription.duration.trim() ||
        (current.notes?.trim() || "") !== (selectedPrescription.notes?.trim() || "")

    const handleEditPrescription = () =>{
    
        if(!canUpdate) return 

        const updatedPrescription: PrescriptionType ={

            ...selectedPrescription,
            medicineName: current.medicineName.trim(),
            dose: current.dose.trim(),
            frequency: current.frequency.trim(),
            duration: current.duration.trim(),
            notes: current.notes?.trim() || ""

        }

        updatePrescription(selectedPrescription._id, updatedPrescription)

        closeModals()

        alert("Prescription updated successfully")
    
    }

    return { handleEditPrescription, canUpdate }

}
