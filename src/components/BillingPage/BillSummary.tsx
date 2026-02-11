import { FaCalculator, FaReceipt, FaTag, FaEdit } from "react-icons/fa"
import { useBillingContext } from "../../context/BillingContext"
import { useCurrencyContext } from "../../context/CurrencyContext"

const BillSummary: React.FC = () =>{

    const { calculations, discount, setDiscount, isEditing, handleEditClick, handleSave, handleKeyDown, inputRef } = useBillingContext(),
          { currencySymbol } = useCurrencyContext(),
          { subTotal, tax, total } = calculations

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

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">

                        <FaTag className="text-green-600"/>

                        <span className="text-gray-600 dark:text-gray-400">Discount</span>

                    </div>

                    <div className="flex items-center gap-2">

                        {
                        
                            isEditing ?(

                                <div className="flex items-center gap-2">

                                    <input
                                        ref={inputRef}
                                        type="number"
                                        min={0}
                                        max={30}
                                        step={1}
                                        value={discount}
                                        onChange={e => setDiscount(Number(e.target.value))}
                                        className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-center text-sm"
                                        autoFocus
                                        onKeyDown={handleKeyDown}
                                        onBlur={handleSave}
                                    />

                                </div>

                            ):(

                                <>

                                    <span 
                                        className="font-medium text-green-600 cursor-pointer hover:text-green-700"
                                        onClick={() => handleEditClick()}
                                        title="Click to edit discount"
                                    >-{currencySymbol}{calculations.discount.toFixed(2)}</span>

                                    <button
                                        onClick={() => handleEditClick()}
                                        className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                                        title="Edit discount"
                                    >

                                        <FaEdit size={14}/>

                                    </button>

                                </>
                                
                            )
                            
                        }
                        
                    </div>
                    
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