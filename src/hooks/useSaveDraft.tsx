import { useCallback } from "react"
import { BillableItem, BillingCalculations, BillingRecord } from "../assets/types/BillingType"
import { v4 as uuidv4 } from "uuid"
import { useCurrencyContext } from "../context/CurrencyContext"
import { setDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

export const useSaveDraft = () =>{

    const { currency, rate } = useCurrencyContext(),
          { showToast } = useToast()

    const saveDraft = useCallback(async (
        appointmentID: string,
        patientID: string,
        doctorID: string,
        items: BillableItem[],
        calculations: BillingCalculations,
        existingBillID?: string
    ): Promise<BillingRecord> =>{

        try{
        
            const billID = existingBillID || uuidv4(),
                  now = new Date()

            const cleanedItems = items.map(item =>({

                ...item,
                description: item.description || null,
                sessionCount: item.sessionCount || 1

            }))

            const bill: BillingRecord ={

                _id: billID,
                appointmentID,
                patientID,
                doctorID,
                status: "draft",
                subTotal: calculations.subTotal,
                discount: calculations.discount,
                itemList: cleanedItems,
                tax: calculations.tax,
                total: calculations.total,
                currency,
                exchangeRate: rate,
                createdAt: existingBillID ? now : now,
                updatedAt: now

            }

            const billRef = doc(db, "appointments", appointmentID, "billing", billID)

            await setDoc(billRef, bill)

            showToast("Draft saved successfully", "success")

            return bill
        
        }catch(error){
        
           console.error('Error saving draft:', error)

           showToast("Error saving draft", "error")  

           throw error
        
        }

    }, [currency, rate, showToast])

    return { saveDraft }

}