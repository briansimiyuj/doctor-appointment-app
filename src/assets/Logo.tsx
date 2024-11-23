import { MdLocalHospital } from "react-icons/md"

const Logo: React.FC = ()=>{

    return(

        <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            
            <MdLocalHospital className="text-primary-bg text-4xl hover:scale-110 transition-transform"/>

            <h1 className="text-base md:text-2xl font-bold text-primary-bg tracking-tight">MediCare Hub</h1>

        </div>

    )

}

export default Logo