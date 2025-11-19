import { FaUserSlash } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const NoShowControl: React.FC = () =>{
    
    const { loading, isSessionActive, noShowReason, setNoShowReason, markNoShow, appointment } = useManageAppointmentContext(),
          isMarkedAsNoShow = appointment?.status === "no-show"

    return(

        <div className="pt-4 border-t border-gray-100">

            {

                isMarkedAsNoShow ?(

                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">

                        <div className="flex items-start gap-2">

                            <FaUserSlash className="text-red-600 mt-0.5 flex-shrink-0"/>

                            <div className="flex flex-col">

                                <p className="text-sm font-semibold text-red-800">Marked as No-Show</p>

                                {
            
                                    appointment.noShowReason &&(
            
                                        <p className="text-base text-red-600 mt-1">Reason: {appointment.noShowReason}</p>
            
                                    )
            
                                }
                                
                            </div>

                        </div>

                    </div>



                ):(

                    <>

                        <input
                            type="text"
                            placeholder="Optional No-Show Reason"
                            className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm"
                            disabled={loading || isSessionActive}
                            value={noShowReason}
                            onChange={e => setNoShowReason(e.target.value)}
                        />
            
                        <button
                            className="flex items-center justify-center w-full px-4 py-2 bg-red-700 text-white dark:text-white font-semibold rounded-lg hover:bg-red-800 transition disabled:bg-gray-400"
                            disabled={loading || isSessionActive}
                            onClick={() => markNoShow(noShowReason)}
                        >
            
                            <FaUserSlash className="mr-2"/> Mark as No-Show
            
                        </button>
            
                        {
            
                            isSessionActive &&(
                                
                                <p className="text-xs text-red-500 mt-2 text-center">End session before marking as No-Show.</p>
            
                            )
            
                        }

                    </>

                )

            }


        </div>
    
    )

}

export default NoShowControl