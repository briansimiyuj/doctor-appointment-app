import { useSchedule } from "../../context/ScheduleContext"
import { useScheduleManagement } from "../../hooks/useScheduleManagement"
import ScheduleSlots from "./ScheduleSlots"

const WeeklyCalendar: React.FC = ()=>{

    const { isChanged, handleSaveSchedule, isSaving } = useScheduleManagement(),
          { loading } = useSchedule()

    if(loading && !isSaving) return(

        <div className="flex items-center justify-center min-h-[200px]">

            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>

        </div>

    )


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
            >{isSaving ? "Saving..." : "Save"}</button>

        </div>

    )

}

export default WeeklyCalendar