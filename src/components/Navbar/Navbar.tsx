import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo"

const Navbar: React.FC = () =>{

    return(

        <nav className="flex justify-between items-center py-4 mb-5 border-b text-sm border-b-gray-400">

            <NavLink to="/">
            
                <Logo/>
            
            </NavLink>

        </nav>

    )

}

export default Navbar