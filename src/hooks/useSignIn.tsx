import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"
import { useToast } from "./useToast"

export const useSignIn = () =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("useSignIn must be used within a LoginContextProvider")

    const { setEmail, setName, setPassword, setUserType, setIsAuthenticated, setUserID } = context,
          navigate = useNavigate(),
          { showToast } = useToast()

    const signIn = (email:string, password:string) =>{

        if(!email || !password){
            
            showToast("Please fill in all fields", "error") 
            
            return
            
        }

        const keys = Object.keys(localStorage),
              userKeys = keys.filter(key => key.startsWith("userData-"))

        for(const key of userKeys){

            const stored = localStorage.getItem(key)

            if(!stored) continue

            try{

                const userData = JSON.parse(stored)

                if(userData.email === email && userData.password === password){

                    setEmail(userData.email)
                    
                    setName(userData.name)

                    setPassword(userData.password)
                    
                    setUserType(userData.userType)
                    
                    setUserID(userData.userID)

                    localStorage.setItem("currentUser", JSON.stringify(userData))
                    
                    localStorage.setItem("isAuthenticated", JSON.stringify(true))
                    
                    setIsAuthenticated(true)

                    navigate("/")

                    showToast("Signed in successfully", "success")

                    return { success: true, userType: userData.userType }

                }

            }catch(err){

                console.error('Error parsing user data from localStorage', err)
                
            }
            
        }

        showToast("Invalid email or password", "error")

        return { success: false, message: 'Invalid email or password' }

    }

    return { signIn }

}
