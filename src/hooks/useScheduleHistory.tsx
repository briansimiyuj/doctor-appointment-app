import { AppointmentType } from "../assets/types/AppointmentType"
import { ScheduleHistoryItem } from "../assets/types/ScheduleHistoryItem"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { v4 as uuid } from "uuid"

export const useScheduleHistory = ()=>{

    const { patientDetails } = usePatientDetails()

    const addScheduleHistoryEntry =(
        appointment: AppointmentType,
        actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "completed" | "follow-up",
        reason?: string,
        alternative?: string,
        performedBy?:{
            type: "doctor" | "patient" | "system"
            name?: string
            _id?: string
        },
        notes?: string
    ) =>{
    
       if(!patientDetails) return

       const patientID = patientDetails.patientInfo._id,
             existingHistory = localStorage.getItem(`scheduleHistory-${patientID}`),
             scheduleHistory: ScheduleHistoryItem[] = existingHistory ? JSON.parse(existingHistory) : [],

            newEntry: ScheduleHistoryItem ={

                _id: uuid(),
                appointment,
                actionType,
                timeStamp: new Date().toISOString(),
                reason,
                alternative,
                performedBy,
                notes

            }
    
        const updatedHistory = [newEntry, ...scheduleHistory]

        localStorage.setItem(`scheduleHistory-${patientID}`, JSON.stringify(updatedHistory))

    }

    const getScheduleHistory = (): ScheduleHistoryItem[] =>{

        if(!patientDetails) return []

        const patientID = patientDetails.patientInfo._id,
              scheduleHistory = localStorage.getItem(`scheduleHistory-${patientID}`)

        return scheduleHistory ? JSON.parse(scheduleHistory) : []

    }

    return { addScheduleHistoryEntry, getScheduleHistory }

}