import { useManageAppointmentContext } from "../../../../../../../context/ManageAppointmentContext"
import DetailItem from "../OrderSummary/DetailItem"

const OrderingDoctor: React.FC = ()=>{

    const { labOrderData } = useManageAppointmentContext(),
         senderDoctor = labOrderData?.senderDoctor

    return(

        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-xl border border-blue-200 shadow-sm">
            
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Ordering Doctor</h3>

            <DetailItem label="Name" value={senderDoctor?.name}/>

            <DetailItem label="Email" value={senderDoctor?.email}/>

            <DetailItem label="Phone" value={senderDoctor?.phone}/>

            <DetailItem label="Hospital" value={senderDoctor?.hospital}/>

        </div>

    )

}

export default OrderingDoctor