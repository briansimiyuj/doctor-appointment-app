import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"
import { useToast } from "./useToast"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useRejectAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { appointmentToReject, closeRejectModal } = useUpdatePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "doctor",
          { showToast } = useToast()

    const handleRejectAppointment = async(reason: string, alternative?: string) =>{
   
        const appointment = appointmentToReject || (() =>{

            const savedAppointment = localStorage.getItem('CurrentAppointmentToReject')

            return savedAppointment ? JSON.parse(savedAppointment) : null

        })()
      
        if(!appointment){

            console.error('No appointment to reject')

            showToast("No appointment to reject", "error")

            return

        }

        const performedBy ={

            type: userType,
            name: userType === "doctor" 
                ? appointment.doctor.doctorInfo.name || "Doctor"
                : appointment.patient.patientInfo.name || "Patient",
            _id: userType === "doctor"
                ? appointment.doctor.doctorInfo._id
                : appointment.patient.patientInfo._id

        }

        try{

            const appointmentDocRef = doc(db, "appointments", appointment._id)

            await setDoc(appointmentDocRef, {

                status: "rejected",
                rejectionReason: reason,
                rejectionAlternative: alternative,
                rejectedBy: performedBy.type,
                performedBy:{
                    type: performedBy.type,
                    name: performedBy.name,
                    _id: performedBy._id,
                    timestamp: new Date().getTime()
                }

            }, { merge: true })

            const dateTimeID = `${appointment.date}-${appointment.time}`,
                isBookedDocRef = doc(db, "bookedDoctors", `${appointment.doctor.doctorInfo._id}_${dateTimeID}`)

            await setDoc(isBookedDocRef, {
                isBooked: false,
            }, { merge: true })

            updateAppointmentStatus(appointment, "rejected")

            addScheduleHistoryEntry(
                
                { ...appointment, status: "rejected" },
                "rejected",
                reason,
                alternative,
                performedBy,
                `Appointment rejected by ${userType}. ${appointment.doctor.doctorInfo.name} on ${appointment.date} at ${appointment.time} due to ${reason}.`   
    
            )

            showToast("Appointment rejected successfully", "success")

        }catch(error){

            console.error("Error rejecting appointment:", error)
            
            showToast("Error rejecting appointment", "error")            

        }finally{
            
            closeRejectModal()

        }
        
        
    }

    return{

        handleRejectAppointment

    }

}
