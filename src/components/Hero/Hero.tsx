import { ProfileContextProvider } from "../../context/ProfileContext"
import LeftHero from "./LeftHero"
import RightHero from "./RightHero"

const Hero: React.FC = ()=>{

    return(

        <header className="flex flex-col md:flex-row bg-primary-bg flex-wrap rounded-lg px-6 md:px-10 lg:px-20">

            <ProfileContextProvider>
            
                <LeftHero/>

            </ProfileContextProvider>

            <RightHero/>

        </header>

    )

}

export default Hero