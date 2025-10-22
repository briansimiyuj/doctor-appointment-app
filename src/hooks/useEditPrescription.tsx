import { PrescriptionType } from "../assets/types/PrescriptionType"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { usePrescriptionContext } from "../context/PrescriptionContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useToast } from "./useToast"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useEditPrescription = () =>{

    const { selectedPrescription, closeModals } = useNotesTabContext(),
          { updatePrescription } = usePatientDetails(),
          { prescriptions } = usePrescriptionContext(),
          { appointmentID } = useAppointmentsContext(),
          { showToast } = useToast()

    if(!selectedPrescription){

        console.error("No prescription selected")

        return { handleEditPrescription: () => {}, canUpdate: false }

    }

    const currentFormState = prescriptions.find(p => p._id === selectedPrescription._id) || prescriptions[0]

    const trimmedNewValues ={

        prescriptionName: currentFormState.prescriptionName.trim(),
        medicineName: currentFormState.medicineName.trim(),
        dose: currentFormState.dose.trim(),
        frequency: currentFormState.frequency.trim(),
        duration: currentFormState.duration.trim(),
        notes: currentFormState.notes?.trim() || ""

    }

    const canUpdate =
        trimmedNewValues.prescriptionName !== "" &&(
            trimmedNewValues.prescriptionName !== selectedPrescription.prescriptionName.trim() ||
            trimmedNewValues.medicineName !== selectedPrescription.medicineName.trim() ||
            trimmedNewValues.dose !== selectedPrescription.dose.trim() ||
            trimmedNewValues.frequency !== selectedPrescription.frequency.trim() ||
            trimmedNewValues.duration !== selectedPrescription.duration.trim() ||
            trimmedNewValues.notes !== (selectedPrescription.notes?.trim() || "")
        )


    const handleEditPrescription = async() =>{
    
        if(!canUpdate || !appointmentID) return 

        const fieldsToUpdate = {
            prescriptionName: trimmedNewValues.prescriptionName,
            medicineName: trimmedNewValues.medicineName,
            dose: trimmedNewValues.dose,
            frequency: trimmedNewValues.frequency,
            duration: trimmedNewValues.duration,
            notes: trimmedNewValues.notes,
        }
        
        const updatedPrescription: PrescriptionType ={

            ...selectedPrescription,
            ...fieldsToUpdate,

        }

        try{
            const prescriptionRef = doc(db, "appointments", appointmentID, "prescriptions", selectedPrescription._id)

            await setDoc(prescriptionRef, fieldsToUpdate, { merge: true })

            updatePrescription(selectedPrescription._id, updatedPrescription)

            closeModals()
            
            showToast("Prescription updated successfully", "success")

        }catch(err){

            const error = err as Error

            console.error('Failed to update prescription: ', error.message)

            showToast(`Failed to update prescription: ${error.message}`, "error")

        }
    
    }

    return { handleEditPrescription, canUpdate }

}