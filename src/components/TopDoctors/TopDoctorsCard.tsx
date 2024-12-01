import { DoctorType } from "../../assets/DoctorType"

type TopDoctorsCardProps ={

    doctor: DoctorType,
    key: number
    
}

const TopDoctorsCard: React.FC<TopDoctorsCardProps> = ({ key, doctor })=>{

    return(

        <div 
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ease-in-out"
            key={key}
        >

            <img src={doctor.image} alt={`${doctor.name}'s name`} className="bg-blue-50"/>


            <div className="p-4">

                <div className="flex items-center gap-2 text-sm text-center text-green-500">

                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                    <p>Available</p>

                </div>


                <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>

                <p className="text-gray-600 text-sm">{doctor.speciality}</p>

            </div>

        </div>

    )

}

export default TopDoctorsCard