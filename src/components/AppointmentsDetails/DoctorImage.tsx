import { useAppointmentsContext } from "../../context/AppointmentContext"

const DoctorImage: React.FC = ()=>{

    const { appointment } = useAppointmentsContext(),
          doctor = appointment?.doctor.doctorInfo

    return(

        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">

            <img 
                src={doctor?.coverImage.content} 
                alt={`${doctor?.name}'s image`}
                className="w-full h-full object-cover"
            />

        </div>

    )

}

export default DoctorImage