import { useBookingSlots } from "../../hooks/useBookingSlots"

const BookingTime: React.FC = ()=>{

    const { doctorSlots, slotIndex, slotTime, setSlotTime } = useBookingSlots()

    return(

        <div className="w-full">

            <div className="relative">


                <div className="flex flex-col lg:flex-row items-center gap-5 pb-4 px-16 w-full overflow-x-scroll mt-4 overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-smooth">

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

                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-white w-8 pointer-events-none"></div>
                
                <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-white w-8 pointer-events-none"></div>

            </div>


        </div>

    )

}

export default BookingTime