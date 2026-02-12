import { useCallback } from "react"
import { useToast } from "./useToast"
import { collection, limit, query, where, orderBy, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { BillingRecord } from "../assets/types/BillingType"

export const useLoadInvoice = () =>{

    const { showToast } = useToast()

    const loadInvoice = useCallback(async (appointmentID: string):Promise<BillingRecord | null> =>{

        try{
        
            const billsRef = collection(db, "appointments", appointmentID, "billing"),
                  q = query(
                      billsRef,
                      where("status", "==", "pending"),
                      orderBy("createdAt", "desc"),
                      limit(1)
                    ),
                    querySnapshot = await getDocs(q)

            if(!querySnapshot.empty){
                
                const doc = querySnapshot.docs[0],
                      billData = doc.data() as BillingRecord

                showToast("Invoice loaded successfully", "success")

                return billData

            }

            showToast("No invoice found", "warning")

            return null
        
        }catch(error){
        
           console.error('Error loading invoice : ', error)

           showToast("Error loading invoice", "error")

           return null
        
        }

    }, [showToast])

    return { loadInvoice }

}
