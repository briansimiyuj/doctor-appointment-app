import BillingHeader from "../components/BillingPage/BillingHeader"
import { useAppointmentsContext } from "../context/AppointmentContext"
import { BillingContextProvider } from "../context/BillingContext"
import { useProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"

const BillingPage: React.FC = ()=>{
    
    const { appointmentID } = useAppointmentsContext(),
          { profile } = useProfileContext()

    if(!appointmentID) return null

    if(profile?.type !== "doctor") return <NotFoundPage/>

    return(

        <BillingContextProvider appointmentID={appointmentID}>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">

                <div className="max-w-6xl mx-auto">

                    <BillingHeader appointmentID={appointmentID}/>

                </div>

            </div>

        </BillingContextProvider>

    )

}

export default BillingPage