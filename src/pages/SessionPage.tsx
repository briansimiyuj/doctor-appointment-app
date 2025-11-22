import SessionHeader from "../components/SessionPage/SessionHeader"
import SessionStatusSidebar from "../components/SessionPage/SessionStatusSidebar"
import { useLoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"

const SessionPage: React.FC = ()=>{

    const { userType } = useLoginContext()

    if(userType === "doctor") return  <NotFoundPage/>

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <SessionHeader/>

            <main className="max-w-7xl mx-auto p-4 md:p-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <aside className="lg:col-span-1 hidden lg:block">

                        <SessionStatusSidebar/>

                    </aside>

                </div>

            </main>
            
        </div>

    )

}

export default SessionPage

