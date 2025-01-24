import AppointmentCard from "../components/Appointments/AppointmentCard"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { BookingContext } from "../context/BookingContext"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"

const MyAppointmentsPage: React.FC = ()=>{

    const { appointedDoctors } = useContext(BookingContext),
          loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated

    return(

        <>

            {
            
                isAuthenticated ?(

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

                ):(

                    <NotFoundPage/>

                )
            
            }

        </>

    )

}
export default MyAppointmentsPage