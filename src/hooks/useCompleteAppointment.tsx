import { useContext } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { useToast } from "./useToast"
import { db } from "../firebaseConfig"

export const useCompleteAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          { appointmentID, appointment } = useAppointmentsContext(),
          { appointmentToManage } = useUpdatePatientDetails(),
          { showToast } = useToast(),
          { closeCompletionModal, setLoading } = useManageAppointmentContext(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "doctor"

    const handleMarkAsCompleted = async () =>{

        const targetAppointment = appointmentToManage || appointment

        if(!targetAppointment || !appointmentID){

            showToast("Missing appointment information", "error")

            return

        }

        if(targetAppointment.paymentStatus !== "paid"){

            showToast("Cannot complete appointment. Payment is pending.", "error")

            return

        }

        setLoading(true)

        try{

            const appointmentRef = doc(db, "appointments", appointmentID)

            await updateDoc(appointmentRef, {
                status: "completed",
                updatedAt: new Date().toISOString()
            })

            updateAppointmentStatus(targetAppointment, "completed")
            
            const performedBy ={
                type: userType,
                name: userType === "doctor" ? targetAppointment?.doctor.doctorInfo.name : targetAppointment?.patient.patientInfo.name,
                _id: userType === "doctor" ? targetAppointment?.doctor.doctorInfo._id : targetAppointment?.patient.patientInfo._id
            }

            await addScheduleHistoryEntry(
                { ...targetAppointment, status: "completed" },
                "completed",
                undefined,
                targetAppointment?.status,
                performedBy,
                `Appointment for ${targetAppointment?.date} at ${targetAppointment?.time} marked as completed`
            )

            showToast("Appointment marked as completed successfully", "success")

            await new Promise(resolve => setTimeout(resolve, 300))

            closeCompletionModal()

        }catch(error){

            console.error("Error marking appointment as completed:", error)

            showToast("Failed to mark appointment as completed. Please try again.", "error")

        }finally{

            setLoading(false)
            
        }

    }

    return { handleMarkAsCompleted }

}