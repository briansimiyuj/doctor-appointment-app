import { useDatePicker } from "../../../../context/DatePickerContext"

interface DayCellProps{

    date: Date

}

const DayCell: React.FC<DayCellProps> = ({ date })=>{

    const { isPastDate, isSelectedDate, isToday } = useDatePicker(),
          isPast = isPastDate(date),
          isSelected = isSelectedDate(date),
          isTodayDate = isToday(date)
          

    return(

        <div
           className={`
                h-10 w-10 flex items-center justify-center rounded-full cursor-pointer
                ${isPast ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}
                ${isSelected ? 'bg-primary-bg text-white hover:bg-primary-bg' : ''}
                ${isTodayDate && !isSelected ? 'border border-primary-bg text-primary-bg' : ''}
            `}    
        >{date.getDate()}</div>

    )

}

export default DayCell