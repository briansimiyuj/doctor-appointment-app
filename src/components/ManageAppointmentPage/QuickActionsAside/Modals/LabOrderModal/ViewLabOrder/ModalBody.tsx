import ClinicalJustification from "./ClinicalJustification/ClinicalJustification"
import OrderSummary from "./OrderSummary/OrderSummary"

const ModalBody: React.FC = ()=>{

    return(

        <div className="space-y-6 mt-4">

            <OrderSummary/>

            <ClinicalJustification/>

        </div>

    )

}

export default ModalBody