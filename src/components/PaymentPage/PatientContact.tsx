import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import { BillingRecord } from "../../assets/types/BillingType"

interface PatientContactProps{

    invoice: BillingRecord

}

const PatientContact: React.FC<PatientContactProps> = ({ invoice })=>{

    return(

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">

                <FaUser className="text-blue-600 dark:text-blue-400"/>

                Patient Contact

            </h2>


            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">

                <div className="flex items-start gap-3">

                    <FaUser className="text-gray-400 mt-3"/>

                    <div className="ml-2">

                        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Patient Name</p>

                        <p className="text-gray-900 dark:text-white text-base font-medium">{invoice.patientName}</p>

                    </div>

                </div>

                <div className="flex items-start gap-3">

                    <FaEnvelope className="text-gray-400 mt-3"/>
                   
                    <div className="ml-2">

                        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Patient Email</p>

                        <p className="text-gray-900 dark:text-white text-base font-medium">{invoice.patientEmail}</p>

                    </div>

                </div>

                <div className="flex items-start gap-3">

                    <FaPhone className="text-gray-400 mt-3"/>

                    <div className="ml-2">

                        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Patient Phone</p>

                        <p className="text-gray-900 dark:text-white text-base font-medium">{invoice.patientPhone}</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default PatientContact