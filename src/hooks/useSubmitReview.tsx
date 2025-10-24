import { v4 as uuidv4 } from "uuid"
import { collection, doc, addDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"
import { useProfileContext } from "../context/ProfileContext"
import { useDoctorReviewsContext } from "../context/DoctorReviewsContext"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"
import { ReviewType } from "../assets/types/ReviewType"

export const useSubmitReview = () =>{

    const { profile } = useProfileContext(),
          { showToast } = useToast(),
          {  ratings,  comment,  isSubmitting, setIsSubmitting, addReview, resetForm } = useDoctorReviewsContext(),
          { appointmentToReview, closeReviewModal } = useUpdatePatientDetails(),
          canSubmit = ratings > 0 && !isSubmitting

    const handleSubmitReview = async(e: React.FormEvent) =>{

        e.preventDefault()
        
        if(!canSubmit){

            showToast("Please provide a rating", "error")

            return

        }

        if(!profile || !appointmentToReview || !appointmentToReview.doctor){

            console.error("Missing patient ID, appointment data, or doctor ID")

            showToast("Error: Missing required data for submission", "error")

            return

        }

        setIsSubmitting(true)
        
        const doctorID = appointmentToReview.doctor.doctorInfo._id,
              appointmentID = appointmentToReview._id

        const newReview: ReviewType ={

            _id: uuidv4(),
            patientID: profile._id,
            patientName: profile.name || 'Patient',
            patientImage: profile.profileImage || null,
            appointmentID,
            ratings,
            comment: comment.trim(),
            doctorID,
            createdAt: new Date().toISOString()

        }

        try{
            
            const doctorReviewsRef = collection(db, "doctors", doctorID, "reviews")

            await addDoc(doctorReviewsRef, newReview)

            const appointmentRef = doc(db, "appointments", appointmentID)

            await updateDoc(appointmentRef, {
            
                isReviewed: true,
                reviewID: newReview._id, 
                reviewDate: newReview.createdAt
                
            })
            
            addReview(newReview)
            
            resetForm()
            
            showToast("Thank you for your review! Your feedback is valued", "success")

            closeReviewModal()

        }catch(err){

            const error = err as Error

            console.error('Failed to submit review: ', error.message)

            showToast(`Failed to submit review: ${error.message}`, "error")

        }finally{

            setIsSubmitting(false)

        }

    }

    return{

        handleSubmitReview,
        canSubmit

    }

}