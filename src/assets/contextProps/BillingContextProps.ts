import { BillableItem, BillingCalculations, BillingRecord, PaymentMethod } from "../types/BillingType"

export interface BillingContextProps{

    bill: BillingRecord | null
    items: BillableItem[]
    addItem: (item: BillableItem) => void
    removeItem: (id: string) => void
    paymentMethod: PaymentMethod | null
    setPaymentMethod: (method: PaymentMethod | null) => void
    discount: number
    setDiscount: (discount: number) => void
    calculations: BillingCalculations
    recalculate: () => void
    loading: boolean
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    description: string
    setDescription: (description: string) => void
    name: string
    setName: (name: string) => void
    price: number
    setPrice: (price: number) => void
    taxRate: number
    setTaxRate: (taxRate: number) => void
    invoice: BillingRecord | null
    sessionCount: number
    setSessionCount: (sessionCount: number) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    isEditing: boolean
    inputRef: React.RefObject<HTMLInputElement>
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    handleEditClick: () => void
    handleSave: () => void
    handleCancel: () => void
    submitBill: () => Promise<boolean>
    saveDraftBill: () => Promise<boolean>
    hasChanges: boolean

}