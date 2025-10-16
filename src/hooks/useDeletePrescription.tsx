import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useToast } from "./useToast"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useDeletePrescription = () =>{

    const { selectedPrescription, closeModals } = useNotesTabContext(),
          { removePrescription } = usePatientDetails(),
          { appointmentID } = useAppointmentsContext(),
          { showToast } = useToast()

    if(!selectedPrescription){

        console.error("No prescription selected for deletion.")

        return { handleDeletePrescription: () => {} }

    }


    const handleDeletePrescription = async() =>{
        
        if(!appointmentID) return

        try{

            const prescriptionRef = doc(db, "appointments", appointmentID, "prescriptions", selectedPrescription._id)

            await deleteDoc(prescriptionRef)

            removePrescription(selectedPrescription._id)

            closeModals()

            showToast("Prescription deleted successfully", "success")
            
        }catch(err){

            const error = err as Error

            console.error('Failed to delete prescription: ', error.message)

            showToast(`Failed to delete prescription: ${error.message}`, "error")

        }

    }

    return { handleDeletePrescription }

}