import { BillingRecord } from "../types/BillingType"
import { CardDetailsType } from "../types/CardDetailsType"

export interface CardPaymentContextProps{

    cardDetails: CardDetailsType
    setCardDetails: (cardDetails: Partial<CardDetailsType>) => void
    loading: boolean
    error: string | null
    formatCardNumber: (cardNumber: string) => string
    validateCardForm: () => boolean
    isFormValid: boolean
    processCardPayment: (invoice: BillingRecord, cardType: "visa" | "mastercard") => Promise<boolean>
    resetCardForm: () => void
    years: number[]
    months: string[]

}