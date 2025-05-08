import { DoctorType } from "../../../../assets/types/DoctorType"

interface SelectedDoctorDisplayProps{

    selectedDoctor?: DoctorType | null
    showDropdown: boolean
    toggleDropdown: () => void

}

const SelectedDoctorDisplay: React.FC<SelectedDoctorDisplayProps> = ({ selectedDoctor, showDropdown, toggleDropdown }) =>{

    return(

        <div className="bg-white rounded-lg shadow p-4 pt-2">

        <div 
            className="flex items-center justify-between cursor-pointer p-2 border hover:border-primary-bg"
            onClick={toggleDropdown}
        >

            {

                selectedDoctor ?(

                    <div className="flex items-center">

                        <img
                            src={selectedDoctor.image}
                            alt={`${selectedDoctor.name} image`}
                            className="w-10 h-10 rounded-full mr-2"
                        />

                        <div>

                            <p className="font-medium">{selectedDoctor.name}</p>

                            <p className="text-sm text-gray-500">{selectedDoctor.speciality}</p>

                        </div>

                    </div>

                ):(

                    <p className="text-gray-500">Select a doctor</p>

                )

            }

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 text-gray-400 ${showDropdown ? "transform rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>


            </svg>

        </div>

        </div>

    )

}

export default SelectedDoctorDisplay