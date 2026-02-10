import { useBillingContext } from "../../context/BillingContext"

const FooterButtons: React.FC = ()=>{

    const { setIsOpen, name, price } = useBillingContext()

    return(

        <div className="flex flex-col gap-3 pt-4">
            
            <button
                type="submit"
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                    name === "" || price === 0
                        ? "bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-secondary-bg dark:text-secondary-bg"
                }`}
                disabled={name === "" || price === 0}
            >Add Item</button>

            <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >Cancel</button>


        </div>

    )

}

export default FooterButtons 