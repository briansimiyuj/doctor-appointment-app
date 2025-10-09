export interface ScheduleHistoryItem{

    appointmentID: string
    actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "cancelled" | "completed" | "follow-up"
    timeStamp: string
    reason?: string | null
    alternative?: string | null

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

    notes?: string | null

}   

export interface ScheduleHistory{

    patientID: string
    appointmentID: string
    history: ScheduleHistoryItem[]
    createdAt: string
    updatedAt: string

}