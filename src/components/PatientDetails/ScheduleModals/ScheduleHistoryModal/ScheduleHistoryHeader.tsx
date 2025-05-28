interface ScheduleHistoryHeaderProps{

    actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "completed"
    timeStamp: string

}

const ScheduleHistoryHeader: React.FC<ScheduleHistoryHeaderProps> = ({ actionType, timeStamp })=>{
    
    const getActionLabel = (action: string) =>{
    
        switch(action){

           case "cancelled": return "Appointment Cancelled"
           case "rescheduled": return "Appointment Rescheduled"
           case "rejected": return "Appointment Rejected"
           case "approved": return "Appointment Approved"
           case "pending": return "Appointment Pending"
           case "completed": return "Appointment Completed"
           default: return "Appointment Updated"

        }
    
    }

    const getActionColor = (action: string) =>{

        switch(action){

            case "cancelled": return "text-red-600"
            case "rescheduled": return "text-blue-600"
            case "rejected": return "text-red-600"
            case "approved": return "text-green-600"
            case "pending": return "text-yellow-600"
            case "completed": return "text-gray-600"
            default: return "text-gray-600"

        }

    }

    return(

        <div className="flex items-start justify-between gap-4 mb-3">
            
            <h3 className={`font-medium ${getActionColor(actionType)}`}>

                { getActionLabel(actionType) }

            </h3>

            <span className="text-gray-500 text-sm">

                { new Date(timeStamp).toLocaleDateString() } at { new Date(timeStamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) }

            </span>

        </div>

    )

}

export default ScheduleHistoryHeader