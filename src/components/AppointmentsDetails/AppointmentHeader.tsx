import DoctorBasicInfo from "./DoctorBasicInfo"
import DoctorImage from "./DoctorImage"

const AppointmentHeader: React.FC = ()=>{

    return(

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

            <div className="flex flex-col md:flex-row gap-6 items-center">

                <DoctorImage/>

                <DoctorBasicInfo/>

            </div>

        </div>

    )

}

export default AppointmentHeader