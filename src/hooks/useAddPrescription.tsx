import { PrescriptionType } from "../assets/types/PrescriptionType"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useNotesTabContext } from "../context/NotesTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { usePrescriptionContext } from "../context/PrescriptionContext"
import { useProfileContext } from "../context/ProfileContext"
import { v4 as uuidv4 } from "uuid"

export const useAddPrescription = () =>{

    const { prescriptions, setPrescriptions } = usePrescriptionContext(),
          { closeModals } = useNotesTabContext(),
          { addPrescription } = usePatientDetails(),
          { profile } = useProfileContext(),
          { appointmentID } = useAppointmentsContext(),
          currentPrescription = prescriptions[prescriptions.length - 1],
          canSave = !!currentPrescription.medicineName.trim() &&
                    !!currentPrescription.dose.trim() &&
                    !!currentPrescription.frequency.trim() &&
                    !!currentPrescription.duration.trim()

    const handleAddPrescription = () =>{

        if(profile?.type !== "doctor" || !canSave || !appointmentID) return

        const newPrescription: PrescriptionType ={

            _id: uuidv4(),
            medicineName: currentPrescription.medicineName.trim(),
            dose: currentPrescription.dose.trim(),
            frequency: currentPrescription.frequency.trim(),
            duration: currentPrescription.duration.trim(),
            notes: currentPrescription.notes?.trim() || '',
            createdAt: new Date().toISOString(),
            doctorID: profile._id,
            appointmentID

        }

        setPrescriptions([

            ...prescriptions.slice(0, -1),
            newPrescription,
            {
                _id: '',
                medicineName: '',
                dose: '',
                frequency: '',
                duration: '',
                notes: '',
                createdAt: '',
                doctorID: '',
                appointmentID: ''
            }

        ])

        
        addPrescription(newPrescription)

        alert('New prescription added!')

        closeModals()

    }

    return { handleAddPrescription, canSave }

}