import { createContext, useContext, useEffect, useState } from "react"
import { DatePickerContextProps } from "../assets/contextProps/DatePickerContextProps"
import { useRescheduleModal } from "./RescheduleModalContext"
import { TimeSlotType } from "../assets/types/TimeSlotType"
import { dummySlots } from "../assets/dummyData/ScheduleDummyData"


interface DatePickerProviderProps{

    children: React.ReactNode
    initialDate?: string
    initialTime?: string
    doctorAvailability?: TimeSlotType

}

const DatePickerContext = createContext<DatePickerContextProps | undefined>(undefined)

export const DatePickerProvider: React.FC<DatePickerProviderProps> = ({ children, initialDate, initialTime, doctorAvailability = [] }) =>{

    const { newDate, setNewDate, newTime, setNewTime } = useRescheduleModal(),
          [currentMonth, setCurrentMonth] = useState(() =>{

                if(initialDate){

                    const date = new Date(initialDate)
                    
                    return new Date(date.getFullYear(), date.getMonth(), 1)

                }

                return new Date(new Date().getFullYear(), new Date().getMonth(), 1)

          }),
          [selectedDate, setSelectedDate] = useState<Date | null>(() =>{

            return initialDate ? new Date(initialDate) : null

          }),
          [selectedTime, setSelectedTime] = useState<string | null>(initialTime ? initialTime : null),
          [isCalendarVisible, setIsCalendarVisible] = useState(false),
          toggleCalendar = () => setIsCalendarVisible(prev => !prev),
          [isTimePickerVisible, setIsTimePickerVisible] = useState(
            import.meta.env.MODE === "production" ? false : true
          )

    const availableDateSlots = Array.isArray(doctorAvailability) && doctorAvailability.length > 0 ? doctorAvailability.filter((slot: TimeSlotType) => slot.status === "available").map((slot: TimeSlotType) => new Date(slot.dateTime)) : dummySlots.flat().filter((slot: TimeSlotType) => slot.status === "available").map((slot: TimeSlotType) => new Date(slot.dateTime))

    const isAvailableDate = (date: Date) =>{
    
       return availableDateSlots.some(slot => slot.getDate() === date.getDate() && slot.getMonth() === date.getMonth() && slot.getFullYear() === date.getFullYear())
    
    }


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
    
        if(newTime){

            setSelectedTime(newTime)
        }
    
    }, [newTime])

    useEffect(() =>{
        
        if(selectedTime){

            setNewTime(selectedTime)

        }

    }, [selectedTime])

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

    const openTimePicker = () =>{

        if(!selectedDate){

            alert("Please select a date first.")

            return

        }

        setIsTimePickerVisible(true)
    
    }

    const handleTimeClick = (time: string) =>{

        setSelectedTime(time)

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
        toggleCalendar,
        availableDateSlots,
        isAvailableDate,
        isTimePickerVisible,
        selectedTime,
        handleTimeClick,
        openTimePicker

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