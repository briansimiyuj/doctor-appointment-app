import { useState } from "react"
import { specialityData } from "../../assets/frontend/assets"
import { useNavigate, useParams } from "react-router-dom"

const FilterMenu: React.FC = ()=>{

    const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false),
          { specialityParam } = useParams(),
          navigate = useNavigate()

    return(

        <div className="mt-5">
        
            <div className="flex flex-col gap-3 items-start">

                <h2 className="text-2xl text-gray-600">Browse by Speciality</h2>

                <button
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className={`py-1 px-3 border rounded text-sm transition-all ${showFilterMenu ? "bg-primary-bg text-white" : ""}`}
                >Filter Menu</button>

            </div>


            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                
                <div className={`flex-col gap-3 text-sm text-gray-600 ${showFilterMenu ? "flex" : "hidden"}`}>
                    
                    {

                        specialityData.map((speciality, index) =>(
                            
                            <p 
                                key={index}
                                className={`w-[94vw] sm:w-auto py1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specialityParam === speciality.speciality ? "bg-indigo-100 text-black" : ""}`}
                                onClick={() => specialityParam   === speciality.speciality ? navigate("/doctors") : navigate(`/doctors/${speciality.speciality}`)}
                            >{speciality.speciality}</p>

                        ))

                    }


                </div>

            </div>
        
        </div>

    )

}

export default FilterMenu