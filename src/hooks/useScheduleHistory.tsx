import { addDoc, collection } from "firebase/firestore"
import { AppointmentType } from "../assets/types/AppointmentType"
import { ScheduleHistoryItem } from "../assets/types/ScheduleHistoryItem"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

type HistoryPayload = Omit<ScheduleHistoryItem, '_id'>

export const useScheduleHistory = ()=>{

    const { patientDetails } = usePatientDetails(),
          { showToast } = useToast()

    const addScheduleHistoryEntry = async(
        appointment: AppointmentType,
        actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "completed" | "follow-up",
        reason?: string,
        alternative?: string,
        performedBy?:{
            type: "doctor" | "patient" | "system"
            name?: string
            _id?: string
        },
        notes?: string
    ) =>{
    
        if(!patientDetails) return

        const firebaseHistoryEntry: HistoryPayload ={

            appointmentID: appointment._id, 
            actionType,
            timeStamp: new Date().toISOString(),           
            reason: reason ?? null, 
            alternative: alternative ?? null,
            performedBy: performedBy || { type: "system" },
            notes: notes ?? null,
            previousValues: undefined, 
            rescheduleDetails: undefined

        }

        const cleanEntry = Object.fromEntries(Object.entries(firebaseHistoryEntry).filter(([_, v]) => v !== undefined)),
              historyCollectionRef = collection(db, "appointments", appointment._id, "history") 

        try{

            await addDoc(historyCollectionRef, cleanEntry) 

            console.log('History logged successfully.')

        }catch(error){

            console.error('Error adding document: ', error)
            
            showToast("Failed to log history entry. Check console for details.", "error")

        }

    }

    return { addScheduleHistoryEntry }

}