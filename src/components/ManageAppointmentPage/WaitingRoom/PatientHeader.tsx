import { FaCheckCircle, FaClock, FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa"
import { useManageAppointmentContext } from "../../../context/ManageAppointmentContext"

const PatientHeader: React.FC = ()=>{

    const { appointment } = useManageAppointmentContext(),
          patient = appointment?.patient,
          patientGender = patient?.patientInfo.gender,
          patientName = patient?.patientInfo.name,
          patientAge = patient?.patientInfo.age

    const getPatientStatus = () =>{
    
        if(!appointment) return 'Not Checked in'

        const currentTime = new Date().getTime(),
              appointmentTimeString = appointment.date || appointment.actualStartTime || '',
              appointmentTime = new Date(appointmentTimeString).getTime(),
              timeDiff = currentTime - appointmentTime,
              fiveMinutesMs = 5 * 60 * 1000

        if(isNaN(appointmentTime)) return 'Not Checked in'

        if(timeDiff < -fiveMinutesMs){

            return 'Not Checked in'

        }

        if(timeDiff < 0 && timeDiff >= -fiveMinutesMs){

            return 'Waiting'

        }

        if(timeDiff >= 0 && timeDiff <= fiveMinutesMs){

            return 'Ready'

        }

        return 'Late'
    
    }

    const patientStatus = getPatientStatus()

    const statusConfig ={

        "Waiting":{

            icon: <FaClock className="text-yellow-500"/>,
            text: 'Patient is waiting',
            color: 'text-yellow-600 dark:text-yellow-400',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/30'
        
        },

        "Ready":{

            icon: <FaCheckCircle className="text-green-500"/>,
            text: 'Patient is ready',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-50 dark:bg-green-900/30'

        },

        "Not Checked in":{

            icon: <FaQuestionCircle className="text-gray-500"/>,
            text: 'Not checked in',
            color: 'text-gray-600 dark:text-gray-400',
            bgColor: 'bg-gray-50 dark:bg-gray-800'

        },
        
        "Late":{

            icon: <FaExclamationTriangle className="text-red-500"/>,
            text: 'Patient is late',
            color: 'text-red-600 dark:text-red-400',
            bgColor: 'bg-red-50 dark:bg-red-900/30'

        }
        
    }

    const currentStatus = statusConfig[patientStatus as keyof typeof statusConfig] || statusConfig["Not Checked in"]

    const getGenderDisplay = () =>{
    
        switch(patientGender?.toLowerCase()){

            case "male":
                return { symbol : '♂', text: 'Male' }

            case "female":
                return { symbol : '♀', text: 'Female' }

            default: return null

        }
    
    }

    const genderDisplay = getGenderDisplay()


    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 border border-gray-200 dark:border-gray-700">

            <div className="flex items-center space-x-4 mb-4 flex-col md:flex-row gap-4 ">

                <div className="flex-shrink-0">

                    <div className="w-20 h-20 md:w-14 md:h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">

                        {

                            patient?.patientInfo.profileImage?.content ?(

                                <img 
                                    src={patient.patientInfo.profileImage.content} 
                                    alt="Patient Avatar" 
                                    className="w-full h-full object-cover rounded-full"
                                />

                            ):(

                                <div className="w-full h-full flex items-center justify-center bg-blue-200 dark:bg-blue-800 rounded-full">

                                    <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">
                                        
                                        {patientName?.charAt(0).toUpperCase()}
                                    
                                    </span>

                                </div>

                            )

                        }

                    </div>

                </div>

                <div className="flex-1 min-w-0">

                    <div className="flex flex-col md:flex-row md:items-baseline md:space-x-3">

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white truncate">{patientName}</h2>

                        <div className="flex items-center justify-center space-x-2 mt-1 md:mt-0">

                            {

                                patientAge &&(

                                    <span className="text-gray-600 dark:text-gray-300 font-medium">({patientAge})</span>

                                )

                            }

                            {

                                genderDisplay &&(

                                    <span
                                        className="text-lg font-semibold"
                                        title={genderDisplay.text}
                                    >

                                       {genderDisplay.symbol} {genderDisplay.text}

                                    </span>

                                )

                            }

                        </div>

                    </div>

                </div>

                <div className={`flex-shrink-0 px-3 py-1 rounded-full ${currentStatus.bgColor} ${currentStatus.color} text-sm font-medium`}>

                    <div className="flex items-center space-x-1">

                        {currentStatus.icon}

                        <span className="hidden sm:inline">{currentStatus.text}</span>

                        <span className="sm:hidden">Status</span>

                    </div>

                </div>

            </div>

        </div>


    )

}

export default PatientHeader