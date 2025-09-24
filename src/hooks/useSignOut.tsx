import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"
import { useToast } from "./useToast"

export const useSignOut = () =>{

    const context = useContext(LoginContext),
            navigate = useNavigate()

    if(!context) throw new Error("useSigOut must be used within a LoginContextProvider")

    const { setName, setEmail, setPassword, setUserType, setIsAuthenticated, setUserID, closeSignOutModal } = context,
          { showToast } = useToast()

    const signOut = () =>{

        setName("")

        setEmail("")

        setPassword("")

        setUserType(null)

        setIsAuthenticated(false)

        setUserID(null)

        localStorage.removeItem("currentUser")

        localStorage.removeItem("isAuthenticated")

        showToast("Signed out successfully", "success")

        closeSignOutModal()

        navigate("/login")

    }

    return { signOut }

}