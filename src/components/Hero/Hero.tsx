import LeftHero from "./LeftHero"

const Hero: React.FC = ()=>{

    return(

        <header className="flex flex-col md:flex-row bg-primary-bg flex-wrap rounded-lg px-6 md:px-10 lg:px-20">

            <LeftHero/>

        </header>

    )

}

export default Hero