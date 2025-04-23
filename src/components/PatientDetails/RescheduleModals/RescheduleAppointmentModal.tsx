interface RescheduleAppointmentModalProps{

    appointment: any

}

const RescheduleAppointmentModal: React.FC<RescheduleAppointmentModalProps> = ({  appointment }) =>{

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Reschedule Appointment</h2>

            </div>

        </div>

    )

}

export default RescheduleAppointmentModal