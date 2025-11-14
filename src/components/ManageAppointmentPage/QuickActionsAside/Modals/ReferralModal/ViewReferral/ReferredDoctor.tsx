import { ReferralType } from "../../../../../../assets/types/ReferralType"

interface ReferredDoctorProps{

    referralData: ReferralType

}

const ReferredDoctor: React.FC<ReferredDoctorProps> = ({ referralData })=>{

    return(

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">

            <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-200 mb-3">Referred To</h3>

            <div className="space-y-2">

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Specialist:</span>

                    <span className="text-sm text-purple-900 dark:text-purple-100 font-medium">{referralData.speciality}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Doctor:</span>
                    
                    <span className="text-sm text-purple-900 dark:text-purple-100 font-medium">{referralData.recipientName}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Hospital:</span>

                    <span className="text-sm text-purple-900 dark:text-purple-100">{referralData.recipientContact.hospital}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Location:</span>

                    <span className="text-sm text-purple-900 dark:text-purple-100">{referralData.recipientContact.hospitalLocation}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Email:</span>

                    <span className="text-sm text-purple-900 dark:text-purple-100">{referralData.recipientContact.email}</span>

                </div>

                <div className="flex items-start">

                    <span className="text-sm text-purple-700 dark:text-purple-300 w-24 flex-shrink-0">Phone:</span>

                    <span className="text-sm text-purple-900 dark:text-purple-100">{referralData.recipientContact.phone}</span>

                </div>
                
            </div>

        </div>

    )

}

export default ReferredDoctor