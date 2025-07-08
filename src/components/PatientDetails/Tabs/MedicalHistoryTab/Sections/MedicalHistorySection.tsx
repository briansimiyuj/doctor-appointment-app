import { FiEdit, FiTrash2 } from "react-icons/fi"
import SectionHeader from "./SectionHeader"

interface MedicalHistorySectionProps{

    title: string
    items: string[]
    onAdd: () => void

}

const MedicalHistorySection: React.FC<MedicalHistorySectionProps> = ({ title, items, onAdd }) =>{

    return(

        <>
        
            <SectionHeader title={title} items={items} onAdd={onAdd}/>

            <ul className="space-y-2 mb-5">

                {

                    items.length == 0 ?(

                        <li className="text-gray-500 text-sm">No {title.toLowerCase()} added yet.</li>

                    ):(


                        items.map((item, index) =>(

                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded-md flex justify-between items-center"
                            >

                                <span className="text-sm text-gray-800">{item}</span>

                                <div className="flex items-center gap-2">

                                    <button
                                       className="text-primary-btn hover:text-blue-800 transition"
                                    >

                                        <FiEdit className="w-4 h-4"/>

                                    </button>

                                    <button
                                       className="text-red-500 hover:text-red-700 transition"
                                    >

                                        <FiTrash2 className="w-4 h-4"/>

                                    </button>


                                </div>

                            </li>

                        ))

                    )

                }

            </ul>
        
        </>

    )

}

export default MedicalHistorySection