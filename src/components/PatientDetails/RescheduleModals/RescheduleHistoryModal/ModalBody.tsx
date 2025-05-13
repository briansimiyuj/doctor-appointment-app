import { rescheduleHistory } from "../../../../assets/types/RescheduleHistoryItem"

const ModalBody: React.FC = ()=>{

    return(

        <>
        
            {

                rescheduleHistory.length === 0 ?(

                    <div className="text-center text-gray-600 py-8">

                        <p>No reschedule history available for this appointment.</p>

                    </div>

                ):(
                    
                    <div className="space-y-4">

                        {

                            rescheduleHistory.map((historyItem, index) =>(

                                <div className="border rounded-lg p-4 bg-gray-50" key={index}>

                                    <div className="flex items-start justify-between gap-4 mb-3">

                                        <h3 className="font-medium">Rescheduled On</h3>

                                        <span className="text-gray-500">

                                            {

                                                `${new Date(historyItem.timeStamp).toLocaleDateString()} at ${new Date(historyItem.timeStamp).toLocaleTimeString()}`

                                            }
 
                                        </span>

                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <div className="bg-white p-3 rounded border">

                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Original Appointment</h4>

                                            <p className="text-sm">Date: {historyItem.originalAppointment.date}</p>

                                            <p className="text-sm">Time: {historyItem.originalAppointment.time}</p>

                                            <p className="text-sm">Doctor: {historyItem.originalAppointment.doctorName}</p>

                                        </div>

                                        <div className="bg-white p-3 rounded border">

                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Rescheduled Appointment</h4>

                                            <p className="text-sm">Date: {historyItem.newAppointment.date}</p>

                                            <p className="text-sm">Time: {historyItem.newAppointment.time}</p>

                                            <p className="text-sm">Doctor: {historyItem.newAppointment.doctorName}</p>

                                        </div>

                                    </div>

                                </div>
                                
                            ))

                        }
                        
                    </div>

                )

            }
        
        </>

    )

}

export default ModalBody