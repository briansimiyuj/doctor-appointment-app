import { DoctorSlotType } from "../../assets/types/DoctorSlotType";
import { TimeSlotType } from "../../assets/types/TimeSlotType"


interface BookingTimeProps{

    doctorSlots: DoctorSlotType[]
    selectedSlot: TimeSlotType | null
    slotIndex: number
    handleTimeSlotSelection: (slot: TimeSlotType) => void
    setSelectedSlot: (slot: TimeSlotType | null) => void
}

const BookingTime: React.FC<BookingTimeProps> = ({ doctorSlots, selectedSlot, slotIndex, handleTimeSlotSelection, setSelectedSlot }) =>{


    const handleTimeChange = (slot: TimeSlotType) =>{

        setSelectedSlot(slot)   

        handleTimeSlotSelection(slot)

    }

    const selectedDaySlots = doctorSlots[slotIndex]?.slots || []

    return(

        <div className="w-full h-full">

            <div className="relative h-full overflow-y-auto">

                <div className="flex flex-col h-full lg:flex-row items-center gap-5 pb-4 px-16 w-full overflow-x-scroll mt-4 overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-700 scroll-smooth">

                    {

                        selectedDaySlots.length > 0 && selectedDaySlots.map((slot, slotIndex) =>{

                            const time = slot.time,
                                isSelected = selectedSlot?.time === time,
                                status = slot.status
                                
                            const slotClasses = status === "available" 
                                ? isSelected ? "bg-primary-bg text-white" : "border border-gray-400"
                                : "bg-gray-200 text-gray-400 dark:text-gray-800 cursor-not-allowed"

                            return(

                                <label
                                    key={slotIndex}
                                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 hover:shadow-md ${slotClasses} ${status === "available" ? "cursor-pointer" : "cursor-not-allowed"}`}
                                >

                                    <input
                                        type="radio"
                                        name="bookingTime"
                                        value={time}
                                        checked={isSelected}
                                        onChange={() => handleTimeChange(slot)}
                                        className="hidden"
                                        disabled={status !== "available"}
                                    />{time} 

                                </label>

                            )

                        })


                    }

                </div>

            </div>

        </div>

    )

}

export default BookingTime