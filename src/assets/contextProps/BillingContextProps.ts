import { BillableItem, BillingCalculations, BillingRecord, PaymentMethod } from "../types/BillingType"

export interface BillingContextProps{

    bill: BillingRecord | null
    items: BillableItem[]
    addItem: (item: BillableItem) => void
    removeItem: (id: string) => void
    paymentMethod: PaymentMethod
    setPaymentMethod: (method: PaymentMethod) => void
    discount: number
    setDiscount: (discount: number) => void
    calculations: BillingCalculations
    recalculate: () => void
    loading: boolean

}