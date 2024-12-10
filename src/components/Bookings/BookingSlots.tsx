import BookingDays from "./BookingDays"
import BookingTime from "./BookingTime"

const BookingSlots: React.FC = ()=>{

    return(

        <div className="sm:ml-72 md:ml-0 sm:pl-4 mt-6 font-medium to-gray-700">

            <h2>Booking Slots</h2>

            <div className="flex lg:flex-col gap-4 ">

                <BookingDays/>

                <BookingTime/>


            </div>


            <button className="bg-primary-bg text-white px-8 py-2.5 rounded-full mt-6 hover:bg-blue-600 transition-all duration-300 ease-in-out              active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base font-medium disabled:bg-gray-400 disabled:cursor-not-allowed">Book an appointment</button>

        </div>

    )

}

export default BookingSlots