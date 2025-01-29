import { useContext } from "react"
import { assets } from "../../assets/frontend/assets"
import { LoginContext } from "../../context/LoginContext"
import { createHeroContent } from "./heroContent"
import { useNavigate } from "react-router-dom"

const LeftHero: React.FC = ()=>{

    const loginContext = useContext(LoginContext),  
          isAuthenticated = loginContext?.isAuthenticated,
          userType = loginContext?.userType,
          navigate = useNavigate(),
          { doctor, patient } = createHeroContent(navigate),
          content = isAuthenticated ? (userType === "patient" ? patient : doctor) : doctor

    console.log(userType)

    return(

        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto md:py-[10vw] md:mb-[-30px]">

            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight hero-heading"
            >{content.heading}</h3>


            <div className="flex flex-col md:flex-row items-center gap-3 text-secondary-bg text-sm font-medium">

                <img src={assets.groupProfilePic} alt="group-profile-pic" className="w-28" />

                <p>{content.subtext}</p>

            </div>


            <button
                className="flex items-center gap-2 bg-white px-8 py-3 md:mt-16 text-base md:text-2xl rounded-full text-secondary-text md:m-0 hover:scale-105 transition-all duration-300 ease-in-out"   
                onClick={content.buttonAction}     
            >

                {content.buttonText}

                <img src={assets.arrowIcon} alt="arrow-icon" className="w-3" />

            </button>

        </div>

    )

}

export default LeftHero