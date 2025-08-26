import AppointmentCard from "../components/Appointments/AppointmentCard"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"
import PatientAppointmentCard from "../components/Appointments/PatientAppointmentCard"
import TabSelectorButtons from "../components/Appointments/TabSelectorButtons"
import { AppointmentsContext } from "../context/AppointmentContext"
import { useUpdatePatientDetails } from "../hooks/useUpdatePatientDetails"
import CancelAppointmentModal from "../components/PatientDetails/Tabs/AppointmentTab/Modals/CancelModals/CancelAppointmentModal"
import { useBookingSlots } from "../hooks/useBookingSlots"

const MyAppointmentsPage: React.FC = ()=>{

    const { activeTab,  pastAppointments, upcomingAppointments } = useContext(AppointmentsContext),
          { showCancelModal, closeCancelModal, openCancelModal, appointmentToCancel } = useUpdatePatientDetails(),
          { cancelAppointment } = useBookingSlots(),
          loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated,
          userType = loginContext?.userType

    const renderAppointments = () =>{
    
        const data = activeTab === "upcoming" ? upcomingAppointments : pastAppointments

        if(data.length === 0){

            return <p className="text-center text-gray-500">You have no {activeTab} appointments</p>

        }

        return data.map((appointment, index) =>(

            userType === "patient" ?(

                <AppointmentCard 
                    key={index} 
                    doctor={appointment.doctor} 
                    appointment={appointment} 
                    openCancelModal={openCancelModal}
                />

            ):(
                
                <PatientAppointmentCard key={index} patient={appointment.patient}/>

            )

        ))
    
    } 

    return(

        <>

            {

                isAuthenticated ?(

                    <>

                        <h2 className="pb-3 mt-12 font-medium text-zinc-700 boorder-b">My Appointments</h2>

                        <TabSelectorButtons/>

                        <div className="mt-6">{renderAppointments()}</div>

                        {
                        
                            showCancelModal && appointmentToCancel &&(

                                <CancelAppointmentModal 
                                    appointment={appointmentToCancel} 
                                    onClose={closeCancelModal} 
                                    cancelAppointment={cancelAppointment} 
                                />
                                
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