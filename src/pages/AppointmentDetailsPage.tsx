import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import { LoginContext } from "../context/LoginContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import AppointmentHeader from "../components/AppointmentsDetails/AppointmentHeader"
import TabsNavigation from "../components/PatientDetails/TabsNavigation"
import { PatientDetailsProvider } from "../context/PatientDetailsContext"

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

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">

                <TabsNavigation/>

                </PatientDetailsProvider>  

            </div>

        </div>

    )

}

export default AppointmentDetailsPage