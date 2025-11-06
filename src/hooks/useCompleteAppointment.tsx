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
          { appointmentID } = useAppointmentsContext(),
          { appointmentToManage } = useUpdatePatientDetails(),
          { showToast } = useToast(),
          { closeCompletionModal, setLoading } = useManageAppointmentContext(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "doctor"

    const handleMarkAsCompleted = async () =>{

        if(!appointmentToManage || !appointmentID) return

        try{

            setLoading(true)

            const appointmentRef = doc(db, "appointments", appointmentID)

            await updateDoc(appointmentRef, {
                status: "completed",
                updatedAt: new Date().toISOString()
            })


            updateAppointmentStatus(appointmentToManage, "completed")
            
            const performedBy ={

                type: userType,
                name: userType === "doctor" ? appointmentToManage?.doctor.doctorInfo.name : appointmentToManage?.patient.patientInfo.name,
                _id: userType === "doctor" ? appointmentToManage?.doctor.doctorInfo._id : appointmentToManage?.patient.patientInfo._id

            }

            addScheduleHistoryEntry(

                { ...appointmentToManage, status: "completed" },
                "completed",
                undefined,
                appointmentToManage?.status,
                performedBy,
                `Appointment for ${appointmentToManage?.date} at ${appointmentToManage?.time} marked as completed`

            )

            showToast("Appointment marked as completed successfully", "success")

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