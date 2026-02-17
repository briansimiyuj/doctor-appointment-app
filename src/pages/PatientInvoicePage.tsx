import { useNavigate, useParams } from "react-router-dom"
import { useProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import { BillingContextProvider } from "../context/BillingContext"

const PatientInvoicePage: React.FC = ()=>{

    const { invoiceID } = useParams<{ invoiceID: string }>(),
          { profile } = useProfileContext(),
          navigate = useNavigate()

    if(profile?.type !== "patient") return <NotFoundPage/>

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

        <BillingContextProvider appointmentID={invoiceID}>

            <PatientInvoiceContent/>

        </BillingContextProvider>

    )

}

export default PatientInvoicePage

const PatientInvoiceContent: React.FC = ()=>{

    return(

        <h1>PatientInvoiceContent</h1>

    )

}