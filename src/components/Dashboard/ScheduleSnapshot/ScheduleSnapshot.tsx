import { useNavigate } from "react-router-dom"
import { useSchedule } from "../../../context/ScheduleContext"
import SlotList from "./SlotList"

const ScheduleSnapshot: React.FC = ()=>{

    const navigate = useNavigate(),
          { schedule } = useSchedule(),
          todayWorkingHours = schedule.workingHours,
          nextAvailableSlot = schedule.availableSlots.slice(0, 3)

    return(

        <div className="dark:bg-primary-bg bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-5">
       
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Schedule Snapshot </h2>

            <div className="mb-4">

                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Today's Working Hours</h3>
       
                <p className="text-gray-700 dark:text-white">{todayWorkingHours?.start} - {todayWorkingHours?.end}</p>


            </div>

            <SlotList slots={nextAvailableSlot}/>

            <button 
               className="bg-secondary-btn dark:text-white px-4 py-2 rounded hover:opacity-90"
               onClick={() => navigate("/schedule")}
            >Manage Schedule</button>
        
        </div>

    )

}

export default ScheduleSnapshot