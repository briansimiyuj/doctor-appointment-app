import { useBookingSlots } from "../../hooks/useBookingSlots"
import BookingDays from "./BookingDays"
import BookingTime from "./BookingTime"

const BookingSlots: React.FC = ()=>{

    const { handleTimeSlotSelection, slotTime, doctorSlots, slotIndex } = useBookingSlots(),
          isReady = doctorSlots.length > 0 && doctorSlots

        
    
    const handleSubmit = (e: React.FormEvent) =>{

        e.preventDefault()

        const currentSelectedSlot = doctorSlots[slotIndex]?.find(slot => slot.time === slotTime)

        if(currentSelectedSlot){
        
            handleTimeSlotSelection(currentSelectedSlot)
    
        }
        
    }

    

    return(

        <div 
            className="sm:ml-72 md:ml-0 sm:pl-4 mt-6 font-medium to-gray-700"
            key={slotTime}
        >

            <h2>Booking Slots</h2>

            <form onSubmit={handleSubmit}>

                <div className="flex lg:flex-col gap-4 h-[900px] lg:h-[300px] overflow-hidden">

                    <BookingDays/>

                    <BookingTime/>

                </div>

                <button 
                    type="submit"
                    className="bg-primary-bg text-white px-8 py-2.5 rounded-full mt-6 hover:bg-blue-600 transition-all duration-300 ease-in-out active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!isReady}
                >
                    Book an appointment
                </button>

            </form>

        </div>

    )

}

export default BookingSlots