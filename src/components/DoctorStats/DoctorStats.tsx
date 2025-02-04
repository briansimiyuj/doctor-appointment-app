import { DoctorStatsContextProvider } from "../../context/DoctorStatsContext"
import StatsGrid from "./StatsGrid"

const DoctorStats: React.FC = ()=>{

    return(

        <DoctorStatsContextProvider>

            <div className="flex flex-col items-center gap-4">

               <h1 className="text-3xl font-bold">Your Performance Overview</h1>

               <StatsGrid/>
                
            </div>

        </DoctorStatsContextProvider>

    )

}

export default DoctorStats