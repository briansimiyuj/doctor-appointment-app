import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import SpecialityMenu from "../components/Speciality/SpecialityMenu"
import TopDoctors from "../components/TopDoctors/TopDoctors"
import { LoginContext } from "../context/LoginContext"
import DoctorAppointments from "../components/Doctors/DoctorAppointments"
import { AppointmentsContextProvider } from "../context/AppointmentContext"

const HomePage: React.FC = ()=>{

    const loginContext = useContext(LoginContext)

    if (!loginContext) return null 

    const { userType } = loginContext

    return(

        <>
        
            <Hero/>

            <AppointmentsContextProvider>

                {

                    userType === "doctor" ? <DoctorAppointments/> : <SpecialityMenu/>

                }
 
            </AppointmentsContextProvider>

            <TopDoctors/>

            <Banner/>
        
        </>

    )

}

export default HomePage