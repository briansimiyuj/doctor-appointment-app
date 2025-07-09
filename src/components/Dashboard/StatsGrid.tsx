import { useState } from "react"
import { useDoctorStats } from "../../context/DoctorStatsContext"

const StatsGrid: React.FC = ()=>{

    const { stats } = useDoctorStats()

    const statsArray =[

        { label: "Total Patients", value: stats.totalPatients },
        { label: "Today's Appointments", value: stats.todayAppointments },
        { label: "Completed Appointments", value: stats.completedAppointments },
        { label: "Cancelled Appointments", value: stats.cancelledAppointments },
        { label: "Upcoming Appointments", value: stats.upcomingAppointments },
        { label: "Total Revenue", value: `$ ${stats.totalRevenue}` },
        { label: "Total Appointments", value: stats.totalAppointments },
        { label: "No Show Appointments", value: stats.noShowAppointments },
        { label: "New Patients This Month", value: stats.newPatientsThisMonth },
        { label: "Follow Up Appointments", value: stats.followUpAppointments }

    ],
        [showAll, setShowAll] = useState(false),
        visibleStats = showAll ? statsArray : statsArray.slice(0, 3)

    return(

        <div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Practice Overview</h2>

            <div className="grid grid-cols-auto gap-4">

                {

                    visibleStats.map(stat =>(

                        <div
                            key={stat.label}
                            className="dark:bg-primary-bg bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>


                            <div className="text-gray-900 dark:text-white">{stat.label}</div>

                        </div>

                    ))

                }

            </div>

            <div className="mt-4">

                {

                    statsArray.length > 3 &&(

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-secondary-btn dark:text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>

                    )

                }

            </div>

        </div>

    )

}

export default StatsGrid