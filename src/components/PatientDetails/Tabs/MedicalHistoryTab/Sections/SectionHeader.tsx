import { FiPlus } from "react-icons/fi"

interface SectionHeaderProps{
  
    title: string
    items: string[]
    onAdd: () => void

}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, items, onAdd }) =>{

  return(

    <div className="space-y-4">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 mb-6 border-b border-gray-200">

        <h4 className="text-base font-semibold">
    
          <span className="border-b-2 border-primary-bg pb-1">{title} ({items.length})</span>

        </h4>

        <button
            type="button"
            aria-label={`Add ${title}`}
            onClick={onAdd}
            className=" flex items-center gap-2 bg-primary-bg text-secondary-bg px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1"
        >

            <FiPlus className="w-6 h-6"/>

            <span className="text-sm font-semibold">Add {title}</span>

        </button>

      </div>

    </div>
  
)

}

export default SectionHeader