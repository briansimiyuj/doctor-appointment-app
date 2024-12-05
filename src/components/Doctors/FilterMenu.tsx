import { useState } from "react"

const FilterMenu: React.FC = ()=>{

    const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false)

    return(

        <div className="mt-5">
        
            <div className="flex flex-col gap-3 items-start">

                <h2 className="text-2xl text-gray-600">Browse by Speciality</h2>

                <button
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className={`py-1 px-3 border rounded text-sm transition-all ${showFilterMenu ? "bg-primary-bg text-white" : ""}`}
                >Filter Menu</button>

            </div>
        
        </div>

    )

}

export default FilterMenu