import BookingSlots from "../components/Bookings/BookingSlots"
import DoctorDetails from "../components/Bookings/DoctorDetails"
import RelatedDoctors from "../components/RelatedDoctors/RelatedDoctors"
import { BookingContextProvider } from "../context/BookingContext"

const BookingPage: React.FC = ()=>{

    return(

        <>
        
            <BookingContextProvider>

                <DoctorDetails/>

                <BookingSlots/>

                <RelatedDoctors/>

            </BookingContextProvider>
        
        </>

    )

}

export default BookingPage