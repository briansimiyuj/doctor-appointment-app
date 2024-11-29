import { createContext, ReactNode, useState } from "react"

interface CurrencyContextProps{
    
    currency: string,
    setCurrency: (currency: string) => void,
    rate: number,
    setRate: (rate: number) => void

}

export const CurrencyContext = createContext<CurrencyContextProps>({

    currency: '$',
    setCurrency: () => {},
    rate: 1,
    setRate: () => {}
    
})



export const CurrencyProvider = ({ children }: { children: ReactNode }) => {

   const [currency, setCurrency] = useState<string>(''), 
         [rate, setRate] = useState<number>(1)

    
    return(

        <CurrencyContext.Provider value={{ currency, setCurrency, rate, setRate }}>
            
            {children}
            
        </CurrencyContext.Provider>

    )

}