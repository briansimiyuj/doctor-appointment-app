import { useLoginContext } from "../../../../../../../context/LoginContext"
import { useManageAppointmentContext } from "../../../../../../../context/ManageAppointmentContext"

const PreparationInstructions: React.FC = ()=>{

    const { labOrderData } = useManageAppointmentContext(),
          preparationInstructions = labOrderData?.preparationInstructions,
          { userType } = useLoginContext()

    return(

        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-xl border border-blue-200 shadow-lg">

            <h3 className="text-xl font-extrabold text-gray-800 mb-3 border-b border-yellow-300 pb-2">
                
                <span role="img" aria-label="alert" className="mr-2">⚠️</span>

                Patient Preparation Instructions

            </h3>

            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-normal text-base">

                {preparationInstructions || `No specific instruction given. ${userType === "patient"}` ? 'Contact the lab for further instructions': null }

            </p>

        </div>

    )

}

export default PreparationInstructions