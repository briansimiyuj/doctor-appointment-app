import { useState } from "react"
import { useDoctorStats } from "../../context/DoctorStatsContext"

const PerformanceSummary: React.FC = ()=>{

    const { performance } = useDoctorStats()

    const performanceMetrics =[

        { label: "Response Rate", value: `${performance.responseRate}%` },
        { label: "Average Wait Time", value: `${performance.averageWaitingTime}%` },
        { label: "Appointment Cancellation Rate", value: `${performance.appointmentCancellationRate}%` },
        { label: "Appointment Completion Rate", value: `${performance.appointmentCompletionRate}%` },
        { label: "Average Patient Satisfaction", value: `${performance.patientSatisfactionRate}%` },

    ], 
        [showAll, setShowAll] = useState(false),
        visibleMetrics = showAll ? performanceMetrics : performanceMetrics.slice(0, 3)

    return(

        <div className="mt-8">

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Performance Summary</h2>

            <div className="grid grid-cols-auto gap-4">

                {

                    visibleMetrics.map((metric, index) =>(

                        <div
                            key={index}
                            className="bg-primary-bg p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-xl font-bold text-white dark:text-white">{metric.value}</div>


                            <div className="text-white dark:text-white">{metric.label}</div>

                        </div>

                    ))

                }

            </div>

            <div className="mt-4">

                {

                    performanceMetrics.length > 3 &&(

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-secondary-btn text-white dark:text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>

                    )

                }

            </div>

        </div>

    )

}

export default PerformanceSummary