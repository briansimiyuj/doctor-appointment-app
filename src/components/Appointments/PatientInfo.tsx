import { useNavigate } from "react-router-dom"
import { AppointedPatientType } from "../../assets/types/AppointedPatientType"

type PatientInfo ={

    patients: AppointedPatientType

}

const PatientInfo: React.FC<PatientInfo> = ({ patients })=>{

    const patient = patients.patientInfo,
          navigate = useNavigate()

    return(

        <div className="flex-1 text-sm text-zinc-600">

            <h2 className="text-neutral-800 font-semibold">{patient?.name}</h2>

            <p>{patient?.gender}, {patient?.age} years old</p>

            <p>{patient?.contact?.phone}</p>

            <p>{patient?.appointment?.date} at</p>

            <p>{patient?.appointment?.time}</p>


            <div className="mt-4 flex flex-col sm:flex-row gap-2">

               <button 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-primary-bg text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors w-full sm:w-auto cursor-pointer"
                    onClick={() => navigate(`/appointment/${patient?._id}`)}
                >View Patient Details</button>


                <button 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-red-500 text-white rounded text-xs sm:text-sm hover:bg-red-600 transition-colors w-full sm:w-auto cursor-pointer"
                >Cancel Appointment</button>

            </div>

        </div>

    )

}

export default PatientInfo