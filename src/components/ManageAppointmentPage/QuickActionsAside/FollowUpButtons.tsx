import { FaFileMedical, FaVial } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const FollowUpButtons: React.FC = () =>{
    
    const { openReferralModal, openLabOrderModal, loading } = useManageAppointmentContext()

    return (
        <div className="space-y-3 pt-3 border-t border-gray-200">

            <h3 className="text-lg font-semibold text-gray-700">Documentation & Follow-up</h3>
            
            <button
                onClick={openReferralModal}
                className="flex items-center justify-center w-full px-4 py-2 bg-cyan-500 text-white dark:text-white font-semibold rounded-lg hover:bg-cyan-600 transition disabled:bg-gray-400"
                disabled={loading}
            >

                <FaFileMedical className="mr-2"/> Create Referral

            </button>

            <button
                onClick={openLabOrderModal}
                className="flex items-center justify-center w-full px-4 py-2 bg-orange-500 text-white dark:text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
                disabled={loading}
            >

                <FaVial className="mr-2"/> Order Lab Tests

            </button>

        </div>

    )
    
}

export default FollowUpButtons