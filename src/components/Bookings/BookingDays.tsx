import { useBookingSlots } from "../../hooks/useBookingSlots"

const BookingDays: React.FC = () =>{

    const { doctorSlots, slotIndex, setSlotIndex, days } = useBookingSlots()   

    const handleDayClick = (index: number) =>{

        setSlotIndex(index)

    }    

    return(

        <div className="flex items-center gap-3 justify-around w-full overflow-y-auto md:overflow-visible mt-4 flex-col sm:flex-row md:flex-col lg:flex-row px-4">
       
            {
                
                doctorSlots.length > 0 && doctorSlots.map((slot, index) =>{

                    const firstSlot = slot,
                          dateTime = firstSlot ? new Date(firstSlot.date) : null 

                    // Check if this day has any available slots
                    const hasAvailable = firstSlot?.slots.some(s => s.status === "available")

                    return(

                        <label 
                            key={index} 
                            className={`text-center py-6 px-6 min-w-16 rounded-full ${slotIndex === index ? 'bg-primary-bg text-white' : 'border border-gray-400'} ${hasAvailable ? 'cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                        >
     
                            <input 
                                type="radio"
                                name="bookingDay"
                                value={index}
                                checked={slotIndex === index}
                                onChange={() => hasAvailable && handleDayClick(index)}
                                className="hidden"
                            />
                            
                            <p className="text-sm xs:text-base">{dateTime ? days[dateTime.getDay()] : ""}</p>
                            
                            <p className="text-sm xs:text-base">{dateTime ? dateTime.getDate() : ""}</p>

                        </label>

                    )

                })
                
            }

        </div>

    )

}

export default BookingDays