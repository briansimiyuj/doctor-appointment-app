import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"

const DoctorPhysicalSession: React.FC = ()=>{

    const { appointment } = useManageAppointmentContext(),
          patientName = appointment?.patient.patientInfo.name || "Patient"

    return(

        <div className="h-full p-4 md:p-6">

            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900">In-Person Consultation</h1>

                <p className="text-gray-700 mt-1">You are currently in a session with <span className="font-semibold">{patientName}</span>.</p>

            </div>

            

        </div>

    )

}

export default DoctorPhysicalSession