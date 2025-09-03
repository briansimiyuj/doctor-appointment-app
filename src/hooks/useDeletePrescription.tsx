import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useDeletePrescription = () =>{

    const { selectedPrescription, closeModals } = useNotesTabContext(),
          { removePrescription } = usePatientDetails()

    const handleDeletePrescription = () =>{

        if(selectedPrescription){

            removePrescription(selectedPrescription._id)

            closeModals()

            alert('Prescription deleted successfully')

        }

    }

    return { handleDeletePrescription }

}