import { FaLock, FaSpinner } from "react-icons/fa"
import { BillingRecord } from "../../../assets/types/BillingType"
import { useCardPaymentContext } from "../../../context/CardPaymentContext"
import { useCurrencyContext } from "../../../context/CurrencyContext"

interface SubmitButtonProps{

    invoice: BillingRecord
    cardType: "visa" | "mastercard" 

}

const SubmitButton: React.FC<SubmitButtonProps> = ({ invoice, cardType })=>{

    const { loading, isFormValid } = useCardPaymentContext(),
          { currencySymbol } = useCurrencyContext()

    return(

        <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition disabled:opacity-50 mt-4 ${
                cardType === "visa" 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-orange-600 hover:bg-orange-700"
            } text-white dark:text-white ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >

            {

                loading ?(

                    <div className="text-xs xs:text-xl flex items-center gap-2">
                    
                        <FaSpinner className="animate-spin"/>

                        <span>Processing...</span>
         
                    </div>

                ):(

                    <div className="text-xs xs:text-xl flex items-center gap-2">

                        <FaLock className="w-4 h-4"/>

                        <span>Pay {currencySymbol}{invoice.total.toFixed(2)}</span>

                    </div>

                )

            }

        </button>

    )

}

export default SubmitButton