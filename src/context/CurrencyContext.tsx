import { createContext, ReactNode, useState } from "react"

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