import { useDatePicker } from "../../../../context/DatePickerContext"
import DayCell from "./DayCell"

const CalendarGrid: React.FC = ()=>{

    const { currentMonth, getDaysInMonth, getFirstDayOfMonth } = useDatePicker()

    const renderCalendar = () =>{
    
       const year  = currentMonth.getFullYear(),
             month = currentMonth.getMonth(),
             daysInMonth = getDaysInMonth(month, year),
             firstDayOfMonth = getFirstDayOfMonth(month, year),
             days = []

        for(let day = 0; day < firstDayOfMonth; day++){

            days.push(<div key={`empty-${day}`} className="h-10 w-10"></div>)

        }

        for(let day = 1; day <= daysInMonth; day++){

            const date = new Date(year, month, day)

            days.push(<DayCell key={day} date={date}/>)

        }

        return days
    
    }

    return(

        <div className="grid grid-cols-7 gap-1">

            { renderCalendar() }

        </div>

    )

}

export default CalendarGrid