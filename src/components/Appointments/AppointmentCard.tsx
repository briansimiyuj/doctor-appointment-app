import { DoctorType } from "../../assets/DoctorType"
import AppointmentPhoto from "./AppointmentPhoto"
import DoctorInfo from "./DoctorInfo"

type AppointmentCardProps ={

    doctor: DoctorType
    key: number

}


const AppointmentCard: React.FC<AppointmentCardProps> = ({ doctor, key })=>{

    return(

        <div key={key} className="grid grid-cols-1 gap-4 sm:items-center sm:flex sm:gap-6 py-2 border-b">

            <div className="flex gap-5 ">

                <AppointmentPhoto doctor={doctor}/>

                <DoctorInfo doctor={doctor}/>


            </div>


            <div className="flex flex-col gap-2 justify-end">

               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary-bg hover:text-white transition-all duration-300" id="pay-btn">Pay Online</button>

               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>

            </div>

        </div>

    )

}

export default AppointmentCard