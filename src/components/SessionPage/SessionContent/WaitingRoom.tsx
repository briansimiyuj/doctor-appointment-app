import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"
import { useEffect, useState } from "react"

const WaitingRoom: React.FC = ()=>{

    const { appointment, sessionStatus } = useManageAppointmentContext(),
          doctorName = appointment?.doctor?.doctorInfo.name || 'your Doctor',
          appointmentTime = appointment?.time,
          [timeUntilAppointment, setTimeUntilAppointment] = useState(0)

    useEffect(() =>{

        const calculateTimeUntilAppointment = () =>{

            if(appointment?.date && appointment?.time){

                const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`),
                      now = new Date(),                      
                      secondsLeft = Math.max(Math.floor((appointmentDateTime.getTime() - now.getTime()) / 1000), 0)

                setTimeUntilAppointment(secondsLeft)

            }
        }

        calculateTimeUntilAppointment()

        const interval = setInterval(calculateTimeUntilAppointment, 1000)

        return () => clearInterval(interval)

    }, [appointment?.date, appointment?.time])

    const formatTime = (totalSeconds: number): string =>{

        const days = Math.floor(totalSeconds / (24 * 3600)),
              hours = Math.floor((totalSeconds % (24 * 3600)) / 3600),
              minutes = Math.floor((totalSeconds % 3600) / 60),
              seconds = totalSeconds % 60

        if(days > 0){

            return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`
            
        }else if(hours > 0){

            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            
        }else{

            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            
        }
    }

    let statusMessage = 'Please wait for your session to start.',
        statusColor = 'text-gray-600 dark:text-gray-400',
        icon = <FaClock className="w-8 h-8 text-yellow-500 mb-4"/>

    if(sessionStatus === "Loading..."){

        statusMessage = 'Loading appointment details...'

        icon = <FaClock className="w-8 h-8 text-blue-500 mb-4 animate-spin"/>

    }else if(timeUntilAppointment > 3600){
        
        statusMessage = `Your session starts in ${formatTime(timeUntilAppointment)}.`

        statusColor = 'text-green-600 dark:text-green-400'

    }else if(timeUntilAppointment > 0){

        statusMessage = `Prepare now, session starting soon! (${formatTime(timeUntilAppointment)})`

        statusColor = "text-orange-600 dark:text-orange-400"
        
    }else if(timeUntilAppointment <= 0){

        statusMessage = `Your doctor should be joining shortly.`

        statusColor = 'text-red-600 dark:text-red-400'

        icon = <FaUserMd className="w-8 h-8 text-red-500 mb-4 animate-pulse"/>

    }

    return(

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl min-h-[400px] flex flex-col items-center justify-center text-center">

            {icon}

            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Welcome to the Waiting Room</h1>

            <p className="text-xl font-semibold mb-6" style={{ color: statusColor }}>{statusMessage}</p>

            <div className="w-full max-w-sm border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 space-y-3 lg:hidden">

                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">

                    <div className="flex items-center">

                        <FaUserMd className="mr-3 w-5 h-5 text-blue-500"/>

                        <span className="font-medium">Doctor:</span>

                    </div>

                    <span>{doctorName}</span>

                </div>

                <div className="flex items-start justify-between text-gray-700 dark:text-gray-300">

                    <div className="flex items-center">

                        <FaCalendarAlt className="mr-3 w-5 h-5 text-purple-500"/>

                        <span className="font-medium">Scheduled Time:</span>

                    </div>
                    
                    <span>{appointmentTime}</span>

                </div>

            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Please ensure your camera and microphone are ready for the session.</p>

        </div>

    )

}

export default WaitingRoom