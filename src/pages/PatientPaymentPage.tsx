import { useProfileContext } from "../context/ProfileContext"
import { useNavigate, useParams } from "react-router-dom"
import NotFoundPage from "./NotFoundPage"
import { BillingContextProvider, useBillingContext } from "../context/BillingContext"
import PaymentHeader from "../components/PaymentPage/PaymentHeader"

const PatientPaymentPage: React.FC = ()=>{

    const { invoiceID, appointmentID } = useParams<{ invoiceID: string, appointmentID: string }>(),
          { profile } = useProfileContext(),
          navigate = useNavigate()

    if(profile?.type !== "patient") return <NotFoundPage/>

    if(!invoiceID || !appointmentID){
        
        return(

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">

                <div className="text-center">

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Information Not Found</h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, we couldn't process your payment at this time. Please try again later.</p>

                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold transition"
                    >Go Back</button>

                </div>

            </div>

        )

    }

    return(

        <BillingContextProvider appointmentID={appointmentID}>

            <PatientPaymentContent/>

        </BillingContextProvider>

    )

}

export default PatientPaymentPage

const PatientPaymentContent: React.FC = ()=>{

    const { invoice, loading } = useBillingContext()

    if(!invoice) return null

    if(loading) return <div>Loading...</div>
    
    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">

            <div className="max-w-4xl mx-auto space-y-6">

                <PaymentHeader invoice={invoice}/>

            </div>

        </div>

    )

}