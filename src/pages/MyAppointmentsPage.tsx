import AppointmentCard from "../components/Appointments/AppointmentCard"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { useBookingSlots } from "../hooks/useBookingSlots"
import { BookingContext } from "../context/BookingContext"
import { useContext, useEffect } from "react"

const MyAppointmentsPage: React.FC = ()=>{

    const { appointedDoctors } = useContext(BookingContext)

    useEffect(() =>{
    
       console.log('Updated Doctors', appointedDoctors)
    
    }, [appointedDoctors])

    return

    return(

        <>
        
            <h2 className="pb-3 mt-12 font-medium text-zinc-700 boorder-b">My Appointments</h2>

            {
                doctors && doctors.length > 0 ?(

                    doctors.map((doctor: AppointedDoctorType, index: number) =>(

                        <AppointmentCard doctor={doctor} key={index}/>
                        
                    ))

                ):(

                    <p className="text-center text-gray-500">You have no appointments</p>

                )

            }
        
        </>

    )

}

export default MyAppointmentsPage