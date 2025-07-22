import { useDatePicker } from "../../../../../../../context/DatePickerContext"
import { useScheduleAppointmentContext } from "../../../../../../../context/ScheduleAppointmentContext"

interface SelectedTimeDisplayProps{

    useScheduleContext?: boolean

}
const SelectedTimeDisplay: React.FC<SelectedTimeDisplayProps> = ({ useScheduleContext = false }) =>{

    const { openTimePicker } = useDatePicker()

    let timeValue = null

    if(useScheduleContext){
        
        try{

            const { newTime } = useScheduleAppointmentContext()

            timeValue = newTime

        }catch(err){

            console.warn("useScheduleContext is true but useScheduleAppointmentContext is not available", err)

            timeValue = null

        }
        
    }else{

        const { selectedTime } = useDatePicker()

        timeValue = selectedTime

    }

    return(

        <div 
            className="flex items-center justify-between p-2 border rounded-md cursor-pointer dark:hover:bg-gray-700"
            onClick={openTimePicker}
            role="button"
        >

            <span className="text-gray-700">

                { timeValue ? timeValue : "Select Time" }

            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
            >

                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />

            </svg>

        </div>

    )

}

export default SelectedTimeDisplay