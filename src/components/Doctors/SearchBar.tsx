import { BiSearch } from "react-icons/bi"

const SearchBar: React.FC = ()=>{

    return(

        <form className="flex bg-blue-200 rounded-full p-2 w-2/3 mx-auto">

            <input type="text" className="bg-white rounded-lg p-2 w-full text-xs sm:text-sm md:text-base lg:text-lg  focus:outline-none" placeholder="Search for a doctor"/>

            <button className="rounded-lg p-2 ml-2">
                
                <BiSearch className="text-black text-2xl" />

            </button>
            
        </form>

    )

}

export default SearchBar