import { useAppointmentsContext } from "../context/AppointmentContext"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePrescriptionContext } from "../context/PrescriptionContext"
import { useProfileContext } from "../context/ProfileContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useToast } from "./useToast"
import { v4 as uuidv4 } from "uuid"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useAddPrescription = () =>{

  const { prescriptions, setPrescriptions } = usePrescriptionContext(),
        { closeModals } = useNotesTabContext(),
        { profile } = useProfileContext(),
        { appointmentID } = useAppointmentsContext(),
        { addPrescription } = usePatientDetails(),
        { showToast } = useToast(),
        currentPrescription = prescriptions[prescriptions.length - 1],
        canSave = !!currentPrescription?.medicineName?.trim() &&
                  !!currentPrescription?.dose?.trim() &&
                  !!currentPrescription?.frequency?.trim() &&
                  !!currentPrescription?.duration?.trim() &&
                  !!currentPrescription?.prescriptionName?.trim()

    const handleAddPrescription = async() =>{

      if(profile?.type !== "doctor" || !canSave || !appointmentID) return

      const validPrescriptions = prescriptions.filter(prescription => prescription.medicineName.trim() && prescription.dose.trim() && prescription.frequency.trim() && prescription.duration.trim()).map(prescription =>({

        ...prescription,
        _id: uuidv4(),
        notes: prescription.notes?.trim() || "",
        createdAt: new Date().toISOString(),
        doctorID: profile._id,
        doctorName: profile.name,
        appointmentID

      }))

      if(validPrescriptions.length === 0){

        console.warn("No valid prescriptions to save")

        showToast("No valid prescriptions to save", "error")

        return

      }

      try{

        const prescriptionsRef = collection(db, "appointments", appointmentID, "prescriptions")
        
        validPrescriptions.map(async prescription =>{
          
          const docRef = await addDoc(prescriptionsRef, prescription)
          
          return docRef

        })
      
      
      addPrescription(validPrescriptions)

      setPrescriptions([{

        _id: '',
        medicineName: '',
        prescriptionName: '',
        dose: '',
        frequency: '',
        duration: '',
        notes: '',
        createdAt: '',
        doctorID: '',
        doctorName: '',
        appointmentID: ''

      }])

      showToast(`${validPrescriptions.length} prescription(s) added successfully`, "success")

      closeModals()

    }catch(err){
      
      const error = err as Error
     
      console.error('Failed to add prescription: ', error.message)
      
      showToast(`Failed to add prescription: ${error.message}`, "error")
    
    }
  }  

  return { handleAddPrescription, canSave }
  
} 