import { DoctorType } from "../../assets/DoctorType"

interface DoctorCardProps{

    doctor: DoctorType & { isAvailable?: boolean },
    key: number

}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, key })=>{

    const isAvailable = doctor.isAvailable ?? false

    return(

        <div
            key={key}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
        >


            <img src={doctor.image} alt={doctor.name} className="bg-blue-50 object-cover"/>

            
            <div className="p-4">

                {

                    isAvailable ?(

                        <div className="flex items-center gap-2 text-sm text-center text-green-500">

                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                            <p>Available</p>

                        </div>

                    ):(

                        <div className="flex items-center gap-2 text-sm text-center text-red-500">

                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>

                            <p>Not Available</p>

                        </div>
                    )

                }

            </div>

        </div>

    )

}

export default DoctorCard