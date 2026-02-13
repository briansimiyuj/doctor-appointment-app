import { useParams } from "react-router-dom"
import { BillingContextProvider, useBillingContext } from "../context/BillingContext"
import { useProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import PaymentHeader from "../components/PaymentPage/PaymentHeader"
import InvoiceItemsList from "../components/PaymentPage/InvoiceItemsList"
import PaymentSummary from "../components/PaymentPage/PaymentSummary"

const PaymentPageContent: React.FC = ()=>{

    const { invoice } = useBillingContext()

    if(!invoice) return null

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">

            <div className="max-w-4xl mx-auto">

                <PaymentHeader invoice={invoice}/>

                <InvoiceItemsList invoice={invoice}/>

                <PaymentSummary invoice={invoice}/>

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