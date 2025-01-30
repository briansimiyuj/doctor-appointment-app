import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import SpecialityMenu from "../components/Speciality/SpecialityMenu"
import TopDoctors from "../components/TopDoctors/TopDoctors"
import { LoginContext } from "../context/LoginContext"
import DoctorAppointments from "../components/Doctors/DoctorAppointments"

const HomePage: React.FC = ()=>{

    const loginContext = useContext(LoginContext)

    if (!loginContext) return null 

    const { userType } = loginContext

    if(userType === "doctor") console.log('working')

    return(

        <>
        
            <Hero/>

            {

                userType === "doctor" ? <DoctorAppointments/> : <SpecialityMenu/>

            }

            <TopDoctors/>

            <Banner/>
        
        </>

    )

}

export default HomePage