import { useDatePicker } from "../../../../context/DatePickerContext"

interface DayCellProps{

    date: Date

}

const DayCell: React.FC<DayCellProps> = ({ date })=>{

    const { isPastDate, isSelectedDate, isToday, handleDateClick, isAvailableDate } = useDatePicker(),
          isPast = isPastDate(date),
          isSelected = isSelectedDate(date),
          isTodayDate = isToday(date),
          isAvailable = isAvailableDate(date),
          isClickable = !isPast && isAvailable

    const handleClick = () =>{
    
        if(isClickable){

            handleDateClick(date)

        }
    
    }


    let cellStyle = "h-10 w-10 flex items-center justify-center rounded-full"

    cellStyle += isClickable ? " cursor-pointer" : " cursor-not-allowed"

    if(isPast){

        cellStyle += " bg-gray-100 text-gray-400"
    
    }else if(isSelected){

        cellStyle += " bg-primary-bg text-white"

    }else if(isTodayDate){

        cellStyle += " bg-white border-2 border-primary-bg text-primary-bg"

    }else if(!isAvailable){

        cellStyle += " bg-red-600 text-gray-400"
    
    }else{

        cellStyle += " bg-white text-gray-800 hover:bg-gray-200"

    }
          

    return(

        <div
            className={cellStyle}   
            onClick={handleClick}
        >{date.getDate()}</div>

    )

}

export default DayCell