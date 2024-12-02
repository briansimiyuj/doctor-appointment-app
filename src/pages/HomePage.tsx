import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import SpecialityMenu from "../components/Speciality/SpecialityMenu"
import TopDoctors from "../components/TopDoctors/TopDoctors"

const HomePage: React.FC = ()=>{

    return(

        <>
        
            <Hero/>

            <SpecialityMenu/>

            <TopDoctors/>

            <Banner/>
        
        </>

    )

}

export default HomePage