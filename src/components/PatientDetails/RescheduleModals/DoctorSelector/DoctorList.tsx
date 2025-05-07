import { DoctorType } from "../../../../assets/types/DoctorType"

interface DoctorListProps{

    doctors: DoctorType[]
    selectedDoctorID: string | undefined
    onDoctorSelect: (doctorID: string) => void

}

const DoctorList: React.FC<DoctorListProps> = ({ doctors, selectedDoctorID, onDoctorSelect }) =>{

    if(doctors.length === 0){

        return(

            <h4 className="p-4 text-center text-gray-500">No doctors found</h4>

        )

    }

    return(

        <>
        
            {

                doctors.map(doctor =>(


                    <div
                        key={doctor._id}
                        className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedDoctorID === doctor._id ? 'bg-blue-50' : ''}`}
                        onClick={() => onDoctorSelect(doctor._id)}
                    >

                        <div className="flex items-center">

                            <img
                                src={doctor.image}
                                alt={`${doctor.name} image`}
                                className="w-8 h-8 rounded-full mr-2"
                            />

                            <div>

                                <p className="font-medium">{doctor.name}</p>

                                {

                                    doctor.speciality &&(

                                        <p className="text-xs text-gray-500">{doctor.speciality}</p>
                                        
                                    )

                                }

                            </div>

                        </div>

                    </div>

                ))

            }
        
        </>

    )

}

export default DoctorList