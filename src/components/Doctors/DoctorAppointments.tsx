import { useContext } from "react"
import { AppointmentsContext } from "../../context/AppointmentContext"
import { useNavigate } from "react-router-dom"

const DoctorAppointments: React.FC = () =>{

    const { appointments } = useContext(AppointmentsContext),
          navigate = useNavigate()

    return(

        <div className="flex flex-col items-center gap-4 py-16">

            <h1 className="text-3xl font-bold">Today's Appointments</h1>

            <p className="sm:w-1/3 text-center text-sm">View and manage your appointments efficiently. Keep track of your schedule and patient details in one place.</p>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 w-full">

                {

                    appointments.slice(0, 3).map((appointment, index) =>(

                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-all duration-300">

                            <img 
                                src={appointment.patient?.patientInfo?.image} 
                                alt="patient" 
                                className="w-24 h-24 rounded-full mb-4"
                            />

                            <div className="text-center">

                                <h2 className="font-semibold text-lg">{appointment.patient?.patientInfo?.name}</h2>

                                <p className="text-sm text-gray-500">{appointment.date}</p>

                                <p className="text-sm text-gray-500">{appointment.time}</p>

                            </div>

                            <span className={`mt-4 px-3 py-1 rounded-full text-sm ${
                                appointment.status === "confirmed" 
                                    ? "bg-green-100 text-green-600" 
                                    : "bg-yellow-100 text-yellow-600"
                            }`}>

                                {appointment.status}

                            </span>

                        </div>

                    ))

                }

            </div>


            <button 
                className="bg-primary-bg text-white px-12 mt-10 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
                onClick={()=> navigate("/bookings")}
            >See All Appointments</button>

        </div>

    )

}

export default DoctorAppointments