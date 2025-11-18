import ClinicalJustification from "./ClinicalJustification/ClinicalJustification"
import LabContact from "./OrderingDoctor/LabContact"
import OrderingDoctor from "./OrderingDoctor/OrderingDoctor"
import OrderSummary from "./OrderSummary/OrderSummary"

const ModalBody: React.FC = ()=>{

    return(

        <div className="space-y-6 mt-4">

            <OrderSummary/>

            <ClinicalJustification/>

            <OrderingDoctor/>

            <LabContact/>

        </div>

    )

}

export default ModalBody