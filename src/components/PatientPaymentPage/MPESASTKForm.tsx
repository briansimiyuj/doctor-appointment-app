// components/PatientPaymentPage/MPESASTKForm.tsx
import { useState } from "react"
import { FaMobile, FaArrowRight, FaSpinner } from "react-icons/fa"
import { BillingRecord } from "../../assets/types/BillingType"
import { useCurrencyContext } from "../../context/CurrencyContext"

interface MPESASTKFormProps{

    invoice: BillingRecord
    onSuccess?: () => void

}

const MPESASTKForm: React.FC<MPESASTKFormProps> = ({ invoice, onSuccess })=>{

    const [phoneNumber, setPhoneNumber] = useState(""),
          [loading, setLoading] = useState(false),
          [error, setError] = useState(""),
          { currencySymbol } = useCurrencyContext()

    const validatePhone = (phone: string) =>{

        const cleaned = phone.replace(/\D/g, "")
        return cleaned.length >= 10 && cleaned.length <= 12

    }

    const handleSubmit = async (e: React.FormEvent) =>{

        e.preventDefault()
        
        if(!validatePhone(phoneNumber)){

            setError("Please enter a valid M-PESA phone number")
            return

        }

        setLoading(true)
        setError("")

        try{

            // TODO: Call your backend STK push endpoint
            console.log("Initiating STK Push for:", {
                phone: phoneNumber,
                amount: invoice.total,
                account: invoice._id.slice(0, 6)
            })

            await new Promise(resolve => setTimeout(resolve, 2000))
            
            onSuccess?.()
            
        }catch(error){

            setError("Failed to initiate payment. Please try again.")
        
        }finally{

            setLoading(false)
        
        }

    }

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <div className="flex items-center gap-3 mb-6">

                <FaMobile className="w-6 h-6 text-green-600 dark:text-green-400"/>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">M-PESA Express</h3>

            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">

                <p className="text-green-700 dark:text-green-300 font-medium mb-2">
                    Amount to Pay: {currencySymbol}{invoice.total.toFixed(2)}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    You will receive a prompt on your phone to enter your M-PESA PIN
                </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>

                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        M-PESA Phone Number
                    </label>

                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) =>{
                        
                            setPhoneNumber(e.target.value)

                            setError("")
                        
                        }}
                        placeholder="e.g., 0712345678 or 254712345678"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-green-500"
                        disabled={loading}
                        required
                    />

                    {error && (

                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>

                    )}

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition disabled:opacity-50"
                >

                    {loading ? (

                        <>

                            <FaSpinner className="animate-spin"/>

                            Processing...

                        </>

                    ):(

                        <div className="text-sm flex items-center gap-2 sm:text-xl text-white dark:text-white">

                            Pay with M-PESA

                            <FaArrowRight/>

                        </div>

                    )}

                </button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">

                    By continuing, you agree to receive an M-PESA prompt on your phone

                </p>

            </form>

        </div>

    )

}

export default MPESASTKForm