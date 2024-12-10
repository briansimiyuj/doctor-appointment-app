import BookingDays from "./BookingDays"
import BookingTime from "./BookingTime"

const BookingSlots: React.FC = ()=>{

    return(

        <div className="sm:ml-72 sm:pl-4 mt-6 font-medium to-gray-700">

            <h2>Booking Slots</h2>

            <BookingDays/>

            <BookingTime/>

        </div>

    )

}

export default BookingSlots