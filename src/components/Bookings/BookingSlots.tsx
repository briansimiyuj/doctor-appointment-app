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


        </div>

    )

}

export default BookingSlots