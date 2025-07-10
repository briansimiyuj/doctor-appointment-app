import PerformanceSummary from "../components/Dashboard/PerformanceSummary"
import StatsGrid from "../components/Dashboard/StatsGrid"

const DashboardPage: React.FC = ()=>{

    return(

        <div className="p-6 min-h-screen bg-white">

            <h1 className="text-2xl font-bold mb-6 text-gray-900">Doctor Dashboard</h1>

            <StatsGrid/>

            <PerformanceSummary/>

        </div>

    )

}

export default DashboardPage