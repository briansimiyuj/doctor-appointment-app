import AppointmentCard from "../components/Appointments/AppointmentCard"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { BookingContext } from "../context/BookingContext"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import PatientAppointmentCard from "../components/Appointments/PatientAppointmentCard"

const MyAppointmentsPage: React.FC = ()=>{

    const { appointedDoctors, appointedPatients } = useContext(BookingContext),
          loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated,
          userType = loginContext?.userType

    return(

        <>

            {

                isAuthenticated ?(

                    <>

                        <h2 className="pb-3 mt-12 font-medium text-zinc-700 boorder-b">My Appointments</h2>

                        {

                            userType === "patient" ?(

                                appointedDoctors && appointedDoctors.length > 0 ?(

                                    appointedDoctors.map((doctor: AppointedDoctorType, index: number) =>(

                                        <AppointmentCard doctor={doctor} key={index}/>

                                    ))

                                ):(

                                    <p className="text-center text-gray-500">You have no appointments</p>

                                )

                            ):(

                                appointedPatients && appointedPatients.length > 0 ?(

                                    appointedPatients.map((patient: AppointedPatientType, index: number) =>(

                                        <PatientAppointmentCard key={index} patient={patient}/>

                                    ))

                                ):(

                                    <p className="text-center text-gray-500">You have no appointments</p>
                                )

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