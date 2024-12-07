import { createContext, useState } from "react";
import { UserData } from "../assets/ProfileType";
import { assets } from "../assets/frontend/assets";

interface ProfileContextType{

    userData: UserData
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
    isEditing: boolean
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    
}

interface ProfileContextProviderProps{
    
    children: React.ReactNode

}


export const ProfileContext = createContext<ProfileContextType | undefined>(undefined)


export const ProfileContextProvider = ({ children }: ProfileContextProviderProps) =>{

    const [userData, setUserData] = useState<UserData>({

        name: 'John Doe',
        address:{
            line1: '123 Main St',
            line2: 'Apt 4B',
            email: 'john.doe@example.com',
            phone: '555-123-4567'
        },
        image: assets.profilePic,
        gender: 'Male',
        DOB: '1990-01-01'

    }),
        [isEditing, setIsEditing] = useState<boolean>(false),

        value = {  userData, setUserData, isEditing, setIsEditing }

    
    return(

        <ProfileContext.Provider value={value}>
            
            {children}
        
        </ProfileContext.Provider>

    )

}