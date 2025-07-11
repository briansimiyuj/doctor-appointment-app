interface SlotListProps{

    slots:{ date: string, slots: string[] }[]

}

const SlotList: React.FC<SlotListProps> = ({ slots })=>{

    return(

        <div className="mb-4">

            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Next Available Slots</h3>

            {

                slots.length > 0 ?(

                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">

                        {

                            slots.map((slot, index)=>(

                                <li key={index} className="mb-2">

                                    <strong>{slot.date}:</strong> {slot.slots.slice(0, 3).join(", ")} 

                                </li>

                            ))

                        }

                    </ul>

                ):(

                    <p className="text-gray-700 dark:text-gray-400">No slots available</p>

                )

            }

        </div>

    )

}

export default SlotList