import { AppointedDoctorType } from "../../assets/types/AppointedDoctorType"
import { AppointedPatientType } from "../../assets/types/AppointedPatientType"


type AppointmentPhotoProps ={

    doctors?: AppointedDoctorType
    patients?: AppointedPatientType
    
}

const AppointmentPhoto: React.FC<AppointmentPhotoProps> = ({ doctors, patients }) => {

    if(doctors){

        const doctor = doctors?.doctorInfo

        return(

            <img src={doctor?.image} alt={`${doctor?.name} photo`} className="w-32"/>

        )

    }

    if(patients){

        const patient = patients?.patientInfo

        return(

            <img src={patient?.image} alt={`${patient?.name} photo`} className="w-32"/>

        )

    }

}

export default AppointmentPhoto