import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import { LoginContext } from "../context/LoginContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import AppointmentHeader from "../components/AppointmentsDetails/AppointmentHeader"

const AppointmentDetailsPage: React.FC = ()=>{

    const profileContext = useContext(ProfileContext),
          loginContext = useContext(LoginContext)

    if(!profileContext || !loginContext) return null

    const { profile } = profileContext, 
          { isAuthenticated, loading } = loginContext,
          { appointment } = useAppointmentsContext()

    if(loading) return null

    if(profile?.type === "doctor" || !isAuthenticated){

        return(

            <NotFoundPage/>

        )

    }

    if(!appointment){

        return(

            <div className="container mx-auto px-4 py-8">

                <h1 className="text-2xl font-bold mb-4">No Appointment Found</h1>

                <p className="text-gray-600">Please check your appointments list.</p>

            </div>

        )

    }

    return(

        <div className="container mx-auto px-4 py-8">

            <AppointmentHeader/>

        </div>

    )

}

export default AppointmentDetailsPage