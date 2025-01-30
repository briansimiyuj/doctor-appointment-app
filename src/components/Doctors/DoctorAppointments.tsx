import { useContext } from "react"
import { AppointmentsContext } from "../../context/AppointmentContext"

const DoctorAppointments: React.FC = () =>{

    const { appointments } = useContext(AppointmentsContext)

    return(

        <div className="flex flex-col items-center gap-4 py-16">

            <h1 className="text-3xl font-bold">Today's Appointments</h1>

            <p className="sm:w-1/3 text-center text-sm">View and manage your appointments efficiently. Keep track of your schedule and patient details in one place.</p>

            <div className="flex flex-col gap-4 pt-5 w-full">

                {

                    appointments.slice(0, 3).map((appointment, index)=>(

                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">

                            <div className="flex items-center gap-4">

                                <img 
                                    src={appointment.patient?.image} 
                                    alt="patient" 
                                    className="w-16 h-16 rounded-full"
                                />

                                <div>

                                    <h2 className="font-semibold">{appointment.patient?.name}</h2>

                                    <p className="text-sm text-gray-500">{appointment.date}</p>

                                    <p className="text-sm text-gray-500">{appointment.time}</p>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <span className={`px-3 py-1 rounded-full text-sm ${
                                    appointment.status === "confirmed" 
                                        ? "bg-green-100 text-green-600" 
                                        : "bg-yellow-100 text-yellow-600"
                                }`}>

                                    {appointment.status}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default DoctorAppointments