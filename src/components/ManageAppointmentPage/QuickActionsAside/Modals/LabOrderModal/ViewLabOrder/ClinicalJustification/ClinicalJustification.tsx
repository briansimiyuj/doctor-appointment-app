import { useManageAppointmentContext } from "../../../../../../../context/ManageAppointmentContext"
import TestOrdered from "./TestOrdered"

const ClinicalJustification: React.FC = ()=>{

    const { labOrderData } = useManageAppointmentContext()

    return(

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 shadow-sm">
            
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Tests and Justification</h3>

            <div className="mb-4">

                <p className="text-sm font-semibold text-gray-700 mb-2">Tests Ordered:</p>

                <TestOrdered tests={labOrderData?.testsOrdered}/>

            </div>

            <div>

                <p className="text-sm font-semibold text-gray-700 mb-2">Clinical Justification:</p>

                <div className="p-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">

                    {labOrderData?.clinicalJustification || 'No clinical justification provided.'}

                </div>

            </div>

        </div>

    )

}

export default ClinicalJustification