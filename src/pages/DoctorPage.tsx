import FilterMenu from "../components/Doctors/FilterMenu"
import SearchBar from "../components/Doctors/SearchBar"

const DoctorPage: React.FC = ()=>{

    return(

        <>
        
            <SearchBar/>


            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">

                <FilterMenu/>

            </div>
        
        </>

    )

}

export default DoctorPage