import { doctors } from "../assets/frontend/assets"
import AppointmentCard from "../components/Appointments/AppointmentCard"

const MyAppointmentsPage: React.FC = ()=>{

    return(

        <>
        
            <h2 className="pb-3 mt-12 font-medium text-zinc-700 boorder-b">My Appointments</h2>


            {

                doctors.slice(0, 3).map((doctor, index)=>(

                    <AppointmentCard doctor={doctor} key={index}/>

                ))

            }
        
        </>

    )

}

export default MyAppointmentsPage