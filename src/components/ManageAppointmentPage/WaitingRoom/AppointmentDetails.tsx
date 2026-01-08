import { FaVideo, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"
import { useEffect, useState } from "react"
import { formatDisplayDate, formatDisplayTime, formatTimeDifference, getAppointmentEndTime, getAppointmentTimeMs, timeStatusConfig } from "../../../assets/utils/appointmentLogic"

const AppointmentDetails: React.FC = () =>{

    const { appointment } = useManageAppointmentContext(),
          [countdown, setCountdown] = useState<string>("Calculating..."),
          [timeStatus, setTimeStatus] = useState<'early' | 'on-time' | 'late'>('early')

    const consultationTypeConfig ={

        "online":{

            icon: <FaVideo className="text-green-500"/>,
            text: 'Video Consultation',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-50 dark:bg-green-900/30'

        },

        "in-person":{

            icon: <FaUser className="text-purple-500"/>,
            text: 'In-Person Visit',
            color: 'text-purple-600 dark:text-purple-400',
            bgColor: 'bg-purple-50 dark:bg-purple-900/30'

        }

    }

    useEffect(() =>{
    
        const appointmentTimeMs = getAppointmentTimeMs(appointment?.date || '')

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
        
        const intervalId = setInterval(updateTimer, 1000)
        
        return () => clearInterval(intervalId)
    
    }, [appointment?.date])

    const consultationType = appointment?.consultationType || "online",
          typeConfig = consultationTypeConfig[consultationType as keyof typeof consultationTypeConfig] || consultationTypeConfig.online

    const currentTimeStatus = timeStatusConfig[timeStatus]


    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 border border-gray-200 dark:border-gray-700">

            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">

                    <FaCalendarAlt className="mr-2 text-gray-500"/>

                    Appointment Details

                </h3>

                <div className={`px-3 py-1 rounded-full ${currentTimeStatus.bgColor} ${currentTimeStatus.color} text-sm font-medium`}>

                    {currentTimeStatus.text}

                </div>

            </div>

            <div className="space-y-4">

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">

                    <div className="flex items-center">

                        <div className="mr-3">

                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">

                                <FaCalendarAlt className="text-indigo-600 dark:text-indigo-300"/>

                            </div>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500 dark:text-gray-400">Appointment Date</p>

                            <p className="text-lg font-semibold text-gray-900 dark:text-white">

                                {formatDisplayDate(appointment?.date || '')}

                            </p>

                        </div>

                    </div>

                </div>

            
                <div className="flex items-center flex-col md:flex-row gap-4 justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">

                    <div className="flex items-center">

                        <FaClock className="mr-3 text-gray-500 w-5 h-5"/>

                        <div>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Scheduled Time</p>

                            <p className="text-lg font-semibold text-gray-900 dark:text-white">

                                {formatDisplayTime(appointment?.actualStartTime || '')} - {getAppointmentEndTime(appointment?.actualStartTime || '', appointment?.actualDurationSeconds || 30)}

                            </p>

                        </div>

                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded">

                        30 min

                    </div>

                </div>

                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border border-blue-100 dark:border-blue-800">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center">

                            <div className="mr-3">

                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">

                                    <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">

                                        ⏱️

                                    </span>

                                </div>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">Session Starts</p>

                                <p className={`text-xl font-bold ${timeStatus === 'late' ? 'text-red-600 dark:text-red-400' : timeStatus === 'on-time' ? 'text-yellow-600 dark:text-yellow-400' : 'text-green-600 dark:text-green-400'}`}>

                                    {countdown}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                
                <div className={`p-3 rounded-lg ${typeConfig.bgColor} border ${typeConfig.color.replace('text-', 'border-')}/20`}>

                    <div className="flex items-center">

                        <div className="mr-3">

                            {typeConfig.icon}

                        </div>

                        <div>

                            <p className={`font-medium ${typeConfig.color}`}>

                                {typeConfig.text}

                            </p>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">

                                {

                                    consultationType === "online" && "Video consultation via secure connection"

                                }

                                {

                                    consultationType === "in-person" && "In-person visit at clinic location"

                                }

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AppointmentDetails