import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"
import { useToast } from "./useToast"
import { db } from "../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const useSignIn = () =>{

    const context = useContext(LoginContext)

    if(!context) throw new Error("useSignIn must be used within a LoginContextProvider")

    const { setEmail, setName, setPassword, setUserType, setIsAuthenticated, setUserID } = context,
          navigate = useNavigate(),
          auth = getAuth(),
          { showToast } = useToast()


    const signIn = async (email:string, password:string) =>{

        if(!email || !password){
            
            showToast("Please fill in all fields", "error") 
            
            return
            
        }

        try{
            
            await signInWithEmailAndPassword(auth, email, password)

            const userRef = collection(db, "users"),
                  q = query(userRef, where("email", "==", email)),
                  querySnapshot = await getDocs(q)

            if(querySnapshot.empty){

                showToast("Invalid email or password", "error")

                return { success: false, message: 'Invalid email or password' }

            }

            const userData = querySnapshot.docs[0].data()

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

        }catch(err){

            console.error('Error signing in:', err)

            showToast("Error signing in", "error")

            return { success: false, message: 'Error signing in' }
            
        }

    }

    return { signIn }

}