import { createContext, useEffect, useState } from "react"
import { LoginContextProps } from "../assets/contextProps/LoginContextProps"
import SignOutModal from "../components/Login/Modals/SignOutModal"

interface LoginContextProviderProps{
    
    children: React.ReactNode

}


export const LoginContext = createContext<LoginContextProps | undefined>(undefined)


export const LoginContextProvider = ({ children }: LoginContextProviderProps) =>{

    const [email, setEmail] = useState<string>(''),
          [name, setName] = useState<string>(''),
          [password, setPassword] = useState<string>(''),
          [confirmPassword, setConfirmPassword] = useState<string>(''),
          [isAuthenticated , setIsAuthenticated] = useState<boolean>(false),
          [userType, setUserType] = useState<"patient" | "doctor" | "system" | null>(null),
          [userID, setUserID] = useState<string | null>(null),
          [showSignOutModal, setShowSignOutModal] = useState<boolean>(false),
          [loading, setLoading] = useState<boolean>(true)

          
    useEffect(() =>{
    
       const storedUser = localStorage.getItem("currentUser"),
             storedAuth = localStorage.getItem("isAuthenticated")

        if(storedUser && storedAuth){

            try{
            
                const userData = JSON.parse(storedUser),
                      auth = JSON.parse(storedAuth)

                if(auth === true){

                    setEmail(userData.email)
                    
                    setName(userData.name)
                
                    setPassword(userData.password)

                    setIsAuthenticated(true)

                    setUserType(userData.userType)

                    setUserID(userData.userID)

                    setIsAuthenticated(true)

                    // console.log("User is authenticated:", userData) FIXME: Add a toast

                }

            }catch(err){
            
                console.error("Error parsing user data from localStorage", err)
            
            }

        }

        if(storedAuth !== null){

            try{
                
                const parsedAuth = JSON.parse(storedAuth)

                // console.log("Parsed isAuthenticated:", parsedAuth, isAuthenticated)

                setIsAuthenticated(parsedAuth === true)

            }catch(err){
            
                console.error("Error parsing isAuthenticated from localStorage", err)
            
            }

        }

        setLoading(false)
    
    }, [])

    const openSignOutModal = () => setShowSignOutModal(true)

    const closeSignOutModal = () => setShowSignOutModal(false)
    
    const value ={ 

        email,
        setEmail,
        userID,
        setUserID,
        name,
        setName,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        isAuthenticated  ,
        setIsAuthenticated,
        userType,
        loading,
        setLoading,
        setUserType,
        showSignOutModal,
        setShowSignOutModal,
        closeSignOutModal,
        openSignOutModal

    }
    
    return(

        <LoginContext.Provider value={value}>
            
            {children}

            { showSignOutModal && isAuthenticated && <SignOutModal/> }
        
        </LoginContext.Provider>

    )

}