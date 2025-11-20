import { TbClockHour4 } from 'react-icons/tb'
import { BiHourglass, BiSolidTimeFive } from 'react-icons/bi'
import { FaCheckCircle, FaChevronLeft } from 'react-icons/fa'
import { useManageAppointmentContext } from '../../context/ManageAppointmentContext'
import StatusBadge from './header/StatusBadge'
import TimeCard from './header/TimeCard'
import ActionButtons from './header/ActionButtons'

const AppointmentHeader: React.FC = () =>{

    const { appointment, elapsedTime, scheduledDuration, remainingTime, isOvertime, isSessionActive, isPaused, startSession, endSession, pauseSession, resumeSession, openCompletionModal, formatTime, sessionStatus, statusColorClass: statusColor } = useManageAppointmentContext()

    return(

        <header className="bg-white shadow-md p-4 z-10">

            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition duration-150"
                        aria-label="Go back"
                    >

                        <FaChevronLeft className="mr-2"/>

                        <span className="font-semibold hidden sm:inline">Back to Appointments</span>

                    </button>

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center flex-grow">Manage Appointment</h1>

                    <StatusBadge status={sessionStatus} colorClass={statusColor}/>

                </div>      

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t pt-4">

                    <TimeCard
                        icon={<TbClockHour4 className="text-2xl text-blue-600 mb-1"/>}
                        label="Scheduled"
                        value={`${scheduledDuration} min`}
                    />

                    <TimeCard
                        icon={<BiSolidTimeFive className="text-2xl text-green-600 mb-1"/>}
                        label="Elapsed"
                        value={formatTime(elapsedTime)}
                    />

                    <TimeCard
                        icon={<BiHourglass className={`text-2xl mb-1 ${isOvertime ? 'text-red-600' : 'text-yellow-600'}`}/>}
                        label="Remaining"
                        value={isOvertime ? `+${formatTime(elapsedTime - scheduledDuration * 60)}` : formatTime(remainingTime)}
                        valueClass={isOvertime ? 'text-red-600' : 'text-gray-800'}
                    />

                    <TimeCard
                        icon={<FaCheckCircle className="text-2xl text-purple-600 mb-1"/>}
                        label="Type"
                        value={appointment?.consultationType || 'Loading...'}
                        valueClass="text-gray-800"
                    />

                </div>

                <ActionButtons
                    isSessionActive={isSessionActive}
                    appointmentStatus={appointment?.status}
                    isPaused={isPaused}
                    appointmentExists={!!appointment}
                    startSession={startSession}
                    endSession={endSession}
                    pauseSession={pauseSession}
                    resumeSession={resumeSession}
                    openCompletionModal={openCompletionModal}
                    sessionStatus={appointment?.sessionStatus}
                />

            </div>

        </header>

    )

}

export default AppointmentHeader