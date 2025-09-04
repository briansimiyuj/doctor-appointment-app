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

        const validPrescriptions = prescriptions.filter(prescription => prescription.medicineName.trim() && prescription.dose.trim() && prescription.frequency.trim() && prescription.duration.trim() && prescription.notes?.trim())

          .map(prescription =>({

            ...prescription,
            _id: uuidv4(),
            notes: prescription.notes?.trim() || "",
            createdAt: new Date().toISOString(),
            doctorID: profile._id,
            doctorName: profile.name,
            appointmentID

          }))

        

        setPrescriptions([

            ...validPrescriptions,

            {
                _id: '',
                medicineName: '',
                dose: '',
                frequency: '',
                duration: '',
                notes: '',
                createdAt: '',
                doctorID: '',
                doctorName: '',
                appointmentID: ''
            }

        ])

        
        validPrescriptions.forEach(prescription => addPrescription(prescription))

        alert(`${validPrescriptions.length} prescription(s) added successfully`)

        closeModals()

    }

    return { handleAddPrescription, canSave }

}