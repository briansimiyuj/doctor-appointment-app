import { assets } from "../../assets/frontend/assets"

const RightHero: React.FC = ()=>{

    return(

        <div className="md:w-1/2 relative">

            <img src={assets.heroImage} alt="hero image" className="w-full mt-12 rounded-lg"/>

        </div>

    )

}

export default RightHero