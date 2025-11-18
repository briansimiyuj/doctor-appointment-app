import { useManageAppointmentContext } from "../../../../../../../context/ManageAppointmentContext"
import DetailItem from "./DetailItem"

const OrderSummary: React.FC = ()=>{

    const { labOrderData } = useManageAppointmentContext(),
          order = labOrderData,
          urgencyLevel = order?.urgency

    const urgencyStyle = String(urgencyLevel) === "High"
        ? 'bg-red-100 text-red-700'
        : String(urgencyLevel) === "Medium"
        ? 'bg-yellow-100 text-yellow-700'
        : 'bg-green-100 text-green-700'


    return(

        <div className="p-4 bg-indigo-50 dark:bg-gray-700 rounded-xl border border-indigo-200 shadow-sm">
            
            <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-50 mb-3 border-b pb-2">Order Summary</h3>

            <div className="flex justify-between items-center pb-2">
                   
               <span className="text-sm font-medium text-gray-500">Urgency Level:</span>

               <span className={`text-lg font-bold px-3 py-2 rounded-full ${urgencyStyle}`}>{urgencyLevel}</span>

            </div>

            <DetailItem label="Preferred Lab" value={order?.preferredLab}/>

            <DetailItem label="Preferred Date" value={new Date(order?.createdAt || Date.now()).toLocaleDateString()}/>

        </div>

    )

}

export default OrderSummary