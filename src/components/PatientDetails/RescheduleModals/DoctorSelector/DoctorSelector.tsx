import { useState } from "react"
import { useRescheduleModal } from "../../../../context/RescheduleModalContext"
import SelectedDoctorDisplay from "./SelectedDoctorDisplay"

const DoctorSelector: React.FC = ()=>{

    const { selectedDoctor } = useRescheduleModal(),
          [showDropdown, setShowDropdown] = useState(false)

    return(

        <div className="mb-6">

            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">Select Doctor:</label>

            <div className="relative">

                <SelectedDoctorDisplay
                    selectedDoctor={selectedDoctor}
                    showDropdown={showDropdown}
                    toggleDropdown={() => setShowDropdown(!showDropdown)}
                />

            </div>

        </div>

    )

}

export default DoctorSelector