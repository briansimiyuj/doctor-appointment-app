import { ScheduleHistoryItem } from "../../../../assets/types/ScheduleHistoryItem"

interface ScheduleHistoryDetailsProp{

    item: ScheduleHistoryItem
    
}

const ScheduleHistoryDetails: React.FC<ScheduleHistoryDetailsProp> = ({ item })=>{

    return(

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <div className="bg-white p-3 rounded border">

                <h4 className="text-sm font-medium text-gray-700 mb-2">Current Appointment</h4>

                <p className="text-sm">Date: {item.appointment.date}</p>

                <p className="text-sm">Time: {item.appointment.time}</p>

                <p className="text-sm">Doctor: {item.appointment.doctor.name}</p>

                {

                    item.appointment.consultationType &&(

                        <p className="text-sm">Consultation Type: {item.appointment.consultationType}</p>

                    )

                }

            </div>

            {

                item.previousValues &&(


                    <div className="bg-white p-3 rounded border">

                        <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Appointment</h4>

                        <p className="text-sm">Date: {item.previousValues?.date}</p>

                        <p className="text-sm">Time: {item.previousValues?.time}</p>

                        <p className="text-sm">Doctor: {item.previousValues?.doctorName}</p>

                    </div>

                )

            }

        </div>

    )

}

export default ScheduleHistoryDetails