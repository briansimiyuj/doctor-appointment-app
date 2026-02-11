export interface BillableItem{

    _id: string
    name: string
    description?: string
    price: number
    sessionCount: number
    taxRate: number

}

export type PaymentMethod = "creditCard" | "insurance" | "cash" | "SHA" | "bankTransfer" | "MPESA"

export interface BillingRecord{
    
    _id: string
    appointmentID: string
    patientID: string
    doctorID: string
    status: "pending" | "paid" | "cancelled" | "draft"
    subTotal: number
    tax: number
    discount: number
    total: number
    currency: string
    exchangeRate: number
    itemList: BillableItem[]
    paymentMethod?: PaymentMethod
    createdAt: Date
    updatedAt: Date

}

export interface BillingFormData{
     
    items: BillableItem[]
    paymentMethod: PaymentMethod
    discount: number
    notes?: string

}

export interface BillingCalculations{

    subTotal: number
    tax: number
    discount: number
    total: number

}