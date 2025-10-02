import { useContext } from "react"
import { useBookingSlots } from "../../hooks/useBookingSlots"
import BookingDays from "./BookingDays"
import BookingTime from "./BookingTime"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"
import ConsultationType from "./ConsultationType"
import { useBookingContext } from "../../context/BookingContext"

const BookingSlots: React.FC = ()=>{

    const { handleTimeSlotSelection, selectedSlot, doctorSlots, slotIndex, doctorInfo, handleSubmitBooking, setSlotIndex, setSelectedSlot, days, consultationType } = useBookingSlots(),
          { loading, isBooked } = useBookingContext(),
          isReady = selectedSlot && slotIndex !== -1 &&  consultationType,
          isCurrentDoctorBooked = doctorInfo ? isBooked[doctorInfo._id] ?? false : true,
          loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated,
          navigate = useNavigate(),
          buttonText = loading ? "Booking Appointment..." : isCurrentDoctorBooked ? 'Appointment Booked' : 'Book Appointment'
    
    const handleSubmit = (e: React.FormEvent) =>{

        e.preventDefault()

        if(selectedSlot && doctorInfo){
                      
            handleSubmitBooking()
    
        }
        
    }

    

    return(

        <div 
            className="sm:ml-72 md:ml-0 sm:pl-4 mt-6 font-medium to-gray-700"
            key={selectedSlot?.time}
        >

            <h2>Booking Slots</h2>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 md:block">

                <div className="flex lg:flex-col gap-4 h-[900px] lg:h-[300px] overflow-hidden">

                    <BookingDays
                        doctorSlots={doctorSlots}
                        days={days}
                        slotIndex={slotIndex}
                        setSlotIndex={setSlotIndex}
                    />

                    <BookingTime
                        doctorSlots={doctorSlots}
                        selectedSlot={selectedSlot}
                        slotIndex={slotIndex}
                        handleTimeSlotSelection={handleTimeSlotSelection}
                        setSelectedSlot={setSelectedSlot}
                    />


                </div>

               <ConsultationType/>

                {

                    isAuthenticated ?(

                        <button 
                            type="submit"
                            className={`${isCurrentDoctorBooked && !isReady
                                ? 'bg-gray-400 cursor-not-allowed p-4 m-4 rounded-full'
                                : 'p-4 m-4 rounded-full text-sm sm:text-base font-medium shadow-md transition-all duration-300 ease-in-out bg-primary-bg text-white hover:bg-blue-600 hover:shadow-lg active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed'
                            }`}                    
                            disabled={!isReady || isCurrentDoctorBooked}
                        >    
                            { buttonText }
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