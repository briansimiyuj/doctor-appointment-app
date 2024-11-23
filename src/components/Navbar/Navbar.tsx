import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo"

const Navbar: React.FC = () =>{

    return(

        <nav className="flex justify-between items-center py-4 mb-5 border-b text-sm border-b-gray-400">

            <NavLink to="/">
            
                <Logo/>
            
            </NavLink>


            <ul className="hidden md:flex items-start gap-5 font-medium">

                <NavLink to="/">
                
                    <li className="py-1">Home</li>

                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
                
                </NavLink>


                <NavLink to="/about-us">
                
                    <li className="py-1">About Us</li>

                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
                
                </NavLink>


                <NavLink to="/doctors">

                    <li className="py-1">Doctors</li>

                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

                </NavLink>


                <NavLink to="/contact-us">

                    <li className="py-1">Contact Us</li>

                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

                </NavLink>
                
            </ul>

        </nav>

    )

}

export default Navbar