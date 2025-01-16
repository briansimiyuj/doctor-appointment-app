import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"

type DoctorInfoProps ={

    doctors: AppointedDoctorType
    
}


const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctors })=>{

    const doctor = doctors?.doctorInfo

    console.log(doctors)


    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{doctor?.name}</h2>

            <p>{doctor?.degree} - {doctor?.speciality}</p>

            <h2 className="text-zinc-700 font-medium mt-1">Address:</h2>

            <p className="text-xs">{doctor?.address?.line1}</p>

            <p className="text-xs">{doctor?.address?.line2}</p>

            <p className="text-sm mt-1">

                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>

                <br/>

                {new Date(doctors.appointmentTime.dateTime).toLocaleDateString()} <br /> {new Date(doctors.appointmentTime.dateTime).toLocaleTimeString()}

            </p>

        </div>

    )

}

export default DoctorInfo