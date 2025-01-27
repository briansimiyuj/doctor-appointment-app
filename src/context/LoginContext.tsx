import { createContext, useState } from "react"

interface LoginContextType{

    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    confirmPassword: string
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    userType: "patient" | "doctor"
    setUserType: React.Dispatch<React.SetStateAction<"patient" | "doctor">>

}

interface LoginContextProviderProps{
    
    children: React.ReactNode

}


export const LoginContext = createContext<LoginContextType | undefined>(undefined)


export const LoginContextProvider = ({ children }: LoginContextProviderProps) =>{

    const [email, setEmail] = useState<string>(''),
          [name, setName] = useState<string>(''),
          [password, setPassword] = useState<string>(''),
          [confirmPassword, setConfirmPassword] = useState<string>(''),
          [isAuthenticated , setIsAuthenticated] = useState<boolean>(true),
          [userType, setUserType] = useState<"patient" | "doctor">("patient"),

        value = { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword, isAuthenticated  , setIsAuthenticated, userType, setUserType }

    
    return(

        <LoginContext.Provider value={value}>
            
            {children}
        
        </LoginContext.Provider>

    )

}