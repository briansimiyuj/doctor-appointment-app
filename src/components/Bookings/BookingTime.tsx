import { useBookingSlots } from "../../hooks/useBookingSlots"

const BookingTime: React.FC = ()=>{

    const { doctorSlots, slotIndex, slotTime, setSlotTime } = useBookingSlots()

    return(

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 overflow-scroll">

            {

                doctorSlots.length && doctorSlots[slotIndex].map((slot, index)=>(

                            <p
                                key={index}
                                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 hover:shadow-md ${slot.time === slotTime ? 'bg-primary-bg text-white' : 'border border-gray-400'}`}
                                onClick={()=> setSlotTime(slot.time)}
                            >{slot.time}</p>

                ))

            }

        </div>

    )

}

export default BookingTime