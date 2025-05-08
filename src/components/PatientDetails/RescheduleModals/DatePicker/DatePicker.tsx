import { useEffect, useRef } from "react"
import { DatePickerProvider, useDatePicker } from "../../../../context/DatePickerContext"
import CalendarGrid from "./CalendarGrid"
import CalendarHeader from "./CalendarHeader"
import DayNames from "./DayNames"
import SelectedDateDisplay from "./SelectedDateDisplay"

const DatePickerContent: React.FC = ()=>{

    const { isCalendarVisible, hideCalendar } = useDatePicker(),
          calendarRef = useRef<HTMLDivElement>(null)

    
    useEffect(() =>{
    
        const handleClickOutside = (event: MouseEvent) =>{

            if(calendarRef.current && !calendarRef.current.contains(event.target as Node)){

                hideCalendar()

            }

        }

        if(isCalendarVisible){

            document.addEventListener("mousedown", handleClickOutside)

        }

        return () =>{

            document.removeEventListener("mousedown", handleClickOutside)

        }
    
    }, [isCalendarVisible, hideCalendar])

    return(

        <div className="w-full max-w-md">

            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-medium mb-2">Select New Date:</label>

            </div>

            <div className="bg-white rounded-lg shadow p-4 pt-2">

                <SelectedDateDisplay/>

                {

                    isCalendarVisible &&(

                        <>

                            <div 
                                className="mt-4 bg-white rounded-lg shadow-md p-4"
                                ref={calendarRef}
                            >

                                <CalendarHeader/>
                                
                                <DayNames/>

                                <CalendarGrid/>

                            </div>

                        </>

                    )
                    
                }

            </div>

        </div>

    )

}

const DatePicker: React.FC = ()=>{

    return(

        <DatePickerProvider>

            <DatePickerContent/>

        </DatePickerProvider>

    )

}

export default DatePicker