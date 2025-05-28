import { useScheduleHistory } from "../../../../hooks/useScheduleHistory"

const ModalBody: React.FC = ()=>{

    const { getScheduleHistory } = useScheduleHistory(),
          scheduleHistory = getScheduleHistory()

    console.log(scheduleHistory)

    return(

        <>
        
            {

                scheduleHistory.length === 0 ?(

                    <div className="text-center text-gray-600 py-8">
                        
                        <p>No schedule history available for this appointment.</p>

                    </div>

                ):(

                    <div className="space-y-4"></div>

                )

            }
        
        </>

    )

}

export default ModalBody