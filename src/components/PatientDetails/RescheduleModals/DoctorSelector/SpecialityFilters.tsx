import { useState } from "react"
import { specialityData } from "../../../../assets/frontend/assets"
import { useRescheduleModal } from "../../../../context/RescheduleModalContext"

const SpecialityFilters: React.FC = ()=>{

    const [activeSpeciality, setActiveSpeciality] = useState<string | null>(null),
          [showDropdown, setShowDropdown] = useState(false),
          { filterDoctorsBySpeciality, resetDoctorFilter } = useRescheduleModal()

    const handleSpecialityClick = (speciality: string) =>{
    
        setActiveSpeciality(speciality)

        filterDoctorsBySpeciality(speciality)

        setShowDropdown(false)
    
    }

    const handleResetClick = () =>{

        setActiveSpeciality(null)

        resetDoctorFilter()

        setShowDropdown(false)

    }

    return(

        <div className="p-2 border-b">

            <h4 className="text-xs font-medium text-gray-500 mb-2">Filter by speciality</h4>

            <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
                onClick={() => setShowDropdown(!showDropdown)}
            >

                <span>

                    {

                        activeSpeciality === null ? 'All specialities' : 
                        
                        specialityData.find(s => s.speciality === activeSpeciality)?.speciality || activeSpeciality

                    }

                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 text-gray-400 ${showDropdown ? "transform rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>

                </svg>


            </button>

            {

                showDropdown &&(

                    <div className="flex flex-wrap gap-2 mt-5">

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

                )

            }

        </div>

    )

}

export default SpecialityFilters