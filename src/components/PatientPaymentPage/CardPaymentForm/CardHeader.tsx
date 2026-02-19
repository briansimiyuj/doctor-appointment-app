import { FaCreditCard, FaLock } from "react-icons/fa"
import { BillingRecord } from "../../../assets/types/BillingType"
import { useCurrencyContext } from "../../../context/CurrencyContext"

interface CardHeaderProps{

    invoice: BillingRecord
    cardType: "visa" | "mastercard" 

}

const CardHeader: React.FC<CardHeaderProps> = ({ invoice, cardType })=>{

    const { currencySymbol } = useCurrencyContext()

    return(

        <>
        
            <div className="flex flex-col xs:flex-row gap-3 items-center justify-between mb-6 py-3">

                <div className="flex flex-col xs:flex-row items-center gap-3">

                    <FaCreditCard className={`w-6 h-6 ${cardType === "visa" ? "text-blue-600" : "text-orange-600"}`}/>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        
                        {cardType === "visa" ? "Visa" : "Mastercard"} Payment

                    </h3>

                </div>

                <FaLock className="w-5 h-5 text-green-400"/>

            </div>

            <div className={`${cardType === "visa" ? "bg-blue-50 dark:bg-blue-900/20" : "bg-orange-50 dark:bg-orange-900/20"} p-4 rounded-lg mb-6`}>

                <p className={`${cardType === "visa" ? "text-blue-700" : "text-orange-700"} dark:text-${cardType === "visa" ? "blue" : "orange"}-300 font-medium mb-2`}>Amount: {currencySymbol }{invoice.total.toFixed(2)}</p>

            </div>
        
        </>

    )

}

export default CardHeader