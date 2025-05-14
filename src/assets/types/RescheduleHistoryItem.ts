interface RescheduleHistoryItem{

    originalAppointment:{

        date: string
        time: string
        consultationType: "online" | "in-person"
        doctorName: string
        doctorID: string
        reason: string
        alternative?: string

    }

    newAppointment:{

        date: string
        time: string
        consultationType: "online" | "in-person"
        doctorName: string
        doctorID: string

    }

    timeStamp: string

}

const getRescheduduledHistory = (): RescheduleHistoryItem[] =>{

    const rescheduledHistory = localStorage.getItem("rescheduleHistory")

    if(!rescheduledHistory) return []

    try{

        const parsedHistory = JSON.parse(rescheduledHistory) 

        return parsedHistory

    }catch(error){

        console.log("Error parsing rescheduled history:", error)

        return []

    }

}

export const rescheduleHistory = getRescheduduledHistory()