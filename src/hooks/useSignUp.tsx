import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { useToast } from "./useToast"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { isEmailValid, isPasswordStrong } from "../assets/utils/validation"

export const useSignUp = () =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("useSignUp must be used within a LoginContextProvider")

    const { setEmail, setName, setPassword, setConfirmPassword, setIsAuthenticated, setUserType, setUserID } = context,
          { showToast } = useToast(),
           navigate = useNavigate()

    const signUp = async(
        email: string,
        name: string,
        password: string,
        confirmPassword: string,
        userType: "patient" | "doctor"
    ) =>{
    
        if(!email || !name || !password || !confirmPassword || !userType){
            
            showToast("Please fill in all fields", "error")
         
            return
        
        }

        if(!isEmailValid(email)){

            showToast("Please enter a valid email", "error")

            return

        }

        if(!isPasswordStrong(password)){

            showToast("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character", "error")

            return

        }

        if(password !== confirmPassword){
            
            showToast("Passwords do not match", "error")
            
            return
            
        }

        const userID = `${userType}-${uuidv4()}`,
              userData = { email, name, password, userType, userID }

        try{

            const userRef = collection(db, "users"),
                  q = query(userRef, where("email", "==", email)),
                  querySnapshot = await getDocs(q)

            if(!querySnapshot.empty){

                showToast("Email already registered", "error")

                return

            }

            await setDoc(doc(db, "users", userID), userData)

            localStorage.setItem("isAuthenticated", JSON.stringify(true))

            localStorage.setItem("currentUser", JSON.stringify(userData))

            setEmail(email)

            setName(name)

            setPassword(password)

            setConfirmPassword(confirmPassword)

            setUserType(userType)

            setUserID(userID)

            setIsAuthenticated(true)

            setTimeout(() => navigate("/"), 1000)

           showToast("Signed up successfully", "success")

        }catch(error){

            console.error("Error signing up:", error)

            showToast("Error signing up. Please try again.", "error")

        }
    
    }

    return { signUp }

}
