import { DatePickerProvider } from "../../../../context/DatePickerContext"
import CalendarHeader from "./CalendarHeader"

const DatePicker: React.FC = ()=>{

    return(

        <div className="w-full max-w-md">

            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-medium mb-2">Select New Date:</label>

            </div>

            <div className="bg-white rounded-lg shadow p-4">

                <DatePickerProvider>

                    <CalendarHeader/>
                    
                </DatePickerProvider>

            </div>

        </div>

    )

}

export default DatePicker