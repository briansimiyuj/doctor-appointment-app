import { useEffect, useRef } from "react"
import { useDatePicker } from "../../../../../../../context/DatePickerContext"
import SelectedTimeDisplay from "./SelectedTimeDisplay"
import TimePickerHeader from "./TimePickerHeader"
import TimeSlotGrid from "./TimeSlotGrid"

const TimePicker: React.FC = ()=>{

    const { isTimePickerVisible, closeTimePicker } = useDatePicker(),
          timePickerRef = useRef<HTMLDivElement>(null)

    useEffect(() =>{
    
        const handleClickOutside = (event: MouseEvent) =>{

            if(timePickerRef.current && !timePickerRef.current.contains(event.target as Node)){

                closeTimePicker()

            }
        
        }

        if(isTimePickerVisible){

            document.addEventListener('mousedown', handleClickOutside)

        }
    
    }, [isTimePickerVisible, closeTimePicker])

    return(

        <div className="mb-4">

            <label className="block text-gray-700 text-sm font-medium mb-2">Select New Time:</label>

            <div className="bg-white p-4 rounded-lg shadow-md" ref={timePickerRef}>

                <SelectedTimeDisplay/>

                {

                    isTimePickerVisible &&(

                        <>
                        
                            <div className="m2 bg-white rounded-lg shadow-md p-4">

                                <TimePickerHeader/>

                                <TimeSlotGrid/>

                            </div>
                        
                        </>

                    )

                }

            </div>

        </div>

    )

}

export default TimePicker