import DoctorDetails from "../components/Bookings/DoctorDetails"
import { BookingContextProvider } from "../context/BookingContext"

const BookingPage: React.FC = ()=>{

    return(

        <>
        
            <BookingContextProvider>

                <DoctorDetails/>

            </BookingContextProvider>
        
        </>

    )

}

export default BookingPage