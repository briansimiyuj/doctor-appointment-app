import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import ModalHeader from "../../../../../Profile/Modals/ModalHeader"

const ViewReferralModal: React.FC = ()=>{

    const { closeViewReferralModal } =  useManageAppointmentContext()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader title="View Referral" onClose={closeViewReferralModal}/>

            </div>

        </div>

    )

}

export default ViewReferralModal