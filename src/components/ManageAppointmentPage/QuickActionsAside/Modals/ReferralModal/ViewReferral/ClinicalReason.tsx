import { ReferralType } from "../../../../../../assets/types/ReferralType"

interface ClinicalReasonProps{

    referralData: ReferralType

}

const ClinicalReason: React.FC<ClinicalReasonProps> = ({ referralData })=>{

    return(

        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">

            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Clinical Reason</h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{referralData.clinicalReason}</p>

        </div>

    )

}

export default ClinicalReason