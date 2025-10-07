import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"
import { AppointmentType } from "../../assets/types/AppointmentType"

type DoctorInfoProps ={

    doctors: AppointedDoctorType
    appointment: AppointmentType
    
}


const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctors, appointment })=>{

    const doctor = doctors?.doctorInfo


    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{doctor?.name}</h2>

            <p>{doctor?.education} - {doctor?.speciality}</p>

            <h2 className="text-zinc-700 font-medium mt-1">Address:</h2>

            <p className="text-xs">{doctor?.address?.hospital}</p>

            <p className="text-xs">{doctor?.address?.hospitalLocation}</p>

            <p className="text-sm mt-1">

                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>

                <br/>

                {new Date(appointment.date).toLocaleDateString()} <br /> {appointment.time}

            </p>

        </div>

    )

}

export default DoctorInfo