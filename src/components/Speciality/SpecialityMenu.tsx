import { Link } from "react-router-dom"
import { specialityData } from "../../assets/frontend/assets"

const SpecialityMenu: React.FC = ()=>{

    return(

        <div id="speciality" className="flex flex-col items-center gap-4 py-16">

            <h1 className="text-3xl font-bold">Find By Speciality</h1>

            <p className="sm:w-1/3 text-center text-sm">Quickly find the right doctor by searching through a wide range of medical specialties tailored to your needs.</p>


            <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">

                {

                    specialityData.map((speciality, index)=>(

                        <Link
                            to={`/doctors/${speciality.speciality}`}
                            key={index}
                            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
                        >
                        
                            <img src={speciality.image} alt="speciality image" className="w-16 sm:w-24 mb-2"/>


                            <h2>{speciality.speciality}</h2>
                        
                        </Link>

                    ))

                }
                
            </div>

        </div>

    )

}

export default SpecialityMenu