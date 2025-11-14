import { FaPrint } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"

const ModalFooter: React.FC = ()=>{

    const { closeReferralModal } = useManageAppointmentContext()

    return(

        <div className="flex flex-col-reverse justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            
            <button
                onClick={closeReferralModal}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >Close</button>

            
            <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex justify-center gap-2"
            >
                
                <FaPrint width={4} height={4}/>

                Print
            </button>
        </div>

    )

}

export default ModalFooter