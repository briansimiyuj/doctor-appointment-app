import { BookingContextProvider } from "../context/BookingContext"

const BookingPage: React.FC = ()=>{

    return(

        <>
        
            <BookingContextProvider>

                <h1>Booking Page</h1>

            </BookingContextProvider>
        
        </>

    )

}

export default BookingPage