import { DatePickerProvider, useDatePicker } from "../../../../context/DatePickerContext"
import CalendarGrid from "./CalendarGrid"
import CalendarHeader from "./CalendarHeader"
import DayNames from "./DayNames"
import SelectedDateDisplay from "./SelectedDateDisplay"

const DatePickerContent: React.FC = ()=>{

    const { isCalendarVisible } = useDatePicker()

    return(

        <div className="w-full max-w-md">

            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-medium mb-2">Select New Date:</label>

            </div>

            <div className="bg-white rounded-lg shadow p-4">

                <SelectedDateDisplay/>
                
                {

                    isCalendarVisible &&(

                        <>

                            <div className="m-2 bg-white rounded-lg shadow-md p-4 absolute">

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