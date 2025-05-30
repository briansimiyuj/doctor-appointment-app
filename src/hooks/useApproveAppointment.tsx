import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

export const useApproveAppointment = () =>{

    const { patientAppointments, updateAppointmentStatus } = usePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          loginContext = useContext(LoginContext),
           { userType } = loginContext || { userType: "patient" },
          latestAppointment = patientAppointments && patientAppointments.length > 0 
            ? patientAppointments[0] 
            : null

    const handleApproveAppointment = () =>{
   
        if(latestAppointment){

            updateAppointmentStatus(latestAppointment, "approved")


            const performedBy ={

                type: userType,
                name: userType === "doctor" 
                    ? latestAppointment.doctor.name || "Doctor"
                    : latestAppointment.patient.name || "Patient",
                _id: userType === "doctor"
                    ? latestAppointment.doctor._id
                    : latestAppointment.patient._id

            }

            addScheduleHistoryEntry(
 
                { ...latestAppointment, status: "approved" },
                "approved",
                `Appointment approved by ${userType}`,
                latestAppointment.status,
                performedBy

            )

        }
   
    }

    return{

        handleApproveAppointment,
        latestAppointment

    }

}
