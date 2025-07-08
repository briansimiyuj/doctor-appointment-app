import { FiEdit, FiTrash2 } from "react-icons/fi"
import SectionHeader from "./SectionHeader"
import { MedicalHistoryType } from "../../../../../assets/types/MedicalHistoryType"

interface MedicalHistorySectionProps{

    title: string
    items: string[]
    section: MedicalHistoryType
    onAdd: (section: MedicalHistoryType) => void
    onEdit: (index: number, value: string, section: MedicalHistoryType) => void
    onDelete: (index: number, value: string, section: MedicalHistoryType) => void

}

const MedicalHistorySection: React.FC<MedicalHistorySectionProps> = ({ title, items, onAdd, onEdit, onDelete, section }) =>{

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
                                       onClick={() => onEdit(index, item, section)}
                                    >

                                        <FiEdit className="w-4 h-4"/>

                                    </button>

                                    <button
                                       className="text-red-500 hover:text-red-700 transition"
                                       onClick={() => onDelete(index, item, section)}
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