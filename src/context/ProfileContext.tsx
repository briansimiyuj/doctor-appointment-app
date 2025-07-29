import { createContext, useContext, useState } from "react"
import { ProfileType } from "../assets/types/ProfileType"
import { LoginContext } from "./LoginContext"

interface ProfileContextType{

    profile: ProfileType | null
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
    isEditing: boolean
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    formData: Partial<ProfileType>
    setFormData: (data: Partial<ProfileType>) => void

}

interface ProfileContextProviderProps{

    children: React.ReactNode

}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileContextProvider = ({ children }: ProfileContextProviderProps) =>{

    const context = useContext(LoginContext)
    
    if(!context) throw new Error("ProfileContextProvider must be used within a LoginContextProvider")

    const [profile, setProfile] = useState<ProfileType | null>(null),
        [isEditing, setIsEditing] = useState<boolean>(false),
        { userType } = context, 
        [formData, setFormData] = useState<Partial<ProfileType>>({
            type: userType === "patient" || userType === "doctor" ? userType : undefined
        }),
        value = { profile, setProfile, isEditing, setIsEditing, formData, setFormData }

    return(
        
        <ProfileContext.Provider value={value}>

            {children}

        </ProfileContext.Provider>

    )

}