import { BillingRecord } from "../../../assets/types/BillingType"
import CardHeader from "./CardHeader"
import CardInputs from "./CardInputs"

interface CardPaymentFormProps{

    invoice: BillingRecord
    cardType: "visa" | "mastercard"

}

const CardPaymentForm: React.FC<CardPaymentFormProps> = ({ invoice, cardType })=>{

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <form className="space-y-4">

                <CardHeader invoice={invoice} cardType={cardType}/>

                <CardInputs cardType={cardType}/>

            </form>

        </div>

    )

}

export default CardPaymentForm