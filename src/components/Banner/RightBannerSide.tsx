import { useContext } from "react"
import { assets } from "../../assets/frontend/assets"
import { LoginContext } from "../../context/LoginContext"

const RightBannerSide: React.FC = ()=>{

    const context = useContext(LoginContext),
          userType = context?.userType

    return(

        <div className="hidden md:block md:w-1/2 lg:w-[500px] relative">

            <img 
                src={userType === "doctor" ? assets.analytics : assets.appointmentImage} 
                alt={userType === "doctor" ? "analytics" : "appointment"}
                className="w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[500px] object-contain absolute bottom-0 right-0 p-4"
            />

        </div>

    )

}

export default RightBannerSide