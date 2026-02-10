import { FaPlus, FaTimes } from "react-icons/fa"
import { useBillingContext } from "../../context/BillingContext"
import { useCurrencyContext } from "../../context/CurrencyContext"
import FooterButtons from "./FooterButtons"

const AddItemForm: React.FC = ()=>{

    const { name, setName, price, setPrice, description, setDescription, taxRate, setTaxRate, sessionCount, setSessionCount, isOpen, setIsOpen, handleSubmit } = useBillingContext(),
          { currencySymbol } = useCurrencyContext()

    if(!isOpen){
    
        return(

            <button
                className="w-full py-3 bg-primary-btn hover:bg-blue-700 text-secondary-bg dark:text-secondary-bg rounded-lg font-medium transition flex items-center justify-center gap-2"
                onClick={() => setIsOpen(true)}
            >

                <FaPlus/>

                <span>Add Item</span>

            </button>

        )
    
    }


    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <div className="flex items-center justify-between mb-6">

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add New Billable Item</h3>

                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >

                    <FaTimes size={20}/>

                </button>                

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>

                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Item Name *</label>

                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm md::text-base"
                        placeholder="e.g., Medication, Lab Test, Procedure"
                        required
                    />

                </div>

                <div>


                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>

                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm md::text-base"
                        placeholder="Optional description or details"
                        rows={4}
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div>

                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price * <span>({currencySymbol})</span></label>

                        <input
                            type="number"
                            min={0}
                            step="0.01"
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm md:text-base"
                            placeholder="e.g., 100.00"
                            required
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tax Rate (%)</label>

                        <input
                            type="number"
                            min={0}
                            max={10}
                            value={taxRate}
                            onChange={e => setTaxRate(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm md:text-base"
                            placeholder="10"
                        />

                    </div>

                    <div>

                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sessions/Quantity</label>

                        <input
                            type="number"
                            min={1}
                            value={sessionCount}
                            onChange={e => setSessionCount(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm md:text-base"
                            placeholder="1"
                            required
                        />

                    </div>

                </div>

                <FooterButtons/>

            </form>

        </div>

    )

}

export default AddItemForm