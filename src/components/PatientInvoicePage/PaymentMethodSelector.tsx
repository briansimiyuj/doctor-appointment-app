import { useState } from "react"
import { paymentMethods } from "../../assets/frontend/assets"
import { BillingRecord, PaymentMethod } from "../../assets/types/BillingType"
import { useBillingContext } from "../../context/BillingContext"
import { BiChevronDown } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

interface PaymentMethodSelectorProps{

    onSelect: (method: PaymentMethod) => void
    invoice: BillingRecord

}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ onSelect, invoice })=>{

    const { paymentMethod, setPaymentMethod } = useBillingContext(),    
          [isExpanded, setIsExpanded] = useState(false),
          invoiceID = invoice._id,
          appointmentID = invoice.appointmentID,
          navigate = useNavigate()

    const handleSelect = (method: PaymentMethod) =>{
    
       setPaymentMethod(method)

       onSelect(method)
       
       setIsExpanded(false)
    
    }

    const proceedToPayment = () =>{
    
        if(!paymentMethod) return

        localStorage.setItem("paymentMethod", paymentMethod.method)

        navigate(`/payment/${invoiceID}/${appointmentID}`)
    
    }

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Payment Method</h2>

            {

                paymentMethod ?(

                    <div className="mb-6">

                        <div
                            className="w-full flex flex-col gap-2 sm:flex-row items-center justify-between px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 cursor-pointer"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >

                            {

                                paymentMethods.map((item, index) =>{

                                    if(paymentMethod.method !== item.method) return null

                                    return(

                                        <div key={index} className="flex items-center gap-3">

                                            <img
                                                className="w-8 h-8 object-contain"
                                                src={item.image}
                                                alt={item.method || item.label}
                                            />

                                            <span className="text-gray-900 dark:text-white font-medium">{item.label}</span>

                                        </div>

                                    )

                                })

                            }

                            <div className="flex items-center gap-3">

                                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Selected</span>

                                <BiChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />

                            </div>

                        </div>

                    </div>

                ):(

                    <button
                        className="w-full mb-6 py-3 px-4 rounded-lg font-medium bg-primary-btn hover:bg-blue-700 text-white dark:text-white transition"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >Add a payment method</button>

                )

            }

            {

                isExpanded && (

                    <div className="space-y-3 mb-6">

                        {

                            paymentMethods.map((item, index) =>{

                                if(paymentMethod?.method === item.method) return null

                                return(

                                    <button
                                        key={index}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700"
                                        onClick={() => handleSelect(item)}
                                    >

                                        <div className="flex items-center gap-3">

                                            <img
                                                className="w-8 h-8 object-contain"
                                                src={item.image}
                                                alt={item.method || item.label}
                                            />

                                            <span className="text-gray-900 dark:text-white font-medium">{item.label}</span>

                                        </div>

                                    </button>

                                )

                            })

                        }

                    </div>

                )

            }

            <button
                disabled={!paymentMethod}
                className={`w-full py-3 px-4 rounded-lg font-medium transition ${
                    paymentMethod
                        ? 'bg-green-600 hover:bg-green-700 text-white dark:text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
                onClick={proceedToPayment}
            >Continue to Payment</button>

        </div>

    )

}

export default PaymentMethodSelector