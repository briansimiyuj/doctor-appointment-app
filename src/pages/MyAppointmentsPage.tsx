import AppointmentCard from "../components/Appointments/AppointmentCard"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { BookingContext } from "../context/BookingContext"
import { useContext, useEffect } from "react"

const MyAppointmentsPage: React.FC = ()=>{

    const { appointedDoctors } = useContext(BookingContext)

    useEffect(() =>{
    
       console.log('Updated Doctors', appointedDoctors)
    
    }, [appointedDoctors])

    return(

        <>
        
            <h2 className="pb-3 mt-12 font-medium text-zinc-700 boorder-b">My Appointments</h2>

            {
                appointedDoctors && appointedDoctors.length > 0 ?(

                    appointedDoctors.map((doctor: AppointedDoctorType, index: number) =>(

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