import { useDatePicker } from "../../../../context/DatePickerContext"
import { useAvailableTimeSlots } from "../../../../hooks/useAvailableTimeSlots"
import TimeSlotGroup from "./TimeSlotGroup"

const TimeSlotGrid: React.FC = ()=>{

    const { selectedDate, selectedTime, setSelectedTime } = useDatePicker(),
          { groupedSlots } = useAvailableTimeSlots(selectedDate)

    console.log(groupedSlots.morning.length)

    return(


        <div className="max-h-80 overflow-y-auto">

            <TimeSlotGroup
                title="Morning"
                slots={groupedSlots.morning}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
            />

        </div>

    )

}

export default TimeSlotGrid