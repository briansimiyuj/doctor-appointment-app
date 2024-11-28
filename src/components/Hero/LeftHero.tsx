import { assets } from "../../assets/frontend/assets"

const LeftHero: React.FC = ()=>{

    return(

        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto md:py-[10vw] md:mb-[-30px]">

            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight"
            >Book Appointment <br/> With Trusted Doctors</h3>


            <div className="flex flex-col md:flex-row items-center gap-3 text-secondary-bg text-sm font-medium">

                <img src={assets.groupProfilePic} alt="group-profile-pic" className="w-28" />

                <p>MediCare Hub is a user-friendly platform that streamlines online appointment booking, connecting patients with doctors and specialists effortlessly. <br/> With a few simple steps, you can browse available slots, choose a provider, and confirm your appointment, making healthcare more accessible and convenient than ever.</p>

            </div>


            <a 
                href="#speciality" 
                className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-secondary-text text-sm md:m-0 hover:scale-105 transition-all duration-300 ease-in-out"        
            >

                Book Appointment

                <img src={assets.arrowIcon} alt="arrow-icon" className="w-3" />

            </a>

        </div>

    )

}

export default LeftHero