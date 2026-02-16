import { useParams } from "react-router-dom"
import { BillingContextProvider, useBillingContext } from "../context/BillingContext"
import { useProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import PaymentHeader from "../components/PaymentPage/PaymentHeader"
import InvoiceItemsList from "../components/PaymentPage/InvoiceItemsList"
import PaymentSummary from "../components/PaymentPage/PaymentSummary"
import PaymentActions from "../components/PaymentPage/PaymentActions"
import PatientContact from "../components/PaymentPage/PatientContact"

const PaymentPageContent: React.FC = ()=>{

    const { invoice } = useBillingContext()

    if(!invoice) return null

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">

            <div className="max-w-6xl mx-auto">

                <PaymentHeader invoice={invoice}/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                    <div className="lg:col-span-2 space-y-6">

                        <InvoiceItemsList invoice={invoice}/>

                        <PaymentSummary invoice={invoice}/>

                    </div>

                    <div className="space-y-6">

                        <PatientContact invoice={invoice}/>

                        <PaymentActions invoice={invoice}/>

                    </div>

                </div>

            </div>

        </div>

    )

}

const PaymentPage: React.FC = ()=>{
    
    const { appointmentID } = useParams<{ appointmentID: string }>(),
          { profile } = useProfileContext()

    if(!appointmentID) return <NotFoundPage/>

    if(profile?.type !== "doctor") return <NotFoundPage/>

    return(

        <BillingContextProvider appointmentID={appointmentID}>

            <PaymentPageContent/>

        </BillingContextProvider>

    )

}

export default PaymentPage