import { TbClockPause, TbCalendarCancel } from "react-icons/tb"
import { FaPlay, FaCheckCircle } from "react-icons/fa"

interface ActionButtonsProps{

    isSessionActive: boolean
    isPaused: boolean
    appointmentExists: boolean
    sessionStatus: "active" | "completed" | null | undefined
    appointmentStatus: string | undefined
    startSession: () => void
    endSession: () => void
    pauseSession: () => void
    resumeSession: () => void
    openCompletionModal: () => void

}

const ActionButtons: React.FC<ActionButtonsProps> = ({
    isSessionActive,
    isPaused,
    sessionStatus,
    appointmentStatus,
    appointmentExists,
    startSession,
    endSession,
    pauseSession,
    resumeSession,
    openCompletionModal,
}) =>{

    return(

        <div className="flex justify-center mt-6 space-x-3 flex-wrap gap-3">

            {

                appointmentStatus === "completed" ?(

                    <button
                        className="flex items-center px-4 py-2 bg-green-600 text-white dark:text-white rounded-lg shadow-md cursor-default"
                        disabled
                    >

                        <FaCheckCircle className="mr-2"/> Appointment Completed

                    </button>

                ):sessionStatus === "completed" ?(

                    <button
                        onClick={openCompletionModal}
                        className="flex items-center px-4 py-2 bg-purple-600 text-white dark:text-white rounded-lg shadow-md hover:bg-purple-700 transition"
                    >

                        <FaCheckCircle className="mr-2"/> Complete Appointment
                        
                    </button>

                ):!isSessionActive ?(

                    <button
                        onClick={startSession}
                        className="flex items-center px-4 py-2 bg-green-500 text-white  rounded-lg shadow-md hover:bg-green-600 transition disabled:bg-gray-400"
                        disabled={!appointmentExists}
                    >

                        <FaPlay className="mr-2"/> Start Session
                        
                    </button>

                ): isPaused ?(

                    <button
                        onClick={resumeSession}
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                    >

                        <FaPlay className="mr-2"/> Resume

                    </button>

                ):(

                    <>

                        <button
                            onClick={() => pauseSession()}
                            className="flex items-center px-4 py-2 bg-yellow-500 text-white dark:text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
                        >

                            <TbClockPause className="text-xl mr-2"/> Pause

                        </button>

                        <button
                            onClick={openCompletionModal}
                            className="flex items-center px-4 py-2 bg-purple-600 text-white dark:text-white rounded-lg shadow-md hover:bg-purple-700 transition"
                        >

                            <FaCheckCircle className="mr-2"/> Complete

                        </button>

                    </>

                )                
                
            }

            {
            
                isSessionActive && sessionStatus !== "completed" && appointmentStatus !== "completed" &&(

                    <button
                        onClick={endSession}
                        className="flex items-center px-4 py-2 bg-red-500 text-white dark:text-white rounded-lg shadow-md hover:bg-red-600 transition"
                    >

                        <TbCalendarCancel className="text-xl mr-2"/> End Session

                    </button>

                )
                
            }

        </div>

    )

}

export default ActionButtons