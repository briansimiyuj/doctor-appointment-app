import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

type StatusType = "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up"

export const updateAppointmentStatusInFirebase = async (
    status: StatusType, 
    appointmentID: string, 
    reason?: string, 
    alternative?: string | null
): Promise<void> =>{

    try{

        const appointmentRef = doc(db, "appointments", appointmentID)
        
        const updateData: { status: StatusType, [key: string]: any } = { status }

        if(status === "cancelled"){

            updateData.cancellationReason = reason

            updateData.cancellationAlternative = alternative || null

        } 
        
        if(status === "rejected"){

            updateData.rejectionReason = reason

            updateData.rejectionAlternative = alternative || null

        }

        await updateDoc(appointmentRef, updateData)

    }catch(err){

        console.error("Error updating appointment data in Firebase:", err)
        
        throw new Error("Failed to update appointment data in Firebase.")

    }

}