import BookingSlots from "../components/Bookings/BookingSlots"
import DoctorDetails from "../components/Bookings/DoctorDetails"
import RelatedDoctors from "../components/RelatedDoctors/RelatedDoctors"
import { BookingContextProvider } from "../context/BookingContext"
import { ScheduleProvider } from "../context/ScheduleContext"

const BookingPage: React.FC = ()=>{

    return(

        <ScheduleProvider>
        
            <BookingContextProvider>

                <DoctorDetails/>

                <BookingSlots/>

                <RelatedDoctors/>

            </BookingContextProvider>
        
        </ScheduleProvider>

    )

}

export default BookingPage