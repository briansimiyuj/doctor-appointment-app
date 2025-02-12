import { useSchedule } from "../../context/ScheduleContext"

const WeeklyCalendar: React.FC = ()=>{

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          { schedule } = useSchedule()


    return(

        <div className="w-full rounded-lg shadow p-4 bg-primary-bg sm:p-6">

            <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>

            <div className="flex flex-col sm:grid sm:grid-cols-7 gap-4 ">
 
                {

                    schedule.availableSlots.map((day, index) =>(

                        <div key={index} className="flex md:flex-col items-center border-b sm:border-0 pb-2 gap-6 px-4 sm:pb-0">

                            <h3 className="font-medium text-base md:text-lg sm:mb-2">{days[new Date(day.date).getDay()]} <br/> {day.date}</h3>

                            <div className="flex sm:block gap-2 sm:space-y-2 flex-wrap">

                                {

                                    schedule.availableSlots[index].slots.map((daySlots, index) =>{

                                        const [time] = daySlots.split(" - ")

                                        return(

                                            <div 
                                                key={index}
                                                className={`
                                                    p-1 sm:p-2 
                                                    rounded 
                                                    text-xs sm:text-sm 
                                                    ${daySlots.includes("available") ? "bg-green-200" : daySlots.includes("booked") ? "bg-red-200" : daySlots.includes("break") ? "bg-yellow-200" : "bg-gray-200"}                                                
                                                `}
                                            >

                                                {

                                                    daySlots.includes("booked") ?(

                                                        <span className="text-gray-600">{daySlots}</span>

                                                    ):(

                                                        <select 
                                                           className={`outline-none w-full ${daySlots.includes("available") ? "bg-green-200" : daySlots.includes("break") ? "bg-yellow-200" : "bg-gray-200"}`}
                                                           defaultValue={`${daySlots.includes("available") ? "available" : daySlots.includes("break") ? "break" : "blocked"} - ${time}`}
                                                    >
                                                                                                                
                                                        <option value={`available - ${time}`}>Available - {time}</option>

                                                        <option value={`break - ${time}`}>Break - {time}</option>

                                                        <option value={`blocked - ${time}`}>Blocked - {time}</option>
                                                                                                                
                                                    </select>



                                                    )
                                            
                                                }

                                            </div>

                                        )

                                    })

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