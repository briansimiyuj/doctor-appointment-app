import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useCompleteAppointment = (onClose?: () => void) =>{

    const { updateAppointmentStatus } = usePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          { appointmentToManage, closeManageModal } = useUpdatePatientDetails(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "doctor"

    if(!appointmentToManage) return null

    const handleMarkAsCompleted = () =>{

        updateAppointmentStatus(appointmentToManage, "completed")
        
        const performedBy ={
    
            type: userType,
            name: userType === "doctor" ? appointmentToManage?.doctor.name : appointmentToManage?.patient.name,
            _id: userType === "doctor" ? appointmentToManage?.doctor._id : appointmentToManage?.patient._id
    
        }

        addScheduleHistoryEntry(

            { ...appointmentToManage, status: "completed" },
            "completed",
            undefined,
            appointmentToManage?.status,
            performedBy,
            `Appointment for ${appointmentToManage?.date} at ${appointmentToManage?.time} marked as completed`

        )

        if(onClose){

            onClose()

        }else{

            closeManageModal()

        }

    }

    return { handleMarkAsCompleted }

}