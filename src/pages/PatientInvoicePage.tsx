import { useProfileContext } from "../context/ProfileContext"
import { useNavigate, useParams } from "react-router-dom"
import NotFoundPage from "./NotFoundPage"
import { BillingContextProvider, useBillingContext } from "../context/BillingContext"
import PaymentHeader from "../components/PaymentPage/PaymentHeader"
import PaymentSummary from "../components/PaymentPage/PaymentSummary"
import InvoiceItemsList from "../components/PaymentPage/InvoiceItemsList"

const PatientInvoicePage: React.FC = ()=>{

    const { invoiceID, appointmentID } = useParams<{ invoiceID: string, appointmentID: string }>(),
          { profile } = useProfileContext(),
          navigate = useNavigate()

    if(profile?.type !== "patient") return <NotFoundPage/>

    if(!invoiceID || !appointmentID) return

    if(!invoiceID) return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">

            <div className="text-center">

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Invoice Not Found</h2>

                <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, we couldn't find the invoice you were looking for.</p>

                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold transition"
                >Go Back</button>

            </div>

        </div>

    )

    return(

        <BillingContextProvider appointmentID={appointmentID}>

            <PatientInvoiceContent/>

        </BillingContextProvider>

    )

}

export default PatientInvoicePage

const PatientInvoiceContent: React.FC = ()=>{

    const { invoice, loading } = useBillingContext()

    if(!invoice || loading) return <div>Loading...</div>

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">

            <div className="max-w-4xl mx-auto space-y-6">

                <PaymentHeader invoice={invoice}/>

                <InvoiceItemsList invoice={invoice}/>

                <PaymentSummary invoice={invoice}/>

            </div>

        </div>

    )

}