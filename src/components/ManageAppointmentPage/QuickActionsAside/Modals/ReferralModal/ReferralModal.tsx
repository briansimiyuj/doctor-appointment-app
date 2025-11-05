import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"
import ModalHeader from "../../../../PatientDetails/Tabs/AppointmentTab/Modals/ModalHeader"

const ReferralModal: React.FC = ()=>{

    const { closeReferralModal } = useManageAppointmentContext()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader title="Refer To A Specialist" onClose={closeReferralModal}/>

            </div>

        </div>

    )

}

export default ReferralModal