import AddItemForm from "../components/BillingPage/AddItemForm"
import BillingHeader from "../components/BillingPage/BillingHeader"
import BillItemList from "../components/BillingPage/BillItemList"
import BillSummary from "../components/BillingPage/BillSummary"
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

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                            <div className="lg:col-span-2 space-y-6">

                                <AddItemForm/>

                               <BillItemList/>

                            </div>

                            <div className="space-y-6">

                                <BillSummary/>

                            </div>

                        </div>

                </div>

            </div>

        </BillingContextProvider>

    )

}

export default BillingPage