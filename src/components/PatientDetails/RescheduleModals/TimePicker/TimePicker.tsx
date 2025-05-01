import { useDatePicker } from "../../../../context/DatePickerContext"
import SelectedTimeDisplay from "./SelectedTimeDisplay"
import TimePickerHeader from "./TimePickerHeader"

const TimePicker: React.FC = ()=>{

    const { isTimePickerVisible } = useDatePicker()

    return(

        <div className="mb-4">

            <label className="block text-gray-700 text-sm font-medium mb-2">Select New Time:</label>

            <div className="bg-white p-4 rounded-lg shadow-md">

                <SelectedTimeDisplay/>

                {

                    isTimePickerVisible &&(

                        <>
                        
                            <div className="m2 bg-white rounded-lg shadow-md p-4">

                                <TimePickerHeader/>

                            </div>
                        
                        </>

                    )

                }

            </div>

        </div>

    )

}

export default TimePicker