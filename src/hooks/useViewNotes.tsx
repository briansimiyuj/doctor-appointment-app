import { AppointmentNoteType } from "../assets/types/AppointmentNoteType";
import { useAddNotes } from "../context/AddNotesContext";
import { useToast } from "./useToast";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect } from "react";
import { useAppointmentsContext } from "../context/AppointmentContext";

export const useViewNotes = () =>{

    const { setLoading, setAppointmentNotes, appointmentNotes } = useAddNotes(),
          { showToast } = useToast(),
          { appointmentID } = useAppointmentsContext()

    const fetchNotesForAppointment = async (appointmentID: string) =>{
    
            try{
    
                setLoading(true)
    
                const notesRef = collection(db, "appointments", appointmentID, "notes"),
                      snapshot = await getDocs(notesRef),
                      fetchedNotes = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    _id: doc.id,
                })) as AppointmentNoteType[]
    
                setAppointmentNotes(fetchedNotes)
                
                return fetchedNotes
    
            }catch(error){
    
                console.error("Error fetching appointment notes:", error)
    
                showToast("Error fetching appointment notes", "error")
    
                return []
    
            }finally{
    
                setLoading(false)
    
            }
    
        }

    const hasNotes = appointmentNotes.length > 0

    useEffect(() =>{
    
        if(appointmentID){

            fetchNotesForAppointment(appointmentID)

        }
    
    }, [])

    return{

        fetchNotesForAppointment,
        hasNotes

    }

}
