import { useNavigate } from "react-router-dom"
import { AppointedPatientType } from "../../assets/types/AppointedPatientType"
import { AppointmentType } from "../../assets/types/AppointmentType"
import AppointmentPhoto from "./AppointmentPhoto"
import PatientInfo from "./PatientInfo"
import { useAppointmentsContext } from "../../context/AppointmentContext"

type PatientAppointmentCardProps ={

    patient: AppointedPatientType
    appointment: AppointmentType
    openCancelModal?: (appointment: AppointmentType) => void

}

const PatientAppointmentCard: React.FC<PatientAppointmentCardProps> = ({ patient, appointment, openCancelModal })=>{

    const navigate = useNavigate(),
          { activeTab } = useAppointmentsContext()

    return(

        <div className="grid grid-cols-1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5">

                <AppointmentPhoto patients={patient}/>

                <PatientInfo patients={patient} appointment={appointment}/>

            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">

               <button 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-primary-bg text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors w-full sm:w-auto cursor-pointer"
                    onClick={() => navigate(`/appointment/view/${appointment._id}`)}
                >View Patient Details</button>

                {
                    
                    activeTab === "upcoming" ?(
                        
                        <button 
                            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-red-500 text-white dark:text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors w-full sm:w-auto cursor-pointer"
                            onClick={() => openCancelModal?.(appointment)}
                        >Cancel Appointment</button>

                    ):(

                        <button 
                            className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-secondary-btn text-white dark:text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors w-full sm:w-auto cursor-pointer"
                        >View  History</button>
                    )

                }

            </div>

            
        </div>

    )

}

export default PatientAppointmentCard