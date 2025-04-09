import { usePatientDetails } from "../../../context/PatientDetailsContext"

const Appointment: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails()

    return(

        <div className="space-y-4">

            {

                patientAppointments.map((appointment, index) =>(

                    <div className="border rounded-lg hover shadow-md p-4 transition-shadow" key={index}>

                        <div className="flex justify-between">

                            <div>

                                <h3 className="text-lg font-bold">Time:</h3>

                                <p className="font-medium">

                                    {appointment.date} at {appointment.time}

                                </p>


                                {

                                    appointment.status &&(

                                        <span
                                            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                                                appointment.status === "confirmed" ? 'bg-green-100 text-green-800' : appointment.status === "cancelled" ? 'bg-red-100 text-red-800' : appointment.status === "completed" ? 'bg-gray-100 text-gray-800' : appointment.status === "pending" ? 'bg-yellow-100 text-yellow-800' :'bg-blue-100 text-blue-800'

                                            }`}
                                        >{appointment.status}</span>

                                    )

                                }

                            </div>

                        </div>

                    </div>
                    
                ))

            }

        </div>

    )

}

export default Appointment