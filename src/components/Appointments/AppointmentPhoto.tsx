import { DoctorType } from "../../assets/DoctorType"

type AppointmentPhotoProps ={

    doctor: DoctorType
    
}

const AppointmentPhoto: React.FC<AppointmentPhotoProps> = ({ doctor }) => {

    return(

        <img src={doctor.image} alt={`${doctor.name} photo`} className="w-32"/>

    )

}

export default AppointmentPhoto