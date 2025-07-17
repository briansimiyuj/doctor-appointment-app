import { createContext, useState } from "react"
import { LoginContextProps } from "../assets/contextProps/LoginContextProps"

interface LoginContextProviderProps{
    
    children: React.ReactNode

}


export const LoginContext = createContext<LoginContextProps | undefined>(undefined)


export const LoginContextProvider = ({ children }: LoginContextProviderProps) =>{

    const [email, setEmail] = useState<string>(''),
          [name, setName] = useState<string>(''),
          [password, setPassword] = useState<string>(''),
          [confirmPassword, setConfirmPassword] = useState<string>(''),
          [isAuthenticated , setIsAuthenticated] = useState<boolean>(true),
          [userType, setUserType] = useState<"patient" | "doctor">("doctor"),

        value = { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword, isAuthenticated  , setIsAuthenticated, userType, setUserType }

    
    return(

        <LoginContext.Provider value={value}>
            
            {children}
        
        </LoginContext.Provider>

    )

}