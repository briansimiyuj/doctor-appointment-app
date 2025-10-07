import { useContext } from "react"
import { AppointmentsContext } from "../../context/AppointmentContext"
import CountBadge from "./CountBadge"

const TabSelectorButtons: React.FC = ()=>{

  const context = useContext(AppointmentsContext)

  if(!context) return null

  const {  activeTab, setActiveTab, upcomingAppointments, cancelledAppointments, pastAppointments} = context


  return(

    <div className="flex gap-4 border-b mb-4">

      <button
        onClick={() => setActiveTab("upcoming")}
        className={`flex items-center pb-2 text-sm font-medium ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
      >
        
        Upcoming

        { upcomingAppointments.length > 0 && <CountBadge count={upcomingAppointments.length}/> }

      </button>
      
      <button
        onClick={() => setActiveTab("past")}
        className={`flex items-center pb-2 text-sm font-medium ${activeTab === "past" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
      >
        
        Past

        { pastAppointments.length > 0 && <CountBadge count={pastAppointments.length}/> }
        
      </button>

      <button
        onClick={() => setActiveTab("cancelled")}
        className={`flex items-center pb-2 text-sm font-medium ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
      >
        
        Cancelled

        { cancelledAppointments.length > 0 && <CountBadge count={cancelledAppointments.length}/> }

      </button>
        
    </div>

  )

}

export default TabSelectorButtons