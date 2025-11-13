import { v4 as uuidv4 } from "uuid"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"
import { useProfileContext } from "../context/ProfileContext"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useLabTestContext } from "../context/LabTestContext"
import { LabTestType } from "../assets/types/LabTestType"

export const useSubmitLabOrder = () =>{

    const { profile } = useProfileContext(),
          { showToast } = useToast(),
          { appointment, closeLabOrderModal } = useManageAppointmentContext(),
          { testsOrdered, clinicalJustification, urgency, preferredLab, labEmail, labPhone, labAddress, preparationInstructions, loading, setLoading } = useLabTestContext(),
           readyToSubmit = testsOrdered.length > 0 && clinicalJustification && preferredLab && labAddress && labEmail && labPhone && urgency

    const handleSubmitLabOrder = async(e: React.FormEvent) =>{

        e.preventDefault()
        
        if(loading){

            showToast("Please wait, lab order submission is already in progress.", "warning")

            return

        }

        if(!readyToSubmit){

            showToast("Please fill out all required fields marked with * and select at least one test.", "error")

            return

        }

        if(!profile || profile.type !== "doctor" || !appointment || !appointment._id){

            console.error("Missing doctor profile, appointment data, or appointment ID")

            showToast("Error: Missing required session data for submission", "error")

            return

        }

        setLoading(true)
        
        const appointmentID = appointment._id,
              labOrderID = uuidv4()

        const newLabOrder: LabTestType ={

            _id: labOrderID,
            appointmentID,

            senderDoctor:{
                _id: profile._id || "",
                name: profile.name || "Ordering Doctor",
                email: profile.addressValue.email || "",
                phone: profile.addressValue.phone || "",
                hospital: profile.hospital || "",
            },

            testsOrdered,
            clinicalJustification,
            urgency: urgency!, 

            preferredLab, 
            labContact:{
                email: labEmail,
                phone: labPhone,
                address: labAddress,
            },

            preparationInstructions,
            createdAt: new Date().toISOString()

        }

        try{
            
            const labOrdersRef = collection(db, "appointments", appointmentID, "labOrders"),
                  appointmentRef = doc(db, "appointments", appointmentID)

            await addDoc(labOrdersRef, newLabOrder)

            await updateDoc(appointmentRef, { hasLabOrder: true })
            
            showToast(`Lab test order for ${newLabOrder.testsOrdered.length} test(s) submitted successfully!`, "success")

            closeLabOrderModal()

        }catch(err){

            const error = err as Error

            console.error("Failed to submit lab order: ", error.message)

            showToast(`Failed to submit lab order: ${error.message}`, "error")

        }finally{

            setLoading(false)

        }

    }

    return{

        handleSubmitLabOrder,
        readyToSubmit 

    }

}