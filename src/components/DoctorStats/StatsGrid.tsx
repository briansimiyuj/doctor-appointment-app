import { useDoctorStats } from "../../context/DoctorStatsContext"
import StatCard from "./StatCard"

const StatsGrid: React.FC = ()=>{
    
    const { stats, ratings } = useDoctorStats()

    return(

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mt-8">

            <StatCard title="Total Appointments" value={stats.totalPatients}/>

            <StatCard title="Today's Appointments" value={stats.todayAppointments}/>

            <StatCard title="Completed Appointments" value={stats.completedAppointments}/>

            <StatCard title="Overall Ratings" value={ratings.average}/>

        </div>

    )

}

export default StatsGrid