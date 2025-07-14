import { useContext } from "react"
import { AppointmentsContext } from "../../context/AppointmentContext"

const TabSelectorButtons: React.FC = ()=>{

  const context = useContext(AppointmentsContext)

  if(!context) return null

  const {  activeTab, setActiveTab } = context


  return(

      <div className="flex gap-4 border-b mb-4">

        <button
          onClick={() => setActiveTab("upcoming")}
          className={activeTab === "upcoming" ? "border-b-2 border-blue-500" : ""}
        >Upcoming</button>
        
        <button
          onClick={() => setActiveTab("past")}
          className={activeTab === "past" ? "border-b-2 border-blue-500" : ""}
        >Past</button>
        
    </div>

  )

}

export default TabSelectorButtons