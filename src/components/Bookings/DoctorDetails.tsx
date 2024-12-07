import DoctorImage from "./DoctorImage"
import DoctorInfo from "./DoctorInfo"

const DoctorDetails: React.FC = ()=>{

    return(

        <div className="flex flex-col sm:flex-row gap-4">

            <DoctorImage/>

            <DoctorInfo/>   

        </div>

    )

}

export default DoctorDetails