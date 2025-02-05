import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import { createBannerContent } from "./bannerContent"

const LeftBannerSide: React.FC = ()=>{

    const navigate = useNavigate(),
          loginContext = useContext(LoginContext),
          { doctorContent, patientContent } = createBannerContent(navigate)
          
    if(!loginContext){
    
        throw new Error('LoginContext is undefined')

    }

    const { isAuthenticated, userType } = loginContext,
          content = userType === "doctor" ? doctorContent : patientContent

    return(

        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold banner-text">

                <h3>{content.heading}</h3>

                <h2 className="mt-4">{content.subHeading}</h2>

            </div>

            
            {

                isAuthenticated ?(

                    <button
                        className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
                        onClick={content?.buttonAction ? content.buttonAction : undefined}
                    >{content.buttonText}</button>

                ):(

                    <button
                        className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
                        onClick={()=>navigate("/login")}
                    >{content.buttonText}</button>
                )

            }
            
        </div>

    )

}

export default LeftBannerSide