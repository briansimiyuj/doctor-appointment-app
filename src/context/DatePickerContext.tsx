import { createContext, useContext, useEffect, useState } from "react"
import { DatePickerContextProps } from "../assets/contextProps/DatePickerContextProps"
import { useRescheduleModal } from "./RescheduleModalContext"

interface DatePickerProviderProps{

    children: React.ReactNode

}

const DatePickerContext = createContext<DatePickerContextProps | undefined>(undefined)

export const DatePickerProvider: React.FC<DatePickerProviderProps> = ({ children }) =>{

    const { newDate, setNewDate } = useRescheduleModal(),
          [currentMonth, setCurrentMonth] = useState(new Date()),
          [selectedDate, setSelectedDate] = useState<Date | null>(newDate ? new Date(newDate) : null),
          [isCalendarVisible, setIsCalendarVisible] = useState(false),
          toggleCalendar = () => setIsCalendarVisible(prev => !prev)

    
    useEffect(() =>{

        if(selectedDate){

            const timer = setTimeout(() =>{
                
                hideCalendar()

            }, 300)

            return () => clearTimeout(timer)

        }
        
    }, [selectedDate])


    useEffect(() =>{
    
        if(newDate){
            
           setSelectedDate(new Date(newDate))

        }
    
    }, [newDate])

    useEffect(() =>{
    
        if(selectedDate){

            const year = selectedDate.getFullYear(),
                  month = String(selectedDate.getMonth() + 1).padStart(2, '0'),
                  day = String(selectedDate.getDate()).padStart(2, '0'),

                  formattedDate = `${year}-${month}-${day}`

            setNewDate(formattedDate)

        }
    
    }, [selectedDate, setNewDate])

    const getDaysInMonth = (month: number, year: number) =>{
    
       return new Date(year, month + 1, 0).getDate()
    
    }

    const getFirstDayOfMonth = (month: number, year: number) =>{

        return new Date(year, month, 1).getDay()

    }   

    const prevMonth = () =>{
    
       setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    
    }

    const nextMonth = () =>{

        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))

    }

    const isPastDate = (date: Date) =>{

       const today = new Date()

       today.setHours(0, 0, 0, 0)

       return date < today

    }

    const isSelectedDate = (date: Date) =>{

        return !!selectedDate && 
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()

    }

    const isToday = (date: Date) =>{
    
       const today = new Date()

       return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    
    }

    const handleDateClick = (date: Date) =>{

        if(!isPastDate(date)){

            setSelectedDate(date)

        }

    }

    const showCalendar = () =>{
    
       setIsCalendarVisible(true)

       window.dispatchEvent(new CustomEvent("calendarToggle", { detail: { isOpen: true } }))
    
    }

    const hideCalendar = () =>{

       setIsCalendarVisible(false)

       window.dispatchEvent(new CustomEvent("calendarToggle", { detail: { isOpen: false } }))

    }

    const value ={

        currentMonth,
        selectedDate,
        setSelectedDate,
        prevMonth,
        nextMonth,
        isPastDate,
        isSelectedDate,
        isToday,
        handleDateClick,
        getDaysInMonth,
        getFirstDayOfMonth,
        isCalendarVisible,
        showCalendar,
        hideCalendar,
        toggleCalendar

    }

    return(

        <DatePickerContext.Provider value={value}>

            {children}

        </DatePickerContext.Provider>

    )

}

export const useDatePicker = () =>{

    const context = useContext(DatePickerContext)

    if(!context) throw new Error('useDatePicker must be used within a DatePickerProvider')

    return context

}