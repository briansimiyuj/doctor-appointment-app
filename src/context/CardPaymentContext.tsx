import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { CardPaymentContextProps } from "../assets/contextProps/CardPaymentContextProps"
import { CardDetailsType } from "../assets/types/CardDetailsType"
import { useToast } from "../hooks/useToast"
import { BillingRecord } from "../assets/types/BillingType"
import { useBillingContext } from "./BillingContext"

interface PaymentContextProviderProps{

    children: React.ReactNode
    cardType: "visa" | "mastercard" 

}

export const CardPaymentContext = createContext<CardPaymentContextProps | undefined>(undefined)

export const CardPaymentContextProvider:React.FC<PaymentContextProviderProps> = ({ children, cardType })=>{

    const [cardDetails, setCardDetailsState] = useState<CardDetailsType>({

        cardNumber: '',
        cardHolderName: '',
        cardExpiryMonth: '',
        cardExpiryYear: '', 
        cardCVV: ''

    }),
          [loading, setLoading] = useState<boolean>(false),
          [error, setError] = useState<string | null>(null),
          [isFormValid, setIsFormValid] = useState<boolean>(false),
          { invoice } = useBillingContext(),
          { showToast } = useToast()

    useEffect(() =>{

        const isCardNumberValid = cardDetails.cardNumber.replace(/\s/g, '').length === 16,
              isNameValid = cardDetails.cardHolderName.trim().length > 0,
              isMonthValid = cardDetails.cardExpiryMonth.length === 2,
              isYearValid = cardDetails.cardExpiryYear.length === 4,
              isCVVValid = cardDetails.cardCVV.length >= 3

        setIsFormValid(
            isCardNumberValid && 
            isNameValid && 
            isMonthValid && 
            isYearValid && 
            isCVVValid
        )

    }, [cardDetails])

    const setCardDetails = useCallback((details: Partial<CardDetailsType>) =>{
    
        setCardDetailsState(prevState => ({...prevState, ...details}))
    
    }, [])

    const formatCardNumber = useCallback((value: string) =>{
    
        const cleaned = value.replace(/\D/g, ''),
              group = cleaned.match(/.{1,4}/g)

        return group ? group.join(' ') : cleaned
    
    }, [])

    const validateCardForm = useCallback(() =>{
    
        if(cardDetails.cardNumber.replace(/\s/g, '').length < 16){

            setError('Please enter a valid 16-digit card number')

            showToast("Please enter a valid 16-digit card number", "error")

            return false

        } 

        if(!cardDetails.cardHolderName.trim()){

            setError('Please enter the card holder name')

            showToast("Please enter the card holder name", "error")

            return false

        }

        if(!cardDetails.cardExpiryMonth || !cardDetails.cardExpiryYear){

            setError('Please enter the card expiry date')

            showToast("Please enter the card expiry date", "error")

            return false

        }

        if(cardDetails.cardCVV.length < 3){

            setError('Please enter a valid 3-digit CVV')

            showToast("Please enter a valid 3-digit CVV", "error")

            return false
        }

        return true
    
    }, [cardDetails])

    const processCardPayment = useCallback(async (
        invoice: BillingRecord,
        cardType: "visa" | "mastercard" 
    ):  Promise<boolean> =>{
    
        setLoading(true)

        setError(null)

        try{
        
            console.log(`Processing ${cardType} payment for:, {
            
                amount: ${invoice.total},
                last4: ${cardDetails.cardNumber.slice(-4)},
                cardHolder: ${cardDetails.cardHolderName}
            
            }}`)

            await new Promise(resolve => setTimeout(resolve, 2000))

            //TODO: Add payment processing logic here

            showToast("Payment successful", "success")

            return true
        
        }catch(error){

           setError('Payment failed. Please try again later')

           showToast("Payment failed. Please try again later", "error")

           return false
        
        }finally{

            setLoading(false)

        }
    
    }, [cardDetails])

    const resetCardForm = useCallback(() =>{
    
        setCardDetailsState({

            cardNumber: '',
            cardHolderName: '',
            cardExpiryMonth: '',
            cardExpiryYear: '',
            cardCVV: ''

        }) 
    
    }, [])

    const handleSubmit = async(e: React.FormEvent) =>{

        if(!invoice) return
    
        e.preventDefault()

        validateCardForm()

        processCardPayment(invoice, cardType)
    
    }

    const currentYear = new Date().getFullYear(),
          years = Array.from({length: 10}, (_, i) => currentYear + i),
          months = Array.from({ length: 12 }, (_, i) => new Date(2000, i, 1).toLocaleString('default', { month: 'short' }))

    const contextValue: CardPaymentContextProps ={

        cardDetails,
        setCardDetails,
        loading,
        error,
        isFormValid,
        formatCardNumber,
        validateCardForm,
        processCardPayment,
        resetCardForm,
        years,
        months,
        handleSubmit

    }

    return(

        <CardPaymentContext.Provider value={contextValue}>

            {children}

        </CardPaymentContext.Provider>

    )

}

export const useCardPaymentContext = () =>{

    const context = useContext(CardPaymentContext)

    if(!context) throw new Error('usePaymentContext must be used within PaymentContextProvider')

    return context

}