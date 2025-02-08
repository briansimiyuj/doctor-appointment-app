import WeeklyCalender from "../components/Schedule/WeeklyCalendar"
import { ScheduleProvider } from "../context/ScheduleContext"

const SchedulePage: React.FC = ()=>{

    return(

        <ScheduleProvider>

            <WeeklyCalender/>

        </ScheduleProvider>

    )

}

export default SchedulePage