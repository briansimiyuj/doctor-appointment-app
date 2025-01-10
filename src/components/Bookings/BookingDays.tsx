import { useBookingSlots } from "../../hooks/useBookingSlots"

const BookingDays: React.FC = ()=>{

    const { doctorSlots, slotIndex, setSlotIndex, days } = useBookingSlots()   

    const handleDayClick = (index: number) =>{

       setSlotIndex(index)
    
    }

    return(

        <div className="flex items-center gap-3 justify-around w-full overflow-y-auto md:overflow-visible mt-4 flex-col sm:flex-row md:flex-col lg:flex-row">


            {

                doctorSlots.length && doctorSlots.map((slot, index)=>(

                    <div
                       key={index}
                       className={`text-center py-6 lg:px-6 p-6 lg:p-30 sm:text-2xl lg:text-xl min-w-16  rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary-bg text-white' : 'border border-gray-400'}`}
                       onClick={()=> handleDayClick(index)}
                    >

                        <p>

                            {

                                slot[0] && days[slot[0].dateTime.getDay()]

                            }

                        </p>


                        <p>


                            {
                                
                                slot[0] && slot[0].dateTime.getDate()   

                            }

                        </p>

                    </div>

                ))

            }

        </div>

    )

}

export default BookingDays