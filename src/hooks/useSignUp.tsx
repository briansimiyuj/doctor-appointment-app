import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { useToast } from "./useToast"

export const useSignUp = () =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("useSignUp must be used within a LoginContextProvider")

    const { setEmail, setName, setPassword, setConfirmPassword, setIsAuthenticated, setUserType, setUserID } = context,
          { showToast } = useToast(),
           navigate = useNavigate()

    const signUp = (
        email: string,
        name: string,
        password: string,
        confirmPassword: string,
        userType: "patient" | "doctor"
    ) =>{
    
        if(!email || !name || !password || !confirmPassword || !userType){
            
            alert("Please fill in all fields")
         
            return
            
        }

        if(password !== confirmPassword){
            
            alert("Passwords do not match")
            
            return
            
        }

        const userID = `${userType}-${uuidv4()}`

        const userData = { email, name, password, userType, userID }

        localStorage.setItem(`userData-${userID}`, JSON.stringify(userData))

        localStorage.setItem("isAuthenticated", JSON.stringify(true))

        localStorage.setItem("currentUser", JSON.stringify(userData))

        setEmail(email)

        setName(name)

        setPassword(password)

        setConfirmPassword(confirmPassword)

        setUserType(userType)

        setUserID(userID)

        setIsAuthenticated(true)

        navigate("/")

        showToast("Signed up successfully", "success")
    
    }

    return { signUp }

}
