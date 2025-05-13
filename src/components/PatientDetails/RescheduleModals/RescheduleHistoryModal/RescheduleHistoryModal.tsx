import ModalBody from "./ModalBody"

const RescheduleHistoryModal: React.FC= () =>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh] flex flex-col">

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Reschedule History</h2>

                <ModalBody/>

            </div>

        </div>

    )

}

export default RescheduleHistoryModal