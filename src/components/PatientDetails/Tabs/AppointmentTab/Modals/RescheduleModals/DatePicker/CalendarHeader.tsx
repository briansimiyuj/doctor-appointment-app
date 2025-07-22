import { useDatePicker } from "../../../../../../../context/DatePickerContext"

const CalendarHeader: React.FC = ()=>{

    const { currentMonth, prevMonth, nextMonth } = useDatePicker(),
          monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return(

        <div className="flex items-center justify-between mb-4">

            <button
                className="hover:bg-gray-200 p-2 rounded-full dark:hover:bg-gray-700"
                onClick={prevMonth}
            >
               
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                
                </svg>

            </button>

            <h2 className="text-lg font-semibold">


                {monthName[currentMonth.getMonth()]} {currentMonth.getFullYear()}

            </h2>


            <button
                className="hover:bg-gray-200 p-2 rounded-full dark:hover:bg-gray-700"
                onClick={nextMonth}
            >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>

                </svg>

            </button>

        </div>

    )

}

export default CalendarHeader