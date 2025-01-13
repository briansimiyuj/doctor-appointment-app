import { useBookingSlots } from "../../hooks/useBookingSlots"

const BookingDays: React.FC = () =>{

    const { doctorSlots, slotIndex, setSlotIndex, days } = useBookingSlots()   

    const handleDayClick = (index: number) =>{

        const selectedDay = doctorSlots[index][0]

        console.log('Selected day', {

            day: days[selectedDay.dateTime.getDay()],
            date: selectedDay.dateTime.getDate(),

        })

        setSlotIndex(index)

    }

    return(

        <div className="flex items-center gap-3 justify-around w-full overflow-y-auto md:overflow-visible mt-4 flex-col sm:flex-row md:flex-col lg:flex-row px-4">
       
            {

                doctorSlots.length && doctorSlots.map((slot, index) =>(
                
                <label 
                        key={index} 
                        className={`text-center py-6 px-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary-bg text-white' : 'border border-gray-400'}`}
                    >
                       <input 
                           type="radio"
                           name="bookingDay"
                           value={index}
                           checked={slotIndex === index}
                           onChange={() => handleDayClick(index)}
                           className="hidden"
                       />
                       
                       <p className="text-sm xs:text-base">{slot[0] && days[slot[0].dateTime.getDay()]}</p>
                       
                       <p className="text-sm xs:text-base">{slot[0] && slot[0].dateTime.getDate()}</p>

                    </label>

                ))

            }
        </div>

    )

}

export default BookingDays