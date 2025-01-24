import { useContext } from "react"
import { useBookingSlots } from "../../hooks/useBookingSlots"
import BookingDays from "./BookingDays"
import BookingTime from "./BookingTime"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"

const BookingSlots: React.FC = ()=>{

    const { handleTimeSlotSelection, slotTime, doctorSlots, slotIndex, doctorInfo, isBooked } = useBookingSlots(),
          isReady = doctorSlots.length > 0 && doctorSlots,
          isCurrentDoctorBooked = doctorInfo ? isBooked[doctorInfo._id] ?? false : false,
          loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated,
          navigate = useNavigate()
    
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


                {

                    isAuthenticated ?(

                        <button 
                            type="submit"
                            className={`${isCurrentDoctorBooked 
                                ? 'bg-gray-400 cursor-not-allowed p-4 m-4 rounded-full'
                                : 'p-4 m-4 rounded-full text-sm sm:text-base font-medium shadow-md transition-all duration-300 ease-in-out bg-primary-bg text-white hover:bg-blue-600 hover:shadow-lg active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed'
                            }`}                    
                            disabled={!isReady || isCurrentDoctorBooked}
                        >    
                            { isCurrentDoctorBooked ? 'Appointment Booked' : 'Book Appointment'  }
                        </button>
                        
                    ):(

                        <div className="p-4 mt-4">

                        <p className="text-secondary-text mb-3">Please login to book appointments</p>

                        <button 
                            onClick={() => navigate("/login")} 
                            className="p-4 rounded-full text-sm sm:text-base font-medium shadow-md transition-all duration-300 ease-in-out bg-primary-bg text-white hover:bg-blue-600 hover:shadow-lg active:scale-95"
                        >
                            Login to Continue
                        </button>
                    
                    </div>

                    )

                }

            </form>

        </div>

    )

}

export default BookingSlots