import { useEffect, useState } from "react"
import { BillingRecord } from "../../assets/types/BillingType"
import { FaCopy, FaCheck, FaCreditCard } from "react-icons/fa"
import { financialAssets, getMPESAAccount } from "../../assets/frontend/financialAssets"
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard"
import { useCurrencyContext } from "../../context/CurrencyContext"

interface PaymentInstructionsProps{

    invoice: BillingRecord

}

const PaymentInstructions: React.FC<PaymentInstructionsProps> = ({ invoice })=>{

    const [selectedMethod, setSelectedMethod] = useState<string | null>(null),
          [copied, setCopied] = useState<string | null>(null),
          { copy } = useCopyToClipboard(),
          { currencySymbol } = useCurrencyContext()

    useEffect(() =>{

        const method = localStorage.getItem("paymentMethod")
        setSelectedMethod(method)
    
    }, [])

    const handleCopy = async (text: string, field: string) =>{

        const success = await copy(text)

        if(success) setCopied(field)

        setTimeout(() => setCopied(null), 2000)
    
    }

    if(!selectedMethod) return null

    const renderMPESA = () =>{

        const mpesa = financialAssets.mpesa,
              accountRef = getMPESAAccount(invoice._id)

        return(

            <div className="space-y-4">

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">

                    <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">MPESA Payment Instructions</h3>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">

                        <li>Go to M-PESA on your phone</li>
                        <li>Select "Lipa Na M-PESA"</li>
                        <li>Enter Paybill: <span className="font-mono font-bold">{mpesa.paybill}</span></li>
                        <li>Enter Account Number: <span className="font-mono font-bold">{accountRef}</span></li>
                        <li>Enter Amount: <span className="font-bold">{currencySymbol}{invoice.total.toFixed(2)}</span></li>
                        <li>Enter your M-PESA PIN and confirm</li>

                    </ol>

                </div>

                <div className="flex gap-2">

                    <button
                        onClick={() => handleCopy(mpesa.paybill, 'paybill')}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    >

                        {copied === 'paybill' ? <FaCheck className="text-green-600"/> : <FaCopy/>}

                        Copy Paybill

                    </button>

                    <button
                        onClick={() => handleCopy(accountRef, 'account')}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    >

                        {copied === 'account' ? <FaCheck className="text-green-600"/> : <FaCopy/>}

                        Copy Account

                    </button>

                </div>

            </div>

        )

    }

    const renderVisa = () =>{

        const visa = financialAssets.visa

        return(

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">

                <div className="flex items-center gap-3 mb-3">

                    <FaCreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400"/>

                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">Visa Card Payment</h3>

                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">{visa.instructions}</p>

                <div className="space-y-2 text-sm">

                    <p><span className="font-medium">Accepted Cards:</span> {visa.supportedCards.join(', ')}</p>

                    <p><span className="font-medium">Supported Currencies:</span> {visa.currency}</p>

                </div>

                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">

                    <p className="text-center text-gray-600 dark:text-gray-400">

                        Amount: <span className="font-bold text-blue-600 dark:text-blue-400">

                            {currencySymbol}{invoice.total.toFixed(2)}

                        </span>

                    </p>

                </div>

            </div>

        )

    }

    const renderMastercard = () =>{

        const mastercard = financialAssets.mastercard

        return(

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">

                <div className="flex items-center gap-3 mb-3">

                    <FaCreditCard className="w-6 h-6 text-orange-600 dark:text-orange-400"/>

                    <h3 className="font-semibold text-orange-700 dark:text-orange-300">Mastercard Payment</h3>

                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">{mastercard.instructions}</p>

                <div className="space-y-2 text-sm">

                    <p><span className="font-medium">Accepted Cards:</span> {mastercard.supportedCards.join(', ')}</p>

                    <p><span className="font-medium">Supported Currencies:</span> {mastercard.currency}</p>

                </div>

                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">

                    <p className="text-center text-gray-600 dark:text-gray-400">

                        Amount: <span className="font-bold text-orange-600 dark:text-orange-400">

                            {currencySymbol}{invoice.total.toFixed(2)}

                        </span>

                    </p>

                </div>

            </div>

        )

    }

    const renderBankTransfer = () =>{

        const bank = financialAssets.bankTransfer.primary

        return(

            <div className="space-y-4">

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">

                    <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Bank Transfer Instructions</h3>

                    <div className="space-y-2 text-gray-700 dark:text-gray-300">

                        <p><span className="font-medium">Bank:</span> {bank.bankName}</p>

                        <p><span className="font-medium">Account Name:</span> {bank.accountName}</p>

                        <p><span className="font-medium">Account Number:</span> {bank.accountNumber}</p>

                        <p><span className="font-medium">Branch Code:</span> {bank.branchCode}</p>

                        <p><span className="font-medium">SWIFT Code:</span> {bank.swiftCode}</p>

                        <p className="mt-4 text-sm">Amount: <span className="font-bold">{currencySymbol}{invoice.total.toFixed(2)}</span></p>

                    </div>

                </div>

                <button
                    onClick={() => handleCopy(bank.accountNumber, 'bank')}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >

                    {copied === 'bank' ? <FaCheck className="text-green-600"/> : <FaCopy/>}

                    Copy Account Number

                </button>

            </div>

        )

    }

    const renderInsurance = () =>{

        const insurance = financialAssets.insurance

        return(

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">

                <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Insurance Claim Instructions</h3>

                <p className="text-gray-700 dark:text-gray-300 mb-2">{insurance.instructions}</p>

                <div className="mt-4 space-y-2">

                    <p><span className="font-medium">Claim Phone:</span> {insurance.claimPhone}</p>

                    <p><span className="font-medium">Email:</span> {insurance.email}</p>

                </div>

            </div>

        )

    }

    const renderSHA = () =>{

        const sha = financialAssets.sha

        return(

            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">

                <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">SHA Payment Instructions</h3>

                <p className="text-gray-700 dark:text-gray-300 mb-2">{sha.instructions}</p>

                {sha.membershipRequired && (

                    <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">

                        ⚠️ Valid SHA membership required

                    </p>

                )}

            </div>

        )

    }

    const renderCash = () =>{

        return(

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">

                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Cash Payment</h3>

                <p className="text-gray-600 dark:text-gray-400">{financialAssets.cash.instructions}</p>

            </div>

        )

    }

    const renderInstructions = () =>{

        switch(selectedMethod){

            case "MPESA": return renderMPESA()

            case "bankTransfer": return renderBankTransfer()

            case "insurance": return renderInsurance()

            case "SHA": return renderSHA()

            case "cash": return renderCash()

            case "visa": return renderVisa()

            case "mastercard": return renderMastercard()

            default: return null

        }

    }

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Payment Instructions</h2>

            {renderInstructions()}

        </div>

    )

}

export default PaymentInstructions