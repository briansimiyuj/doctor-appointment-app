import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"
import { useEffect, useState } from "react"
import { getAppointmentTimeMs, formatTimeDifference, formatDisplayTime, formatDisplayDate } from "../../../assets/utils/appointmentLogic"

const WaitingRoom: React.FC = () =>{

    const { appointment, sessionStatus } = useManageAppointmentContext(),
          doctorName = appointment?.doctor?.doctorInfo.name || 'your Doctor',
          [countdown, setCountdown] = useState<string>("Calculating..."),
          [timeStatus, setTimeStatus] = useState<'early' | 'on-time' | 'late'>('early'),
          [formattedTime, setFormattedTime] = useState<string>(''),
          [formattedDate, setFormattedDate] = useState<string>('')

    useEffect(() =>{

        const appointmentTimeString = appointment?.date || appointment?.actualStartTime || '',
              appointmentTimeMs = getAppointmentTimeMs(appointmentTimeString)

        if(!appointmentTimeString){

            setCountdown("Time not available")

            return

        }

        setFormattedTime(formatDisplayTime(appointmentTimeString))

        setFormattedDate(formatDisplayDate(appointmentTimeString))

        if(!appointmentTimeMs){

            setCountdown("Time not available")
        
            return

        }

        const updateTimer = () =>{
        
            const nowMs = Date.now(),
                  diffMs = appointmentTimeMs - nowMs

            if(diffMs > 300000){

                setTimeStatus('early')

                setCountdown(formatTimeDifference(diffMs))

            }else if(diffMs > 0){

                setTimeStatus('on-time')

                setCountdown('Starting Soon')

            }else{

                setTimeStatus('late')

                setCountdown('Appointment Over')

            }
        
        }

        updateTimer()
        
        const intervalid = setInterval(updateTimer, 1000)
        
        return () => clearInterval(intervalid)
    
    }, [appointment?.date, appointment?.actualStartTime])

    let statusMessage = 'Please wait for your session to start.',
        statusColor = 'text-gray-600 dark:text-gray-400',
        icon = <FaClock className="w-8 h-8 text-yellow-500 mb-4"/>

    if(sessionStatus === "Loading..."){

        statusMessage = 'Loading appointment details...'
        icon = <FaClock className="w-8 h-8 text-blue-500 mb-4 animate-spin"/>

    }else if(timeStatus === 'early'){
        
        statusMessage = `Your session starts ${countdown.toLowerCase()}.`
        statusColor = 'text-green-600 dark:text-green-400'

    }else if(timeStatus === 'on-time'){

        statusMessage = `Prepare now, session starting soon!`
        statusColor = "text-orange-600 dark:text-orange-400"
        
    }else if(timeStatus === 'late'){

        statusMessage = `${countdown} Your doctor should be joining shortly.`
        statusColor = 'text-red-600 dark:text-red-400'
        icon = <FaUserMd className="w-8 h-8 text-red-500 mb-4 animate-pulse"/>

    }

    return(

        <div className="bg-white dark:bg-gray-800 p-4 md:p-8 lg:p-12 rounded-lg shadow-xl min-h-[400px] flex flex-col items-center justify-center text-center">

            {icon}

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 px-2">Welcome to the Waiting Room</h1>

            <p className="text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-6 px-2" style={{ color: statusColor }}>{statusMessage}</p>

            {
            
                (timeStatus === 'early' || timeStatus === 'on-time') &&(

                    <div className="text-lg sm:text-xl md:text-2xl font-bold mb-4 px-2" style={{ color: statusColor }}>

                        {countdown}

                    </div>

                )
            
            }

            <div className="w-full max-w-sm border-t border-gray-200 dark:border-gray-700 pt-4 md:pt-6 mt-4 md:mt-6 space-y-2 md:space-y-3 lg:hidden">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-700 dark:text-gray-300 p-2">

                    <div className="flex items-center mb-1 sm:mb-0">

                        <FaUserMd className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0"/>

                        <span className="font-medium text-sm sm:text-base">Doctor:</span>

                    </div>

                    <span className="text-sm sm:text-base text-right sm:text-left truncate pl-6 sm:pl-0">{doctorName}</span>

                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-700 dark:text-gray-300 p-2">

                    <div className="flex items-center mb-1 sm:mb-0">

                        <FaCalendarAlt className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0"/>

                        <span className="font-medium text-sm sm:text-base">Date:</span>

                    </div>
                    
                    <span className="text-sm sm:text-base text-right sm:text-left truncate pl-6 sm:pl-0">{formattedDate}</span>

                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-700 dark:text-gray-300 p-2">

                    <div className="flex items-center mb-1 sm:mb-0">

                        <FaClock className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"/>

                        <span className="font-medium text-sm sm:text-base">Time:</span>

                    </div>
                    
                    <span className="text-sm sm:text-base text-right sm:text-left truncate pl-6 sm:pl-0">{formattedTime}</span>

                </div>

            </div>

            <div className="hidden lg:block w-full max-w-md border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">

                    <div className="flex items-center justify-between mb-3">

                        <div className="flex items-center">

                            <FaUserMd className="mr-2 w-5 h-5 text-blue-500"/>

                            <span className="font-medium">Doctor:</span>

                        </div>

                        <span className="font-semibold truncate max-w-[200px]">{doctorName}</span>

                    </div>

                    <div className="flex items-center justify-between mb-3">

                        <div className="flex items-center">

                            <FaCalendarAlt className="mr-2 w-5 h-5 text-purple-500"/>

                            <span className="font-medium">Scheduled Date:</span>

                        </div>
                        
                        <span className="font-semibold text-right">{formattedDate}</span>

                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center">

                            <FaClock className="mr-2 w-5 h-5 text-green-500"/>

                            <span className="font-medium">Scheduled Time:</span>

                        </div>
                        
                        <span className="font-semibold">{formattedTime}</span>

                    </div>

                </div>

            </div>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-6 md:mt-8 px-4 text-center">

                { appointment?.consultationType === "online" ? 'Please ensure your camera and microphone are ready for the session.' : 'Please wait in the designated waiting area until called.' }

            </p>

        </div>

    )

}

export default WaitingRoom