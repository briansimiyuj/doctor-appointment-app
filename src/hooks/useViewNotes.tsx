import { useEffect, useState } from "react";
import { AppointmentNoteType } from "../assets/types/AppointmentNoteType";
import { AppointmentType } from "../assets/types/AppointmentType";
import { usePatientDetails } from "../context/PatientDetailsContext";

export const useViewNotes = (appointment: AppointmentType | null) =>{

    const [appointmentNotes, setAppointmentNotes] = useState<AppointmentNoteType[]>([]),
          { patientDetails } = usePatientDetails()

    useEffect(() =>{
    
        if(!appointment || !patientDetails){

            setAppointmentNotes([])

            return

        }

        const patientID = patientDetails.patientInfo._id,
              appointmentID = appointment._id || `${appointment.date}-${appointment.time}`

        try{

            const savedNotes = localStorage.getItem(`appointmentNotes-${patientID}`)

            if(savedNotes){
                
                const allNotes: AppointmentNoteType[] = JSON.parse(savedNotes),
                    filteredNotes = allNotes.filter(note => note.appointmentID === appointmentID)

                setAppointmentNotes(filteredNotes)

            }else{ 

                setAppointmentNotes([])

            }

        }catch(error){

            console.error('Error fetching appointment notes:', error)

            setAppointmentNotes([])

        }
    
    }, [patientDetails, appointment])

    return{

        appointmentNotes,
        hasNotes: appointmentNotes.length > 0

    }

}
