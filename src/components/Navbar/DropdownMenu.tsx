import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"

const DropdownMenu: React.FC = () =>{

    const navigate = useNavigate(),
          loginContext = useContext(LoginContext)

    if(!loginContext){
    
        throw new Error('LoginContext is undefined')

    }
    
    const { setIsAuthenticated } = loginContext

    return(

        <div className="absolute top-0 right-0 p-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">

            <ul className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">

                <li className="cursor-pointer hover:text-primary" onClick={() => navigate("/profile")}>My Profile</li>

                <li className="cursor-pointer hover:text-primary" onClick={() => navigate("/bookings")}>My Bookings</li>

                <li className="cursor-pointer hover:text-primary" onClick={() => navigate("/settings")}>Settings</li>

                <li className="cursor-pointer hover:text-primary" onClick={() => setIsAuthenticated(false)}>Logout</li>

            </ul>

        </div>

    )

}

export default DropdownMenu