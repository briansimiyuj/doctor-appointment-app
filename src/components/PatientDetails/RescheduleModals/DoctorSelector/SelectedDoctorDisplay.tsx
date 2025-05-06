import { DoctorType } from "../../../../assets/types/DoctorType"

interface SelectedDoctorDisplayProps{

    selectedDoctor?: DoctorType | null
    showDropdown: boolean
    toggleDropdown: () => void

}

const SelectedDoctorDisplay: React.FC<SelectedDoctorDisplayProps> = ({ selectedDoctor, showDropdown, toggleDropdown }) =>{

    return(

        <h1>SelectedDoctorDisplay</h1>

    )

}

export default SelectedDoctorDisplay