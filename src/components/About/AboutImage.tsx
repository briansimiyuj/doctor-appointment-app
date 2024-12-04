import { assets } from "../../assets/frontend/assets"

const AboutImage: React.FC = ()=>{

    return(

       <img src={assets.aboutImage} alt="About Image" className="w-full h-full object-cover max-w-[360px]"/>

    )

}

export default AboutImage