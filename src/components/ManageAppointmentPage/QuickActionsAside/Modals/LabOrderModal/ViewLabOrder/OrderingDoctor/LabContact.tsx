import { useManageAppointmentContext } from "../../../../../../../context/ManageAppointmentContext"
import DetailItem from "../OrderSummary/DetailItem"

const LabContact: React.FC = ()=>{


    const { labOrderData } = useManageAppointmentContext(),
          labContact = labOrderData?.labContact

    return(

        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-xl border border-blue-200 shadow-sm">
            
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Lab Contact Details</h3>

            <DetailItem label="Lab Name" value={labOrderData?.preferredLab}/>

            <DetailItem label="Lab Email" value={labContact?.email}/>

            <DetailItem label="Lab Phone" value={labContact?.phone}/>

        </div>

    )

}

export default LabContact