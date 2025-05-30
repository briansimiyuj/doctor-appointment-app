import LeftBannerSide from "./LeftBannerSide"
import RightBannerSide from "./RightBannerSide"

const Banner: React.FC = ()=>{

    return(

        <div className="flex bg-primary-bg rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">

            <LeftBannerSide/>

            <RightBannerSide/>

        </div>

    )

}

export default Banner