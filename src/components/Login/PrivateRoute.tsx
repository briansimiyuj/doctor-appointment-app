import { useContext, useEffect } from "react"
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"

interface PrivateRouteProps{

    children: JSX.Element

}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("PrivateRoute must be used within a LoginContextProvider")

    const { isAuthenticated } = context,
          navigate = useNavigate()

    useEffect(() =>{

        if(!isAuthenticated){

            navigate("/login", { replace: true })

        }

    }, [isAuthenticated, navigate])

    if(!isAuthenticated){

        return null
        
    }

    return children

}

export default PrivateRoute