import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"

export const useSignIn = () =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("useSignIn must be used within a LoginContextProvider")

    const { setEmail, setName, setPassword, setUserType, setIsAuthenticated, setUserID } = context,
          navigate = useNavigate()

    const signIn = (email:string, password:string) =>{

        if(!email || !password){
            
            alert("Please fill in all fields")
            
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

                    return { success: true, userType: userData.userType }

                }else{
                    
                    alert("Invalid email or password")

                }

            }catch(err){

                console.error('Error parsing user data from localStorage', err)
                
            }
            
        }

        return { success: false, message: 'Invalid email or password' }

    }

    return { signIn }

}
