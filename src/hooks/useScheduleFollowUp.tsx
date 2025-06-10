import { useState } from "react"
import { PendingFollowUp } from "../assets/types/PendingFollowUp"
import { useScheduleAppointment } from "./useScheduleAppointment"
import { AppointmentType } from "../assets/types/AppointmentType"

export const useScheduleFollowUp = () =>{

    const [pendingFollowUp, setPendingFollowUp] = useState<PendingFollowUp | null>(null),
          { scheduleAppointment } = useScheduleAppointment()

    const triggerFollowUpScheduling = (appointment: AppointmentType, followUpDate: string) =>{

        if(!followUpDate){

            alert('Please select a follow-up date')
            
            return

        }
    
       const defaultTime = appointment.time,
             consultationType = appointment.consultationType

       setPendingFollowUp({

            appointment,
            followUpDate,
            defaultTime,
            consultationType

        })
    
    }

    const confirmFollowUpScheduling = (
        
        appointment: AppointmentType,
        date: string,
        time: string,
        consultationType: "in-person" | "online"

    ) =>{
    
        scheduleAppointment({

          appointment,
          newDate: date,
          newTime: time,
          consultationType

        })

        setPendingFollowUp(null)
    
    }

    const cancelFollowUpScheduling = () =>{

        setPendingFollowUp(null)   
       
    }

    return{ pendingFollowUp, triggerFollowUpScheduling, confirmFollowUpScheduling, cancelFollowUpScheduling }

}
