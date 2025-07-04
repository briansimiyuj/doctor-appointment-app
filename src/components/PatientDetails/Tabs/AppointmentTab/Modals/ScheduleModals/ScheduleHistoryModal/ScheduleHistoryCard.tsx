import { ScheduleHistoryItem } from "../../../../../../../assets/types/ScheduleHistoryItem"
import ScheduleHistoryDetails from "./ScheduleHistoryDetails"
import ScheduleHistoryHeader from "./ScheduleHistoryHeader"
import ScheduleHistoryMetadata from "./ScheduleHistoryMetadata"

interface ScheduleHistoryCardProps{

    item: ScheduleHistoryItem
    index: number
    
}

const ScheduleHistoryCard: React.FC<ScheduleHistoryCardProps> = ({ item, index })=>{

    return(

        <div className="border rounded-lg p-4" key={index}>

            <ScheduleHistoryHeader actionType={item.actionType} timeStamp={item.timeStamp}/>

            <ScheduleHistoryDetails item={item}/>

            <ScheduleHistoryMetadata
                performedBy={item.performedBy}
                reason={item.reason}
                alternative={item.alternative}
                notes={item.notes}
            />

        </div>

    )

}

export default ScheduleHistoryCard