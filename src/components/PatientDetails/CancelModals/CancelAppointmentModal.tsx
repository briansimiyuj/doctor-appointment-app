import ModalBody from "./ModalBody"

const CancelAppointmentModal: React.FC = ()=>{

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg">

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Cancel Appointment</h2>

                <ModalBody/>

            </div>

        </div>

    )

}

export default CancelAppointmentModal