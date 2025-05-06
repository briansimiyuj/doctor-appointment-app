import { useState } from "react"
import { useRescheduleModal } from "../../../../context/RescheduleModalContext"
import SelectedDoctorDisplay from "./SelectedDoctorDisplay"
import DoctorSearchBar from "./DoctorSearchBar"

const DoctorSelector: React.FC = ()=>{

    const { selectedDoctor } = useRescheduleModal(),
          [showDropdown, setShowDropdown] = useState(true),
          [searchTerm, setSearchTerm] = useState('')

    return(

        <div className="mb-6">

            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">Select Doctor:</label>

            <div className="relative">

                <SelectedDoctorDisplay
                    selectedDoctor={selectedDoctor}
                    showDropdown={showDropdown}
                    toggleDropdown={() => setShowDropdown(!showDropdown)}
                />


                {

                    showDropdown &&(

                        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto p-3">

                            <DoctorSearchBar onSearch={setSearchTerm} searchTerm={searchTerm}/>  

                        </div>

                    )

                }

            </div>

        </div>

    )

}

export default DoctorSelector