import { FaCalculator, FaReceipt, FaTag } from "react-icons/fa"
import { useBillingContext } from "../../context/BillingContext"
import { useCurrencyContext } from "../../context/CurrencyContext"

const BillSummary: React.FC = ()=>{

    const { calculations } = useBillingContext(),
         { currencySymbol } = useCurrencyContext(),
         { subTotal, tax, discount, total } = calculations

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">

                    <FaCalculator className="text-blue-600 dark:text-blue-400"/>

                    Bill Summary

                </h2>

                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                    
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Draft</span>

                </div>

            </div>


            <div className="space-y-3">     

                <div className="flex justify-between">

                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>

                    <span className="font-medium">{currencySymbol}{subTotal.toFixed(2)}</span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">

                        <FaTag className="text-green-600"/>

                        Discount

                    </span>

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

export default BillSummary