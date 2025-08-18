import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps{

    children: JSX.Element

}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("PrivateRoute must be used within a LoginContextProvider")

    const { isAuthenticated, loading } = context

    if(loading) return null

    if(!isAuthenticated){

        return <Navigate to="/login" />
        
    }

    return children

}

export default PrivateRoute