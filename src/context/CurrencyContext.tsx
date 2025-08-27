import { createContext, ReactNode, useContext, useState } from "react"

interface CurrencyContextProps{
    
    currency: string,
    setCurrency: (currency: string) => void,
    rate: number,
    setRate: (rate: number) => void,
    currencySymbol: string

}

export const CurrencyContext = createContext<CurrencyContextProps>({

    currency: '$',
    setCurrency: () => {},
    rate: 1,
    setRate: () => {},
    currencySymbol: '$'
    
})



export const CurrencyProvider = ({ children }: { children: ReactNode }) => {

   const [currency, setCurrency] = useState<string>(''), 
         [rate, setRate] = useState<number>(1),
         currencySymbol = currency === '$' ? '$' : '€'

    
    return(

        <CurrencyContext.Provider value={{ currency, setCurrency, rate, setRate, currencySymbol }}>
            
            {children}
            
        </CurrencyContext.Provider>

    )

}

export const useCurrencyContext = () =>{

    const context = useContext(CurrencyContext)

    if(!context) throw new Error('useCurrencyContext must be used within a CurrencyProvider') // if we are not using the context inside a CurrencyProvider, throw an error

    return context

}