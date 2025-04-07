import { ReactNode } from "react"
import { usePatientDetails } from "../../../context/PatientDetailsContext"

interface TabContentProps{

    tabID: "medical-history" | "appointments" | "notes" | "documents"
    children: ReactNode

}

const TabContent: React.FC<TabContentProps> = ({ tabID, children })=>{

    const { activeTab } = usePatientDetails()

    if(activeTab !== tabID) return null

    return(

        <div className="p-6 animate-fade-in">

            {children}

        </div>

    )

}

export default TabContent