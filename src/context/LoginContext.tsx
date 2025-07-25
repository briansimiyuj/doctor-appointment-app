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
          [showSignOutModal, setShowSignOutModal] = useState<boolean>(false)

          
    useEffect(() =>{

        const keys = Object.keys(localStorage),
              matchingKeys = keys.filter(key => key.startsWith("userData-"))

        if(matchingKeys.length === 0) return
    
       const storedUserData = localStorage.getItem(matchingKeys[0])

        if(storedUserData){

            try{
            
                const { email, name, password, userType, userID } = JSON.parse(storedUserData)   

                setEmail(email)

                setName(name)

                setPassword(password)

                setUserType(userType)

                setIsAuthenticated(true)

                setUserID(userID)

            }catch(err){
            
                console.error("Error parsing user data from localStorage", err)
            
            }

        }
    
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