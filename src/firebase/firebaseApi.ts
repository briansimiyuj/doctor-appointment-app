import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

type StatusType = "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up"

export const updateAppointmentStatusInFirebase = async (status: StatusType, appointmentID: string): Promise<void> =>{

    try{

        const appointmentRef = doc(db, "appointments", appointmentID)

        await updateDoc(appointmentRef, {
            
            status

        })

    }catch(err){

        console.error(err)

    }

}