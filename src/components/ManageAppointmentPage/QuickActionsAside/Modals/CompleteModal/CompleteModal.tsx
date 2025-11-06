import { useManageAppointmentContext } from "../../../../../context/ManageAppointmentContext"
import { useCompleteAppointment } from "../../../../../hooks/useCompleteAppointment"

const CompleteModal: React.FC = ()=>{

    const { closeCompletionModal } = useManageAppointmentContext(), 
          { handleMarkAsCompleted } = useCompleteAppointment()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <p className="text-center mt-4">Are you sure you want to mark this appointment as completed?</p>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3  mt-6">

                    <button className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:hover:bg-gray-700 text-gray-700 py-2 px-4 rounded-md transition-all duration-300" onClick={closeCompletionModal}>Cancel</button>

                    <button className="bg-green-500 text-white dark:text-white py-2 px-4 rounded-md hover:bg-green-600" onClick={handleMarkAsCompleted}>Mark as completed</button>

                </div>

            </div>

        </div>

    )

}

export default CompleteModal