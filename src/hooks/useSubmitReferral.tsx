import { v4 as uuidv4 } from "uuid"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useReferralContext } from "../context/ReferralContext"
import { ReferralType } from "../assets/types/ReferralType"
import { useProfileContext } from "../context/ProfileContext"

export const useSubmitReferral = () =>{

    const { profile } = useProfileContext(),
          { showToast } = useToast(),
          { appointment, closeReferralModal } = useManageAppointmentContext(),
          { recipientName, recipientEmail, recipientPhone, recipientHospital, recipientHospitalLocation, speciality, clinicalReason, urgency, loading, setLoading } = useReferralContext()

    const readyToSubmit = recipientName && speciality && clinicalReason && urgency && recipientEmail && recipientPhone && recipientHospital && recipientHospitalLocation

    const handleSubmitReferral = async(e: React.FormEvent) =>{

        e.preventDefault()
        
        if(loading){

            showToast("Please wait, referral submission is already in progress.", "warning")

            return

        }

        if(!readyToSubmit){

            showToast("Please fill out all required fields marked with *", "error")

            return

        }

        if(!profile || !appointment || !appointment._id){

            console.error("Missing profile, appointment data, or appointment ID")

            showToast("Error: Missing required session data for referral", "error")

            return

        }

        setLoading(true)

        if(profile.type !== "doctor") return
        
        const appointmentID = appointment._id,
              referralID = uuidv4()

        const newReferral: ReferralType ={

            _id: referralID,
            appointmentID,
            
            senderDoctor:{
                _id: profile._id || "",
                name: profile.name || "Referring Doctor",
                email: profile.addressValue.email || "",
                phone: profile.addressValue.phone || "",
                hospital: profile.hospital || "",
            },

            speciality,
            recipientName,
            
            recipientContact:{
                email: recipientEmail,
                phone: recipientPhone,
                hospital: recipientHospital,
                hospitalLocation: recipientHospitalLocation,
            },

            clinicalReason,
            urgency,
            createdAt: new Date().toISOString(),

        }

        try{
            
            const referralsRef = collection(db, "appointments", appointmentID, "referrals"),
                  appointmentsRef = doc(db, "appointments", appointmentID)

            await addDoc(referralsRef, newReferral)

            await updateDoc(appointmentsRef, { hasReferral: true })
            
            showToast(`Referral to ${newReferral.speciality} submitted successfully!`, "success")

            closeReferralModal()

        }catch(err){

            const error = err as Error

            console.error("Failed to submit referral: ", error.message)

            showToast(`Failed to submit referral: ${error.message}`, "error")

        }finally{

            setLoading(false)

        }

    }

    return{

        handleSubmitReferral,
        readyToSubmit 

    }

}