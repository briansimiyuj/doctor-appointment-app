import { createContext, useEffect, useState } from "react"
import { DatePickerContextProps } from "../assets/contextProps/DatePickerContextProps"
import { useRescheduleModal } from "./RescheduleModalContext"

interface DatePickerProviderProps{

    children: React.ReactNode

}

const DatePickerContext = createContext<DatePickerContextProps | undefined>(undefined)

export const DatePickerProvider: React.FC<DatePickerProviderProps> = ({ children }) =>{

    const { newDate, setNewDate } = useRescheduleModal(),
          [currentMonth, setCurrentMonth] = useState(new Date()),
          [selectedDate, setSelectedDate] = useState<Date | null>(newDate ? new Date(newDate) : null)

    useEffect(() =>{
    
        if(newDate){
            
           setSelectedDate(new Date(newDate))

        }
    
    }, [newDate])

    useEffect(() =>{
    
        if(selectedDate){

            const formattedDate = selectedDate.toISOString().split('T')[0]

            setNewDate(formattedDate)

        }
    
    }, [selectedDate, setNewDate])

    const getDaysInMonth = (month: number, year: number) =>{
    
       return new Date(year, month + 1, 0).getDate()
    
    }

}