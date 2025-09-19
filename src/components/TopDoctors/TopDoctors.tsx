import { useNavigate } from "react-router-dom"

import TopDoctorsCard from "./TopDoctorsCard"
import { useDoctorContext } from "../../context/DoctorContext"

const TopDoctors: React.FC = ()=>{

    const navigate = useNavigate(),
          { doctors } = useDoctorContext()

    return(

        <div className="flex flex-col items-center gap-4 text-gray-900 md:mx-10">

            <h1 className="text-3xl font-medium">Top Doctors To Book</h1>   

            <p className="sm:w-1/3 text-center text-sm">Discover our top-rated doctors, carefully selected based on their expertise and patient reviews. Book your appointment with trusted professionals for the best care.</p>


            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">

                {

                    doctors.slice(0, 5).map((doctor, index) =>(

                        <TopDoctorsCard 
                            key={index} 
                            doctor={{
                                ...doctor,
                                isAvailable: index % 2 === 0 ? true : false
                            }}
                        />

                    ))

                }

            </div>

            <button
                className="bg-primary-bg text-white px-12 mt-10 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
                onClick={()=> navigate("/doctors")}
            >See More Doctors</button>

        </div>

    )

}

export default TopDoctors