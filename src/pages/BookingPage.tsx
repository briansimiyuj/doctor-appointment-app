import BookingSlots from "../components/Bookings/BookingSlots"
import DoctorDetails from "../components/Bookings/DoctorDetails"
import { BookingContextProvider } from "../context/BookingContext"

const BookingPage: React.FC = ()=>{

    return(

        <>
        
            <BookingContextProvider>

                <DoctorDetails/>

                <BookingSlots/>

            </BookingContextProvider>
        
        </>

    )

}

export default BookingPage