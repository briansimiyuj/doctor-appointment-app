import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { BillingContextProps } from "../assets/contextProps/BillingContextProps"
import { useProfileContext } from "./ProfileContext"
import { BillableItem, BillingRecord, PaymentMethod } from "../assets/types/BillingType"
import { v4 as uuidv4 } from "uuid"

interface BillingContextProviderProps{

    children: React.ReactNode
    appointmentID: string

}

export const BillingContext = createContext<BillingContextProps | undefined>(undefined)

export const BillingContextProvider:React.FC<BillingContextProviderProps> = ({ children, appointmentID })=>{

    const { profile } = useProfileContext(),
          [bill, setBill] = useState<BillingRecord | null>(null),
          [items, setItems] = useState<BillableItem[]>([]),
          [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash'),
          [discount, setDiscount] = useState<number>(0),
          [loading, setLoading] = useState<boolean>(false),
          [isOpen, setIsOpen] = useState<boolean>(false),
          [name, setName] = useState<string>(''),
          [description, setDescription] = useState<string>(''),
          [price, setPrice] = useState<number>(0),
          [taxRate, setTaxRate] = useState<number>(10),
          [sessionCount, setSessionCount] = useState<number>(1)

    const calculations = useMemo(()=>{

        const subTotal = items.reduce((sum, item) => sum + (item.price * (item.sessionCount || 1)), 0),
              tax = items.reduce((sum, item) => sum + (item.price * (item.sessionCount || 0) / 100), 0),
              total = subTotal + tax - discount

        return { subTotal, tax, total, discount }

        
    }, [items, discount])

    useEffect(() =>{
    
        if(profile?.type !== "doctor") return

        if(profile.fees && items.length === 0){
        
            const consultationFee: BillableItem ={

                _id: uuidv4(),
                name: "Consultation Fee",
                description: `Doctor consultation - ${profile.speciality || "General Practitioner"}`,
                price: profile.fees, 
                taxRate: 10, 
                sessionCount: 1

            }

            addItem(consultationFee)
        
        }
    
    }, [profile])

    const addItem = useCallback((item: BillableItem)=>{

        setItems(prev => [...prev, { ...item, id: item._id || uuidv4() }])
        
    }, [])

    const removeItem = useCallback((id: string)=>{

        setItems(prev => prev.filter(item => item._id !== id))

    }, [])

    const recalculate = useCallback(()=>{

        console.log('Recalculating bill')

    }, [])

    useEffect(() =>{
    
        const loadExistingBill = async() =>{
        
            if(!appointmentID) return

            setLoading(true)

            try{
            
                //TODO: Load existing bill from database
            
            }catch(error){
            
                console.error('Failed to load bill', error)
            
            }finally{
            
                setLoading(false)
            
            }
        
        }

        loadExistingBill()
    
    }, [appointmentID])

    const handleSubmit = async(e: React.FormEvent)=>{
    
        e.preventDefault()  

        if(!name || !price) return

        const newItem: BillableItem ={
            
            _id: uuidv4(),
            name: name.trim(),
            description: description.trim() || undefined,
            price,
            taxRate,
            sessionCount

        }

        addItem(newItem)

        resetForm()

        setIsOpen(false)
    
    }

    const resetForm = () =>{
    
        setName('')    

        setDescription('')

        setPrice(0)

        setTaxRate(10)

        setSessionCount(1)

    }

    const contextValue: BillingContextProps ={

        bill,
        items,
        addItem,
        removeItem,
        paymentMethod,
        setPaymentMethod,
        discount,
        setDiscount,
        calculations,
        recalculate,
        loading,
        isOpen,
        setIsOpen,  
        name, 
        setName,
        description,    
        setDescription,
        price,
        setPrice,
        taxRate,
        setTaxRate,
        sessionCount,
        setSessionCount,
        handleSubmit

    }

    return(

        <BillingContext.Provider value={contextValue}>

            {children}

        </BillingContext.Provider>

    )

}

export const useBillingContext = () =>{

    const context = useContext(BillingContext)

    if(!context) throw new Error('useBillingContext must be used within BillingContextProvider')

    return context

}