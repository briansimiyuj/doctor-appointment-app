import { useContext } from "react"
import { BookingContext } from "../../context/BookingContext"
import { assets } from "../../assets/frontend/assets"

const DoctorInfo: React.FC = ()=>{

    const { doctorInfo } = useContext(BookingContext)

    return(

        <div className="flex-1 border-gray-400 border rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
 
            <h2 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                
                {doctorInfo?.name}

                <img src={assets.verifiedIcon} alt="verified icon" className="w-5 h-5"/>

            </h2>

        </div>

    )

}

export default DoctorInfo