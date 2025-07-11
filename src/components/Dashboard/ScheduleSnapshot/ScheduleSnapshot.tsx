import { useNavigate } from "react-router-dom"

const ScheduleSnapshot: React.FC = ()=>{

    const navigate = useNavigate()

    return(

        <div className="dark:bg-primary-bg bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-5">
       
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Schedule Snapshot </h2>

            <button 
               className="bg-secondary-btn dark:text-white px-4 py-2 rounded hover:opacity-90"
               onClick={() => navigate("/schedule")}
            >Manage Schedule</button>
        
        </div>

    )

}

export default ScheduleSnapshot