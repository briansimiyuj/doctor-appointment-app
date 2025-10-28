import { DoctorReviewsContextProvider } from "../../context/DoctorReviewsContext"
import DoctorImage from "./DoctorImage"
import DoctorInfo from "./DoctorInfo"

const DoctorDetails: React.FC = ()=>{

    return(

        <div className="flex flex-col sm:flex-row gap-4">

            <DoctorImage/>

            <DoctorReviewsContextProvider>

                <DoctorInfo/>   

            </DoctorReviewsContextProvider> 

        </div>

    )

}

export default DoctorDetails