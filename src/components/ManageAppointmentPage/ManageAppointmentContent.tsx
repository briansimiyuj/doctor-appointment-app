import AppointmentHeader from "./AppointmentHeader"
import QuickActionsAside from "./QuickActionsAside/QuickActionsAside"

const ManageAppointmentContent: React.FC = () =>{

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <AppointmentHeader/>

            <main className="max-w-7xl mx-auto p-4 md:p-6">
            
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2">
                        {/* <MainContentArea /> */}
                    </div>

                    <aside className="lg:col-span-1 hidden lg:block"> 
                    
                        <QuickActionsAside/>

                    </aside>
                
                </div>

            </main>

        </div>

    )

}

export default ManageAppointmentContent