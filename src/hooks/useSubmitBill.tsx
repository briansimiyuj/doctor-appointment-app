import { useCallback } from "react"
import { BillableItem, BillingCalculations, BillingRecord } from "../assets/types/BillingType"
import { v4 as uuidv4 } from "uuid"
import { useCurrencyContext } from "../context/CurrencyContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

export const useSubmitBill = () =>{

    const { currency, rate } = useCurrencyContext(),
          { showToast } = useToast()

    const submitBill = useCallback(async (
        appointmentID: string,
        patientID: string,
        doctorID: string,
        items: BillableItem[],
        calculations: BillingCalculations
    ): Promise<BillingRecord> =>{

        try{
        
            const bill: BillingRecord ={

                _id: uuidv4(),
                appointmentID,
                patientID,
                doctorID,
                status: "pending",
                subTotal: calculations.subTotal,
                discount: calculations.discount,
                itemList: items,
                tax: calculations.tax,
                total: calculations.total,
                currency,
                exchangeRate: rate,
                createdAt: new Date(),
                updatedAt: new Date()

            }

            const billingRef = collection(db, "appointments", appointmentID, "billing")

            await addDoc(billingRef, bill)

            showToast("Bill submitted successfully", "success")

            return bill
        
        }catch(error){
        
           console.error('Error submitting bill:', error)

           showToast("Error submitting bill", "error")  

           throw error
        
        }

    }, [])

    return { submitBill }

}
