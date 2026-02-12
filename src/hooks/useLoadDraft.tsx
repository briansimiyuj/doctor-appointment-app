import { useCallback } from "react"
import { BillingRecord } from "../assets/types/BillingType"
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

export const useLoadDraft = () =>{

    const { showToast } = useToast()

    const loadDraft = useCallback(async (appointmentID: string): Promise<BillingRecord | null> =>{

        try{
        
            const billsRef = collection(db, "appointments", appointmentID, "billing"),
                  q = query(
                      billsRef, 
                      where("status", "==", "draft"),
                      orderBy("updatedAt", "desc"),
                      limit(1)
                  ),
                  querySnapshot = await getDocs(q)

            if(!querySnapshot.empty){
            
                const doc = querySnapshot.docs[0],
                      billData = doc.data() as BillingRecord

                showToast("Draft loaded successfully", "success")

                return billData

            }

            showToast("No draft found", "warning")

            return null
        
        }catch(error){
        
           console.error('Error loading draft:', error)

           showToast("Error loading draft", "error")  

           return null
        
        }

    }, [showToast])

    return { loadDraft }

}