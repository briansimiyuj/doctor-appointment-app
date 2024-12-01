import { doctors } from "../../assets/frontend/assets"
import TopDoctorsCard from "./TopDoctorsCard"

const TopDoctors: React.FC = ()=>{

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

        </div>

    )

}

export default TopDoctors