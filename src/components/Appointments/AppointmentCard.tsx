import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"
import { AppointmentType } from "../../assets/types/AppointmentType"
import { useBookingSlots } from "../../hooks/useBookingSlots"
import { useUpdatePatientDetails } from "../../hooks/useUpdatePatientDetails"
import CancelAppointmentModal from "../PatientDetails/Tabs/AppointmentTab/Modals/CancelModals/CancelAppointmentModal"
import AppointmentPhoto from "./AppointmentPhoto"
import DoctorInfo from "./DoctorInfo"

type AppointmentCardProps ={

    doctor: AppointedDoctorType
    key: number
    appointment: AppointmentType

}


const AppointmentCard: React.FC<AppointmentCardProps> = ({ doctor, key, appointment })=>{

    const { cancelAppointment } = useBookingSlots(),
          { showCancelModal, openCancelModal, closeCancelModal } = useUpdatePatientDetails()

    return(

        <div key={key} className="grid grid-cols1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5 ">

                <AppointmentPhoto doctors={doctor}/>

                <DoctorInfo doctors={doctor}/>

            </div>


            <div className="flex flex-col gap-2 justify-end">

               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary-bg hover:text-white transition-all duration-300">View Appointment</button>

               <button 
                    className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() => openCancelModal(appointment)}
                >Cancel Appointment</button>

            </div>

            { showCancelModal && <CancelAppointmentModal appointment={appointment} onClose={closeCancelModal} cancelAppointment={cancelAppointment} /> }

        </div>

    )

}

export default AppointmentCard