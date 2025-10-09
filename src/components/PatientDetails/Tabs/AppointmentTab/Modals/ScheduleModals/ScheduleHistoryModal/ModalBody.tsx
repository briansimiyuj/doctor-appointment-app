import { useFetchScheduleHistory } from "../../../../../../../hooks/useFetchScheduleHistory"
import ScheduleHistoryCard from "./ScheduleHistoryCard"


const ModalBody: React.FC = ()=>{

    const { history } = useFetchScheduleHistory()

    return(

        <>
        
            {

                history.length === 0 ?(

                    <div className="text-center text-gray-600 py-8">
                        
                        <p>No schedule history available for this appointment.</p>

                    </div>

                ):(

                    <div className="space-y-4">

                        {

                            history.map((item, index) =>(

                                <ScheduleHistoryCard
                                    key={index}
                                    item={item}
                                    index={index}
                                />

                            ))

                        }

                    </div>

                )

            }
        
        </>

    )

}

export default ModalBody