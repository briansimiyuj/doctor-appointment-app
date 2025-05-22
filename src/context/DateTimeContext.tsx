import { createContext, useContext, useState } from "react"
import { DateTimeContextProps } from "../assets/contextProps/DateTimeContextProps"

const DateTimeContext = createContext<DateTimeContextProps | undefined>(undefined)

interface DateTimeProviderProps{

    children: React.ReactNode
    initialDate?: string | null
    initialTime?: string | null

}

export const DateTimeProvider: React.FC<DateTimeProviderProps> = ({ 
    children, 
    initialDate = null, 
    initialTime = null
}) =>{

    const [date, setDate] = useState<string | null>(initialDate),
          [time, setTime] = useState<string | null>(initialTime)

    return(

        <DateTimeContext.Provider value={{ date, setDate, time, setTime }}>

            {children}

        </DateTimeContext.Provider>

    )

}


export const useDateTime = () =>{

    const context = useContext(DateTimeContext)

    if(!context) throw new Error("useDateTime must be used within a DateTimeProvider")

    return context

}