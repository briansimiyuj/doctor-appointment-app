import { BillingRecord } from "../../assets/types/BillingType"
import { useCurrencyContext } from "../../context/CurrencyContext"

interface InvoiceItemsListProps{

    invoice: BillingRecord

}

const InvoiceItemsList: React.FC<InvoiceItemsListProps> = ({ invoice })=>{

    const { currencySymbol } = useCurrencyContext(),
          itemList = invoice.itemList

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Items</h2>

            <div className="space-y-3">

                {

                    itemList.map(item =>(

                        <div key={item._id} className="flex flex-col xs:flex-row justify-between items-start xs:items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">

                            <div>

                                <p className="font-medium text-xl text-gray-900 dark:text-white">{item.name}</p>

                                {

                                    item.description && <p className="font-semibold text-gray-500 dark:text-gray-400">{item.description}</p>

                                }

                                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">

                                    {item.sessionCount} x {currencySymbol}{item.price.toFixed(2)} • Tax: {item.taxRate}%

                                </p>

                            </div>

                            <div className="mt-2">

                                <p className="text-lg font-medium text-gray-900 dark:text-white">

                                    {currencySymbol}{(item.price * item.sessionCount).toFixed(2)}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default InvoiceItemsList