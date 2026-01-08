import { useManageAppointmentContext } from "../../context/ManageAppointmentContext"
import { VideoCallContextProvider } from "../../context/VideoCallContext"
import LiveSession from "../SessionPage/SessionContent/LiveSession/LiveSession"
import AppointmentHeader from "./AppointmentHeader"
import CompleteModal from "./QuickActionsAside/Modals/CompleteModal/CompleteModal"
import LabOrderModal from "./QuickActionsAside/Modals/LabOrderModal/LabOrderModal"
import ViewLabOrderModal from "./QuickActionsAside/Modals/LabOrderModal/ViewLabOrder/ViewLabOrderModal"
import ReferralModal from "./QuickActionsAside/Modals/ReferralModal/ReferralModal"
import ViewReferralModal from "./QuickActionsAside/Modals/ReferralModal/ViewReferral/ViewReferralModal"
import QuickActionsAside from "./QuickActionsAside/QuickActionsAside"
import WaitingRoom from "./WaitingRoom/WaitingRoom"

const ManageAppointmentContent: React.FC = () =>{

    const { showReferralModal, showLabOrderModal, showCompletionModal, showViewReferralModal, showViewLabOrderModal, sessionStatus } = useManageAppointmentContext()

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <AppointmentHeader/>

            <main className="max-w-7xl mx-auto p-4 md:p-6">
            
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2">
                        
                        {

                            (sessionStatus === "Active" || sessionStatus === "Paused" || sessionStatus === "Overtime") ?(

                                <VideoCallContextProvider>
                                
                                    <LiveSession/>
                    
                                </VideoCallContextProvider>
                                            
                            ):(sessionStatus === "Ready") ?(

                                <WaitingRoom/>

                            ): null

                        }


                    </div>

                    <aside className="lg:col-span-1 hidden lg:block"> 
                    
                        <QuickActionsAside/>

                    </aside>
                
                </div>

            </main>

            { showReferralModal && <ReferralModal/> }

            { showLabOrderModal && <LabOrderModal/> }

            { showCompletionModal && <CompleteModal/> }

            { showViewReferralModal && <ViewReferralModal/> }
            
            { showViewLabOrderModal && <ViewLabOrderModal/> }
            
        </div>

    )

}

export default ManageAppointmentContent