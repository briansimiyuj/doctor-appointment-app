import { NavLink } from "react-router-dom"
import { assets } from "../../assets/frontend/assets"

type MobileMenuPropa ={

    showMenu: boolean
    setShowMenu: (showMenu: boolean) => void

}


const MobileMenu: React.FC<MobileMenuPropa> = ({ showMenu, setShowMenu }) =>{

    return(

        <div className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showMenu ? "w-full fixed" : "w-0 h-0"}`}>

            <div className="flex items-center justify-between px-5 py-6">

                <img src={assets.logo} alt="logo" className="w-36 cursor-pointer" />

                <img src={assets.crossIcon} alt="crossIcon" className="w-7 cursor-pointer" onClick={() => setShowMenu(false)}/>

            </div>


            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">


                <NavLink 
                    to="/"
                    onClick={() => setShowMenu(false)}
                >
                
                    <li className="inline-block px-4 py-2 rounded">Home</li>

                    <hr className="border-none outline-none h-0.5 bg-primary-bg w-3/5 m-auto hidden"/>
                
                </NavLink>


                <NavLink
                    to="/doctors"
                    onClick={() => setShowMenu(false)}
                >

                    <li className="inline-block px-4 py-2 rounded">All Doctors</li>

                    <hr className="border-none outline-none h-0.5 bg-primary-bg w-3/5 m-auto hidden"/>
                    
                </NavLink>


                <NavLink
                    to="/about-us"
                    onClick={() => setShowMenu(false)}
                >

                    <li className="inline-block px-4 py-2 rounded">About Us</li>

                    <hr className="border-none outline-none h-0.5 bg-primary-bg w-3/5 m-auto hidden"/>

                </NavLink>


                <NavLink
                    to="/contact-us"
                    onClick={() => setShowMenu(false)}
                >

                    <li className="inline-block px-4 py-2 rounded">Contact Us</li>

                    <hr className="border-none outline-none h-0.5 bg-primary-bg w-3/5 m-auto hidden"/>

                </NavLink>
                
            </ul>

        </div>

    )

}

export default MobileMenu