import { useContext } from "react"
import { BookingContext } from "../../context/BookingContext"

const DoctorImage: React.FC = ()=>{

    const context = useContext(BookingContext)
    
    if(!context) return null

    const { doctorInfo } = context

    return(

        <img src={doctorInfo?.image} alt={`${doctorInfo?.name} image`} className="w-full sm:max-w-72 rounded-lg bg-primary-bg"/>

    )

}

export default DoctorImage