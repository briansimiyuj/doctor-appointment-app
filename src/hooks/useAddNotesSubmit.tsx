import { AppointmentType } from "../assets/types/AppointmentType"
import { useAddNotes } from "../context/AddNotesContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { v4 as uuid } from "uuid"

export const useAddNotesSubmit = (appointment: AppointmentType | null) =>{

    const { notes, prescription, diagnosis, followUpDate, addAppointmentNotes, resetForm } = useAddNotes(),
          { patientDetails } = usePatientDetails()

    const handleSubmit = (onClose: () => void) =>{
    
        if(!notes.trim() || !appointment || !patientDetails){

            return
        
        }

        const noteData ={

            _id: uuid(),
            appointmentID: appointment._id || `${appointment.date}-${appointment.time}`,
            patientID: patientDetails.patientInfo._id,
            doctorID: appointment.doctor._id,
            notes: notes.trim(),
            diagnosis: diagnosis.trim() || undefined,
            prescription: prescription.trim() || undefined,
            followUpDate: followUpDate.trim() || undefined,
            doctorName: appointment.doctor.name,
            createdAt: new Date().toISOString(),

        }

        addAppointmentNotes(noteData)

        resetForm() 

        onClose()

        console.log(noteData)
    
    }

    return{

        handleSubmit,
        canSubmit: notes.trim() !== '' 

    }

}
