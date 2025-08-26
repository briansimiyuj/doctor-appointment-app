import { useNavigate } from "react-router-dom"
import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"
import { AppointmentType } from "../../assets/types/AppointmentType"
import AppointmentPhoto from "./AppointmentPhoto"
import DoctorInfo from "./DoctorInfo"

type AppointmentCardProps ={

    doctor: AppointedDoctorType
    key: number
    appointment: AppointmentType
    openCancelModal: (appointment: AppointmentType) => void

}


const AppointmentCard: React.FC<AppointmentCardProps> = ({ doctor, key, appointment, openCancelModal })=>{

    const navigate = useNavigate()

    return(

        <div key={key} className="grid grid-cols1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5 ">

                <AppointmentPhoto doctors={doctor}/>

                <DoctorInfo doctors={doctor}/>

            </div>


            <div className="flex flex-col gap-2 justify-end">

               <button 
                    className="text-sm bg-primary-btn text-white dark:text-white text-center sm:min-w-48 py-2 rounded hover:bg-blue-600 transition-all duration-300"
                    onClick={() => navigate(`/appointments/${appointment._id}`)}
                >View Appointment</button>

               <button 
                    className="text-sm bg-red-500 text-white dark:text-white text-center sm:min-w-48 py-2 rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() => openCancelModal(appointment)}
                >Cancel Appointment</button>

            </div>

        </div>

    )

}

export default AppointmentCard