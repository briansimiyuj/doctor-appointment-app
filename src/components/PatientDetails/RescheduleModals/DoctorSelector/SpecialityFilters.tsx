import { useState } from "react"
import { specialityData } from "../../../../assets/frontend/assets"
import { useRescheduleModal } from "../../../../context/RescheduleModalContext"

const SpecialityFilters: React.FC = ()=>{

    const [activeSpeciality, setActiveSpeciality] = useState<string | null>(null),
          { filterDoctorsBySpeciality, resetDoctorFilter } = useRescheduleModal()

    const handleSpecialityClick = (speciality: string) =>{
    
        setActiveSpeciality(speciality)

        filterDoctorsBySpeciality(speciality)
    
    }

    const handleResetClick = () =>{

        setActiveSpeciality(null)

        resetDoctorFilter()

    }

    return(

        <div className="p-2 border-b">

            <h4 className="text-xs font-medium text-gray-500 mb-2">Filter by speciality</h4>

            <div className="flex flex-wrap gap-2">

                <button 
                    className={`px-3 py-1 rounded-full text-xs ${
                        activeSpeciality === null 
                            ? 'bg-primary-bg text-white hover:bg-primary-bg' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={handleResetClick}
                >All specialities</button>


                {

                    specialityData.map(speciality =>(

                        <button
                            key={speciality.speciality}
                            className={`flex flex-shrink-0 items-center gap-1 px-3 py-1 rounded-full text-xs ${
                                activeSpeciality === speciality.speciality 
                                    ? 'bg-primary-bg text-white hover:bg-primary-bg' 
                                    : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                            onClick={() => handleSpecialityClick(speciality.speciality)}
                        >

                            <img
                                src={speciality.image}
                                alt={`${speciality.speciality} image`}
                                className="w-4 h-4 rounded-full"
                            />

                            <span>{speciality.speciality}</span>

                        </button>

                    ))

                }

            </div>

        </div>

    )

}

export default SpecialityFilters