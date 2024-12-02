import { assets } from "../../assets/frontend/assets"

const RightBannerSide: React.FC = ()=>{

    return(

        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">

            <img src={assets.appointmentImage} alt="appointment image" className="w-full absolute bottom-0 right-0 max-w-md p-8"/>

        </div>

    )

}

export default RightBannerSide