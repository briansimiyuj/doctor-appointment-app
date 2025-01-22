import { MdLocalHospital } from "react-icons/md"

interface LogoProps{

    size?: "normal" | "large"

}

const Logo: React.FC<LogoProps> = ({ size = "normal" }) =>{

    return(

        <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            
            <MdLocalHospital className={`text-primary-bg ${size === 'large' ? 'text-6xl' : 'text-4xl'} hover:scale-110 transition-transform`}/>

            <h1 className={`${size === 'large' ? 'text-4xl' : 'text-base md:text-2xl'} font-bold text-primary-bg tracking-tight`}>MediCare Hub</h1>

        </div>

    )

}

export default Logo