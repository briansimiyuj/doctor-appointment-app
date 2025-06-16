import { useDatePicker } from "../../../../../../../context/DatePickerContext"
import { useAvailableTimeSlots } from "../../../../../../../hooks/useAvailableTimeSlots"
import TimeSlotGroup from "./TimeSlotGroup"

const TimeSlotGrid: React.FC = ()=>{

    const { selectedDate, selectedTime, handleTimeClick } = useDatePicker(),
          { groupedSlots } = useAvailableTimeSlots(selectedDate)

    return(


        <div className="max-h-80 overflow-y-auto">

            <TimeSlotGroup
                title="Morning"
                slots={groupedSlots.morning}
                selectedTime={selectedTime}
                onSelectTime={handleTimeClick}
            />

            <TimeSlotGroup
                title="Afternoon"
                slots={groupedSlots.afternoon}
                selectedTime={selectedTime}
                onSelectTime={handleTimeClick}
            />

            <TimeSlotGroup
                title="Evening"
                slots={groupedSlots.evening}
                selectedTime={selectedTime}
                onSelectTime={handleTimeClick}
            />

        </div>

    )

}

export default TimeSlotGrid