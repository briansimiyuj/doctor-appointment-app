import ViewLabOrderModal from "../components/ManageAppointmentPage/QuickActionsAside/Modals/LabOrderModal/ViewLabOrder/ViewLabOrderModal"
import ViewReferralModal from "../components/ManageAppointmentPage/QuickActionsAside/Modals/ReferralModal/ViewReferral/ViewReferralModal"
import SessionContent from "../components/SessionPage/SessionContent/SessionContent"
import SessionHeader from "../components/SessionPage/SessionHeader"
import SessionStatusSidebar from "../components/SessionPage/SessionStatusSidebar"
import { useLoginContext } from "../context/LoginContext"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import NotFoundPage from "./NotFoundPage"

const SessionPage: React.FC = ()=>{

    const { userType } = useLoginContext(),
          { showViewLabOrderModal, showViewReferralModal } = useManageAppointmentContext()

    if(userType === "doctor") return  <NotFoundPage/>

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <SessionHeader/>

            <main className="max-w-7xl mx-auto p-4 md:p-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2">

                        <SessionContent/>

                    </div>

                    <aside className="lg:col-span-1 hidden lg:block">

                        <SessionStatusSidebar/>

                    </aside>

                </div>

            </main>

            { showViewLabOrderModal && <ViewLabOrderModal/> }

            { showViewReferralModal && <ViewReferralModal/> }
            
        </div>

    )

}

export default SessionPage

