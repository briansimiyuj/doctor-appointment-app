import Hero from "../components/Hero/Hero"
import SpecialityMenu from "../components/Speciality/SpecialityMenu"
import TopDoctors from "../components/TopDoctors/TopDoctors"

const HomePage: React.FC = ()=>{

    return(

        <>
        
            <Hero/>

            <SpecialityMenu/>

            <TopDoctors/>
        
        </>

    )

}

export default HomePage