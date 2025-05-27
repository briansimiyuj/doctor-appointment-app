import { AppointmentType } from "./AppointmentType"

export interface ScheduleHistoryItem{

    _id: string
    appointment: AppointmentType
    actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "cancelled" | "completed"
    timeStamp: string
    reason?: string
    alternative?: string

    previousValues?:{

        date?: string
        time?: string
        consultationType?: "in-person" | "online"
        doctorName?: string

    }

    performedBy?:{

        type: "doctor" | "patient" | "system"
        name?: string
        _id?: string

    }

    rescheduleDetails?:{

        originalAppointment:{

            date: string
            time: string
            consultationType: "in-person" | "online"
            doctorName: string
            doctorID: string

        }

        newAppointment:{

            date: string
            time: string
            consultationType: "in-person" | "online"
            doctorName: string
            doctorID: string

        }

    }

    notes?: string

}   

export interface ScheduleHistory{

    patientID: string
    appointmentID: string
    history: ScheduleHistoryItem[]
    createdAt: string
    updatedAt: string

}