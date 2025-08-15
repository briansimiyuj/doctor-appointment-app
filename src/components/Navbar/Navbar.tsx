import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo"
import { useContext, useState } from "react"
import { assets } from "../../assets/frontend/assets"
import MobileMenu from "./MobileMenu"
import DropdownMenu from "./DropdownMenu"
import { LoginContext } from "../../context/LoginContext"
import { ProfileContext } from "../../context/ProfileContext"

const Navbar: React.FC = () =>{

    const [showMenu, setShowMenu] = useState<boolean>(false),
          navigate = useNavigate(),
          location = useLocation(),
          loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) throw new Error("Login and Profile context not found")

    const { isAuthenticated, userType } = loginContext,
          { profileImage } = profileContext

    if(profileImage instanceof File) return

    return(

        <nav className="flex flexc justify-between items-center py-4 mb-5 border-b text-sm border-b-gray-400">

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


                {

                    userType === "patient" ?(

                        <NavLink to="/doctors">

                            <li className="py-1">Doctors</li>

                            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

                        </NavLink>

                    ):(

                        <NavLink to="/dashboard">

                            <li className="py-1">Dashboard</li>

                            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

                        </NavLink>

                    )

                }




                <NavLink to="/contact-us">

                    <li className="py-1">Contact Us</li>

                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

                </NavLink>
                
            </ul>



            <div className="flex items-center gap-4">

                {

                    isAuthenticated ?(

                        <div className="flex items-center gap-2 cursor-pointer group relative">

                            <img src={profileImage ? profileImage.content : assets.avatar} alt="profile-pic" className="w-10 h-10 rounded-full cursor-pointer"/>

                            <img src={assets.dropDownIcon} alt="drop-down-icon" className="w-25"/>

                            <DropdownMenu/>

                        </div>

                    ):(

                        location.pathname !== "/login" ?(

                            <button 
                                className="bg-primary-bg text-white text-sm md:text-xl px-8 py-3 rounded-full font-light"
                                onClick={() => navigate("/login")}
                            >Login</button>

                        ): null
                        
                    )

                }

                <img 
                    src={assets.menuIcon} 
                    alt="menu-icon" 
                    className="w-6 md:hidden cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                />


                <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
                
            </div>

        </nav>

    )

}

export default Navbar