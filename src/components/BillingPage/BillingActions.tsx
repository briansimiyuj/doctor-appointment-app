import { FaPaperPlane, FaPrint, FaSave } from "react-icons/fa"
import { useBillingContext } from "../../context/BillingContext"

const BillingActions: React.FC = ()=>{

    const { items, loading, submitBill, saveDraftBill, bill } = useBillingContext(),
          hasItems = items.length > 0,
          isExistingDraft = !!bill

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-secondary-bg mb-4">Actions</h2>

            <div className="space-y-3">

                <button
                    disabled={!hasItems || loading}
                    className={`
                        w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2
                        ${hasItems && !loading
                        ? 'bg-blue-600 hover:bg-blue-700 text-secondary-bg'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }
                    `}
                    onClick={saveDraftBill}
                >

                    <FaSave/>

                    <span>{loading ? 'Saving...' : isExistingDraft ? 'Update Draft' : 'Save as Draft'}</span>

                </button>

                <button
                    disabled={!hasItems || loading}
                    className={`
                        w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2
                        ${hasItems && !loading
                        ? 'bg-green-600 hover:bg-green-700 text-secondary-bg'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }
                    `}
                    onClick={submitBill}
                >
 
                    <FaPaperPlane/>

                    <span>Submit Bill</span>

                </button>

                <button
                    disabled={!hasItems || loading}
                    className={`
                        w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2
                        ${hasItems && !loading
                        ? 'bg-purple-600 hover:bg-purple-700 text-secondary-bg'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }
                    `}
                >

                    <FaPrint/>

                    <span>Print Invoice</span>

                </button>

            </div>

        </div>

    )

}

export default BillingActions