import { ReferralType } from "../../../../../../assets/types/ReferralType"

interface ReferralHeaderProps{

    referralData: ReferralType
    formatDate: (dateString: string) => string
    getUrgencyColor: (urgency: string | null) => string

}

const ReferralHeader: React.FC<ReferralHeaderProps> = ({ referralData, formatDate, getUrgencyColor })=>{

    return(

        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">

            <div>
            
                <p className="text-sm text-gray-500 dark:text-gray-400">Referral Date</p>

                <p className="text-base font-medium text-gray-900 dark:text-white">{formatDate(referralData.createdAt)}</p>

            </div>

            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getUrgencyColor(referralData.urgency)}`}>

                {referralData.urgency || "Not Specified"}

            </span>

        </div>

    )

}

export default ReferralHeader