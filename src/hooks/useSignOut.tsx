import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"

export const useSignOut = () =>{

    const context = useContext(LoginContext),
            navigate = useNavigate()

    if(!context) throw new Error("useSigOut must be used within a LoginContextProvider")

    const { setName, setEmail, setPassword, setUserType, setIsAuthenticated, setUserID } = context

    const signOut = () =>{

        setName("")

        setEmail("")

        setPassword("")

        setUserType(null)

        setIsAuthenticated(false)

        setUserID(null)

        console.log('User signed out successfully')

        navigate("/login")

    }

    return { signOut }

}