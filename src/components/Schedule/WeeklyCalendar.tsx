import { useSchedule } from "../../context/ScheduleContext"
import { useScheduleManagement } from "../../hooks/useScheduleManagement"
import ScheduleSlots from "./ScheduleSlots"

const WeeklyCalendar: React.FC = ()=>{

    const { isChanged, handleSaveSchedule } = useScheduleManagement(),
          { loading } = useSchedule()


    return(

        <div className="w-full rounded-lg shadow p-4 bg-primary-bg sm:p-6">

            <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>

            <ScheduleSlots/>

            <button 
                disabled={!isChanged}
                className={`w-full px-6 py-3 mt-9 text-base rounded-md transition-all duration-300 ease-in-out sm:w-full sm:px-8 sm:py-4 sm:text-lg ${
                    isChanged 
                        ? "bg-secondary-bg text-primary-bg hover:bg-white" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleSaveSchedule}
            >{loading ? "Saving..." : "Save"}</button>

        </div>

    )

}

export default WeeklyCalendar