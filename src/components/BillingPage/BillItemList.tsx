import { FaTrash } from "react-icons/fa"
import { useBillingContext } from "../../context/BillingContext"
import { useCurrencyContext } from "../../context/CurrencyContext"

const BillItemList: React.FC = ()=>{

    const { items, removeItem } = useBillingContext(),
          { currencySymbol } = useCurrencyContext()

    if(items.length === 0){
    
        return(

            <div className="text-center py-8">

                <p className="text-gray-500 dark:text-gray-400">No items added yet</p>

                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Consultation fee will be added automatically</p>

            </div>

        )
    
    }

    return(

        <div className="space-y-3">

            {

                items.map(item =>(

                    <div
                        key={item._id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >

                        <div className="flex-1 shadow-lg p-4 rounded-lg">

                            <div className="flex items-start justify-between">

                                <div>

                                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>

                                    {

                                        item.description &&(

                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>

                                        )

                                    }

                                    <div className="flex  flex-col text-sm">

                                        <span className="text-gray-600 dark:text-gray-400">Session: {item.sessionCount || 1}</span>

                                        <span className="text-gray-600 dark:text-gray-400">Tax: {item.taxRate}%</span>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <div className="font-bold text-gray-900 dark:text-white">

                                        {currencySymbol}{(item.price * (item.sessionCount || 1)).toFixed(2)}

                                    </div>

                                    <div className="text-sm text-gray-500 dark:text-gray-400">

                                        {currencySymbol}{item.price.toFixed(2)} each

                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-col mt-5">

                                <button
                                    onClick={() => removeItem(item._id)}
                                    className="flex items-center justify-center gap-2 px-3 py-2 bg-red-500 text-white dark:text-white rounded-lg hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-colors"
                                    title="Delete item"
                                >

                                    <FaTrash size={16}/>

                                    <span className="text-sm font-medium">Delete</span>

                                </button>
                            </div>

                        </div>
                        
                    </div>

                ))

            }

        </div>

    )

}

export default BillItemList