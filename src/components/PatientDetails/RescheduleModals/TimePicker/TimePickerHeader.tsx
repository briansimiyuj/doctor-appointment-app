import { useDatePicker } from "../../../../context/DatePickerContext"

const TimePickerHeader: React.FC = ()=>{

    const { selectedTime } = useDatePicker()

    return(

        <>

            <div className="flex flex-col mb-4 pb-2 border-b">

                <div className="flex justify-between items-center">

                    <h3 className="text-lg font-medium text-gray-900">Available time slots</h3>

                </div>

            </div>

            {

                selectedTime &&(
                    
                    <div className="mt-2 text-sm text-gray-600">

                        <span>Currently selected time:</span>

                        <span className="font-medium text-primary-bg">{selectedTime}</span>

                    </div>

                )

            }

        </>

    )

}

export default TimePickerHeader