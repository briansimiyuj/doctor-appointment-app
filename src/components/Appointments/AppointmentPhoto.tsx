import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"


type AppointmentPhotoProps ={

    doctors: AppointedDoctorType
    
}

const AppointmentPhoto: React.FC<AppointmentPhotoProps> = ({ doctors }) => {

    const doctor = doctors?.doctorInfo

    return(

        <img src={doctor?.image} alt={`${doctor?.name} photo`} className="w-32"/>

    )

}

export default AppointmentPhoto