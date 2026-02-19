import { useCardPaymentContext } from "../../../context/CardPaymentContext"

const ErrorMessage: React.FC = ()=>{

    const { error } = useCardPaymentContext()

    if(!error) return null

    return(

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mt-2">

            <p className="text-sm text-red-600 dark:text-red-400 text-center">{error}</p>

        </div>

    )

}

export default ErrorMessage