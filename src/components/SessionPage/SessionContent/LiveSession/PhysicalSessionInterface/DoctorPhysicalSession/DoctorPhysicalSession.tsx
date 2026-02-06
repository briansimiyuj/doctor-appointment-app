import { FaComments } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import AppointmentDetails from "../../../../../ManageAppointmentPage/WaitingRoom/AppointmentDetails"
import PatientBasicInfo from "../../../../../PatientDetails/PatientBasicInfo"
import PatientImage from "../../../../../PatientDetails/PatientImage"
import RoomAssignment from "./RoomAssignment"

const DoctorPhysicalSession: React.FC = ()=>{

    const { appointment, isChatModalOpen, toggleChatModal } = useManageAppointmentContext(),
          patientName = appointment?.patient.patientInfo.name || "Patient"

    return(

        <div className="h-full p-4 md:p-6">

            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900">In-Person Consultation</h1>

                <p className="text-gray-700 mt-1">You are currently in a session with <span className="font-semibold">{patientName}</span>.</p>

            </div>

            <div className="flex flex-col gap-4">

                <div className="flex gap-4 flex-col md:flex-row items-center">

                    <PatientImage/>

                    <PatientBasicInfo/>

                </div>

                <RoomAssignment/>

                <AppointmentDetails/>

            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                            
                <button
                    onClick={toggleChatModal}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg transition-colors ${
                        isChatModalOpen 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                            : 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    
                    <FaComments className="w-5 h-5"/>
                    
                    <span>{isChatModalOpen ? 'Close Chat' : 'Message Patient'}</span>
                
                </button>
            
            </div>


        </div>

    )

}

export default DoctorPhysicalSession