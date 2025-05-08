import { useDatePicker } from "../../../../context/DatePickerContext"

const SelectedDateDisplay: React.FC = ()=>{

    const { selectedDate, showCalendar } = useDatePicker()

    return(

        <div className="text-center">

            <label htmlFor="selected-date" className="block text-sm font-medium text-gray-700 mb-1">Select Date:</label>

            <div className="relative">

                <input
                    id="selected-date"
                    type="date"
                    value={selectedDate?.toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-primary-bg  text-center font-medium cursor-pointer bg-white appearance-none hover:bg-gray-50 transition-colors"
                    readOnly
                    onClick={() =>{
                        document.getElementById('calendar-container')?.scrollIntoView({ behavior: 'smooth' });
                        showCalendar()
                    }}
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                    </svg>

                </div>

            </div>

        </div>

    )

}

export default SelectedDateDisplay