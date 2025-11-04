import ExtendSessionControls from "./ExtendSessionControls"
import FollowUpButtons from "./FollowUpButtons"

const QuickActionsAside: React.FC = ()=>{

    return(

        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24 space-y-6">

            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Quick Actions</h2>

            <ExtendSessionControls/>

            <FollowUpButtons/>

        </div>

    )

}

export default QuickActionsAside