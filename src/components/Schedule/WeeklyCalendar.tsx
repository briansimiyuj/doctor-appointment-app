import { useSchedule } from "../../context/ScheduleContext"

const WeeklyCalendar: React.FC = ()=>{

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          { schedule } = useSchedule()


    return(

        <div className="w-full rounded-lg shadow p-4 bg-primary-bg sm:p-6">

            <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>

            <div className="flex flex-col sm:grid sm:grid-cols-7 gap-4 ">
 
                {

                    days.map((day, index) =>(

                        <div key={index} className="flex md:flex-col items-center border-b sm:border-0 pb-2 gap-6 px-4 sm:pb-0">

                            <h3 className="font-medium text-base md:text-lg sm:mb-2">{day}</h3>

                            <div className="flex sm:block gap-2 sm:space-y-2 flex-wrap">

                                {

                                    schedule.availableSlots[index].slots.map((daySlots, index) =>(

                                        <div 
                                            key={index}
                                            className={`
                                                p-1 sm:p-2 
                                                rounded 
                                                text-xs sm:text-sm 
                                                ${daySlots.includes("available") ? "bg-green-200" : daySlots.includes("booked") ? "bg-red-200" : daySlots.includes("break") ? "bg-yellow-200" : "bg-gray-200"}
                                                
                                            `}
                                        >

                                            {daySlots}

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>


    )

}

export default WeeklyCalendar