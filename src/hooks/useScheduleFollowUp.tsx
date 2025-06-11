import { useState } from "react"
import { PendingFollowUp } from "../assets/types/PendingFollowUp"
import { useScheduleAppointment } from "./useScheduleAppointment"
import { AppointmentType } from "../assets/types/AppointmentType"
import { DummyAppointment } from "../assets/dummyData/DummyAppointment"
import { useAddNotes } from "../context/AddNotesContext"
import { useDatePicker } from "../context/DatePickerContext"

export const useScheduleFollowUp = () =>{

    const [pendingFollowUp, setPendingFollowUp] = useState<PendingFollowUp | null>(
        import.meta.env.VITE_DEV_MODE === "true" ? 
          {

            appointment: DummyAppointment,
            followUpDate: "2025-06-20",
            defaultTime: DummyAppointment.time,
            consultationType: DummyAppointment.consultationType

          } : null
    ),
          { scheduleAppointment } = useScheduleAppointment(),
          { setFollowUpDate } = useAddNotes(),
          { setSelectedDate } = useDatePicker()

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

        setFollowUpDate(date)

        setSelectedDate(new Date(date))

        setPendingFollowUp(null)
    
    }

    const cancelFollowUpScheduling = () =>{

        setPendingFollowUp(null)   
       
    }

    return{ pendingFollowUp, triggerFollowUpScheduling, confirmFollowUpScheduling, cancelFollowUpScheduling }

}
