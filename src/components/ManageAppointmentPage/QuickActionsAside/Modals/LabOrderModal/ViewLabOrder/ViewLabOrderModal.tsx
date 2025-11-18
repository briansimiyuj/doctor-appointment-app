import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import ModalHeader from "../../../../../Profile/Modals/ModalHeader"

const ViewLabOrderModal: React.FC = ()=>{

    const { closeViewLabOrderModal } = useManageAppointmentContext()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader title="View Lab Order" onClose={closeViewLabOrderModal}/>

            </div>

        </div>

    )

}

export default ViewLabOrderModal