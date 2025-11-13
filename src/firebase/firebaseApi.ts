import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { ReferralType } from "../assets/types/ReferralType"
import { LabTestType } from "../assets/types/LabTestType"

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


export const updateAppointmentSessionDataInFirebase = async (
    appointmentID: string,
    data: { [key: string]: any }
): Promise<void> =>{

    if(!appointmentID || !Object.keys(data).length){

        throw new Error("Missing appointment ID or data to update.")

    }

    try{

        const appointmentRef = doc(db, "appointments", appointmentID)

        await updateDoc(appointmentRef, data)
        
    }catch(err){
        
        console.error("Error updating appointment session data in Firebase:", err)

        throw new Error("Failed to update appointment session data in Firebase.")

    }

}

export const getReferralByAppointmentID = async (
    appointmentID: string,
    setDataCallback: (data: ReferralType | null) => void,
    onErrorCallback: (error: Error) => void
): Promise<() => void> =>{

    const referralCollection = collection(db, "appointments", appointmentID, "referrals"),
           q = query(referralCollection)

    const unsubscribe = onSnapshot(q, (snapshot) =>{

        if(!snapshot.empty){

            const referralData = snapshot.docs[0].data() as ReferralType

            setDataCallback(referralData)

        }else{

            setDataCallback(null)

        }


    }, (error) => onErrorCallback(error))

    return unsubscribe

}

export const getLabOrderByAppointmentID = async (
    appointmentID: string,
    setDataCallback: (data: LabTestType | null) => void,
    onErrorCallback: (error: Error) => void
): Promise<() => void> =>{

    const labOrderCollection = collection(db, "appointments", appointmentID, "labOrders"),
           q = query(labOrderCollection)

    const unsubscribe = onSnapshot(q, (snapshot) =>{

        if(!snapshot.empty){
        
            const labOrderData = snapshot.docs[0].data() as LabTestType

            setDataCallback(labOrderData)

        }else{

            setDataCallback(null)

        }   

    }, (error) => onErrorCallback(error))

    return unsubscribe

}