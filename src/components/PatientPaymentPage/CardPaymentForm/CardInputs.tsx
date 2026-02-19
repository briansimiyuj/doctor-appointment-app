import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa"
import { useCardPaymentContext } from "../../../context/CardPaymentContext"
import { useState } from "react"

interface CardInputsProps{

    cardType: "visa" | "mastercard" 

}

const CardInputs: React.FC<CardInputsProps> = ({ cardType })=>{

    const { cardDetails, setCardDetails, loading, formatCardNumber, years, months } = useCardPaymentContext(),
          [seeCVV, setSeeCVV] = useState(false)

    setTimeout(() =>{

        if(seeCVV === true) setSeeCVV(false)
        
    }, 5000)

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    
       const formattedNumber = formatCardNumber(e.target.value)

       setCardDetails({  cardNumber: formattedNumber })
    
    }

    return(

        <div className="space-y-4">

            <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number:</label>

                <input
                    type="text"
                    value={cardDetails.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 text-sm sm:text-base ${
                        cardType === "visa" ? "focus:ring-blue-500" : "focus:ring-orange-500"
                    }`}
                    disabled={loading}
                    required
                />

            </div>

            <div>

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Holder Name:</label>
                
                <div className="relative">

                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>

                    <input
                        type="text"
                        value={cardDetails.cardHolderName}
                        onChange={e => setCardDetails({ cardHolderName: e.target.value.toUpperCase() })}
                        placeholder="JOHN DOE"
                        className={`w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 ${
                            cardType === "visa" ? "focus:ring-blue-500" : "focus:ring-orange-500"
                        }`}
                        disabled={loading}
                        required
                    />

                </div>

            </div>


            <div className="grid grid-cols-1 gap-4">

                <div>

                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date:</label>

                    <div className="flex gap-3 flex-col xs:flex-row">

                        <select
                            value={cardDetails.cardExpiryMonth}
                            onChange={e => setCardDetails({ cardExpiryMonth: e.target.value })}
                            className="flex-1 px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900"
                            disabled={loading}
                            required
                        >

                            <option value="">MM</option>

                            {

                                months.map((month, index) =>(

                                    <option key={month} value={(index + 1).toString().padStart(2, "0")}>

                                        {month}

                                    </option>

                                ))

                            }

                        </select>

                        <select
                            value={cardDetails.cardExpiryYear}
                            onChange={e => setCardDetails({ cardExpiryYear: e.target.value })}
                            className="flex-1 px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900"
                            disabled={loading}
                            required
                        >

                            <option value="">YYY</option>

                            {

                                years.map(year =>(

                                    <option key={year} value={year.toString()}>

                                        {year.toString()}

                                    </option>

                                ))

                            }

                        </select>

                    </div>

                </div>

                <div className="relative">

                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CVV:</label>

                    <input
                        type={seeCVV ? "text" : "password"}
                        
                        value={cardDetails.cardCVV}
                        onChange={(e) => setCardDetails({ cardCVV: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                        placeholder="123"
                        maxLength={4}
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 ${
                            cardType === "visa" ? "focus:ring-blue-500" : "focus:ring-orange-500"
                        }`}
                        disabled={loading}
                        required
                    />

                    <div className="absolute top-14 right-3 transform -translate-y-1/2">

                        { seeCVV ? <FaEyeSlash onClick={() => setSeeCVV(false)} className="text-gray-400 cursor-pointer" /> : <FaEye onClick={() => setSeeCVV(true)} className="text-gray-400 cursor-pointer" /> }

                    </div>

                </div>

            </div>

        </div>

    )

}

export default CardInputs