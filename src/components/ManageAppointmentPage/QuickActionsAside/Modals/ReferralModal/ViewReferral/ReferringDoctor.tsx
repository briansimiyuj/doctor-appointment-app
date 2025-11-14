import { ReferralType } from "../../../../../../assets/types/ReferralType"

interface ReferingDoctorProps{
 
   referralData: ReferralType

}

const ReferringDoctor: React.FC<ReferingDoctorProps> = ({ referralData }) =>{

    return(

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">

            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-3">Referring Doctor</h3>

            <div className="space-y-2">

                <div className="flex items-start">

                    <span className="text-sm text-blue-700 dark:text-blue-300 w-24 flex-shrink-0">Name:</span>

                    <span className="text-sm text-blue-900 dark:text-blue-100 font-medium">{referralData.senderDoctor.name}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-blue-700 dark:text-blue-300 w-24 flex-shrink-0">Hospital:</span>

                    <span className="text-sm text-blue-900 dark:text-blue-100">{referralData.senderDoctor.hospital}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-blue-700 dark:text-blue-300 w-24 flex-shrink-0">Email:</span>

                    <span className="text-sm text-blue-900 dark:text-blue-100">{referralData.senderDoctor.email}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-blue-700 dark:text-blue-300 w-24 flex-shrink-0">Phone:</span>

                    <span className="text-sm text-blue-900 dark:text-blue-100">{referralData.senderDoctor.phone}</span>

                </div>

            </div>

        </div>

    )

}

export default ReferringDoctor