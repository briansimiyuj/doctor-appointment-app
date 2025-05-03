interface TimeSlotGroupProps{

    title: string
    slots: string[]
    selectedTime: string | null
    onSelectTime: (time: string) => void

}

const TimeSlotGroup: React.FC<TimeSlotGroupProps> = ({ title, slots, selectedTime, onSelectTime })=>{   

    if(slots.length === 0) return null

    return(

        <div className="mb-4">

            <h3 className="text-lg font-medium text-gray-900">{title}</h3>

            <div className="grid grid-cols-4 gap-2">

                {

                    slots.map(time =>(

                        <button
                            key={time}
                            className={`${
                                selectedTime === time ? 'bg-primary-bg text-white' : 'bg-white text-gray-700 hover:bg-primary-bg hover:text-white'
                            } p-2 rounded-md shadow-md`}
                            onClick={()=>onSelectTime(time)}
                        >{time}</button>

                    ))

                }

            </div>

        </div>

    )

}

export default TimeSlotGroup