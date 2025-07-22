import { usePatientDetails } from "../../../../context/PatientDetailsContext"

const Appointment: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails()

    return(

        <div className="space-y-4">

            {

                patientAppointments.map((appointment, index) =>(

                    <div className="border rounded-lg hover shadow-md p-4 transition-shadow" key={index}>

                        <div className="flex justify-between">

                            <div className="flex flex-col md:flex-row gap-4">

                                <h3 className="text-lg font-bold">Time:</h3>

                                <p className="font-medium">

                                    {appointment.date} at {appointment.time}

                                </p>


                                {

                                    appointment.status &&(

                                        <>

                                            <h3 className="text-lg font-bold">Status:</h3>

                                            <span
                                                className={`inline-block px-3 py-1 text-center  rounded-full text-sm font-medium ${
                                                    appointment.status === "confirmed" ? 'bg-green-100 text-green-800' 
                                                    : appointment.status === "cancelled" ? 'bg-red-100 text-red-800' 
                                                    : appointment.status === "completed" ? 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200' 
                                                    : appointment.status === "pending" ? 'bg-yellow-100 text-yellow-800' 
                                                    : appointment.status === "rejected" ? 'bg-red-100 text-red-800'
                                                    : 'bg-blue-100 text-blue-800'
                                                }`}
                                            >{appointment.status}</span>

                                        </>

                                    )

                                }


                                {

                                    appointment.consultationType &&(

                                        <>

                                            <h3 className="text-lg font-bold">Consultation Type:</h3>

                                            <span
                                            className={`inline-block px-3 py-1 text-center rounded-full text-sm font-medium ${
                                                appointment.consultationType === "online" 
                                                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' 
                                                    : 'bg-purple-100 text-purple-800'
                                            }`}
                                            >{appointment.consultationType}</span>

                                        </>

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