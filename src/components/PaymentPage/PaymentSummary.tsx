// components/PaymentPage/PaymentSummary.tsx
import { FaCalculator, FaReceipt, FaTag } from "react-icons/fa"
import { useCurrencyContext } from "../../context/CurrencyContext"
import { BillingRecord } from "../../assets/types/BillingType"

interface PaymentSummaryProps{
    
    invoice: BillingRecord

}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ invoice }) =>{

    const { currencySymbol } = useCurrencyContext(),
          { subTotal, tax, discount, total } = invoice

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <div className="flex items-center flex-col xs:flex-row gap-2 justify-between mb-6">

                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">

                    <FaCalculator className="text-blue-600 dark:text-blue-400"/>

                    Payment Summary

                </h2>

                <div className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                    
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">{invoice.status === "paid" ? "Paid" : "Pending"}</span>

                </div>

            </div>

            <div className="space-y-3">     

                <div className="flex justify-between">

                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>

                    <span className="font-medium">{currencySymbol}{subTotal.toFixed(2)}</span>

                </div>

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">

                        <FaTag className="text-green-600"/>

                        <span className="text-gray-600 dark:text-gray-400">Discount</span>

                    </div>

                    <span className="font-medium text-green-600">-{currencySymbol}{discount.toFixed(2)}</span>
                    
                </div>

                <div className="flex justify-between">

                    <span className="text-gray-600 dark:text-gray-400">Tax</span>
                    
                    <span className="font-medium">{currencySymbol}{tax.toFixed(2)}</span>

                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">

                    <div className="flex justify-between">
                        
                        <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>

                        <div className="flex items-center gap-2">

                            <FaReceipt className="text-purple-600"/>

                            <span className="text-xl font-bold text-purple-600 dark:text-purple-400">

                                {currencySymbol}{total.toFixed(2)}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default PaymentSummary