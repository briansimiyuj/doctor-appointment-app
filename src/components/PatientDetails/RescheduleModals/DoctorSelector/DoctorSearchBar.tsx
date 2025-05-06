import { BiSearch } from "react-icons/bi"

interface DoctorSearchBarProps{

    onSearch: (term: string) => void
    searchTerm: string

}    

const DoctorSearchBar: React.FC<DoctorSearchBarProps> = ({ onSearch, searchTerm }) =>{

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{

        onSearch(e.target.value)

    }

    return(

        <form className="flex bg-blue-200 rounded-full p-2 w-full mx-auto">

            <input 
                type="text" 
                className="bg-white rounded-lg p-2 w-full text-xs sm:text-sm md:text-base lg:text-lg  focus:outline-none" 
                placeholder="Search for a doctor"
                value={searchTerm}
                onChange={handleSearch}
            />

            <button className="rounded-lg p-2 ml-2 cursor-pointer">
                
                <BiSearch className="text-black text-xl"/>

            </button>
            
        </form>

    )

}

export default DoctorSearchBar