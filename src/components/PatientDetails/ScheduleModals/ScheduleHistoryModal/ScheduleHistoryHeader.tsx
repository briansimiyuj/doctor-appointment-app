interface ScheduleHistoryHeaderProps{

    actionType: "cancelled" | "rescheduled" | "rejected" | "approved" | "pending" | "completed"
    timeStamp: string

}

const ScheduleHistoryHeader: React.FC<ScheduleHistoryHeaderProps> = ({ actionType, timeStamp })=>{

    return(

        <h1>ScheduleHistoryHeader</h1>

    )

}

export default ScheduleHistoryHeader