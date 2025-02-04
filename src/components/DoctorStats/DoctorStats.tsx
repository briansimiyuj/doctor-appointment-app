import { DoctorStatsContextProvider } from "../../context/DoctorStatsContext"

const DoctorStats: React.FC = ()=>{

    return(

        <DoctorStatsContextProvider>

            <h1>DoctorStats</h1>

        </DoctorStatsContextProvider>

    )

}

export default DoctorStats