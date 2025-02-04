import { useNavigate } from "react-router-dom"
import { DoctorStatsContextProvider } from "../../context/DoctorStatsContext"
import StatsGrid from "./StatsGrid"

const DoctorStats: React.FC = ()=>{

    const navigate = useNavigate()

    return(

        <DoctorStatsContextProvider>

            <div className="flex flex-col items-center gap-4">

               <h1 className="text-3xl font-bold">Your Performance Overview</h1>

               <StatsGrid/>

                <button 
                    className="bg-primary-bg text-white px-12 mt-10 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    onClick={()=> navigate("/dashboard")}
                >See All Statistics</button>
                
            </div>

        </DoctorStatsContextProvider>

    )

}

export default DoctorStats
