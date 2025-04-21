import { ModalProvider } from "../../../context/ModalContext"
import { useUpdatePatientDetails } from "../../../hooks/useUpdatePatientDetails"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const RejectAppointmentModal: React.FC<{ appointment: any, onClose: () => void }> = ({ appointment, onClose }) => { 

    const { handleRejectAppointment } = useUpdatePatientDetails()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">


            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Reject Appointment</h2>

                <ModalProvider appointment={appointment} onClose={onClose} onReject={handleRejectAppointment}>

                    <ModalBody/>

                    <ModalFooter/>

                </ModalProvider>

            </div>

        </div>

    )

}

export default RejectAppointmentModal