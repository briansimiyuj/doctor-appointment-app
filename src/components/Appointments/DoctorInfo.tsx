import { DoctorType } from "../../assets/types/DoctorType"

type DoctorInfoProps ={

    doctor: DoctorType
    
}


const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctor })=>{

    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{doctor.name}</h2>

            <p>{doctor.degree} - {doctor.speciality}</p>

            <h2 className="text-zinc-700 font-medium mt-1">Address:</h2>

            <p className="text-xs">{doctor.address.line1}</p>

            <p className="text-xs">{doctor.address.line2}</p>

            <p className="text-sm mt-1">

                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>

                <br/>

                July 12, 2023 at 10:00 AM

            </p>

        </div>

    )

}

export default DoctorInfo