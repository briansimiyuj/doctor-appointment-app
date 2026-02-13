import { useCallback } from "react"
import { BillableItem, BillingCalculations, BillingRecord } from "../assets/types/BillingType"
import { v4 as uuidv4 } from "uuid"
import { useCurrencyContext } from "../context/CurrencyContext"
import { addDoc, collection, deleteDoc, doc, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"
import { useNavigate } from "react-router-dom"
import { useAppointmentsContext } from "../context/AppointmentContext"

export const useSubmitBill = () =>{

    const { currency, rate } = useCurrencyContext(),
          { appointment } = useAppointmentsContext(),
          { showToast } = useToast(),
          navigate = useNavigate(),
          doctorName = appointment?.doctor?.doctorInfo.name || 'Doctor Name',
          patientName = appointment?.patient?.patientInfo.name || 'Patient Name',
          patientEmail = appointment?.patient?.patientInfo.addressValue.email || '',
          patientPhone = appointment?.patient?.patientInfo.addressValue.phone || ''

    const submitBill = useCallback(async (
        appointmentID: string,
        patientID: string,
        doctorID: string,
        items: BillableItem[],
        calculations: BillingCalculations,
        existingDraftID?: string
    ): Promise<BillingRecord> =>{

        try{
        
            const bill: BillingRecord ={

                _id: uuidv4(),
                appointmentID,
                patientID,
                doctorID,
                doctorName,
                patientName,
                patientEmail,
                patientPhone,
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

            if(existingDraftID){
            
                const draftRef = doc(db, "appointments", appointmentID, "billing", existingDraftID)

                await deleteDoc(draftRef)
            
            }else{
            
                const q = query(
                    collection(db, "appointments", appointmentID, "billing"),
                    where("status", "==", "draft")
                )

                const querySnapshot = await getDocs(q)
                
                querySnapshot.forEach(async (doc) =>{
                    
                    await deleteDoc(doc.ref)

                })
            
            }

            showToast("Bill submitted successfully", "success")

            setTimeout(() =>{

                navigate(`/appointments/${appointmentID}/payment`)

            }, 1500)

            return bill
        
        }catch(error){
        
           console.error('Error submitting bill:', error)

           showToast("Error submitting bill", "error")  

           throw error
        
        }

    }, [currency, rate, showToast, navigate])

    return { submitBill }

}