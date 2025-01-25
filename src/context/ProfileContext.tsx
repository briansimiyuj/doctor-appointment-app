import { createContext, useState } from "react"
import { ProfileType } from "../assets/types/ProfileType"
import { assets } from "../assets/frontend/assets"

interface ProfileContextType{

    profile: ProfileType | null
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
    isEditing: boolean
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>

}

interface ProfileContextProviderProps{

    children: React.ReactNode

}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileContextProvider = ({ children }: ProfileContextProviderProps) =>{

    const patientProfile: ProfileType ={

        type: 'patient',
        _id: 'pat123',
        name: 'John Doe',
        address:{
            
            line1: '123 Main St',
            line2: 'Apt 4B',
            email: 'john.doe@example.com',
            phone: '555-123-4567'

        },
        image: assets.profilePic,
        gender: 'male',
        DOB: '1990-01-01',
        medicalHistory: ['Allergies', 'Annual Checkup 2023'],
        appointments: ['doc123-20240215']
    },

        
        doctorProfile: ProfileType ={

            type: 'doctor',
            _id: 'doc123',
            name: 'Dr. Sarah Smith',
            speciality: 'Cardiologist',
            degree: 'MD, FACC',
            experience: '15 years',
            about: 'Specialized in cardiovascular medicine with focus on preventive care',
            fees: 200,
            address:{

                line1: '456 Medical Center Drive',
                line2: 'Suite 789',
                email: 'dr.smith@medicarehub.com',
                phone: '555-987-6543'
                
            },
            image: assets.profilePic,
            coverImage: assets.coverImage,
            gender: 'female',
            DOB: '1980-05-15',
            rating: 4.8

        },

        [profile, setProfile] = useState<ProfileType | null>(doctorProfile),
        [isEditing, setIsEditing] = useState<boolean>(false),
        value = { profile, setProfile, isEditing, setIsEditing, doctorProfile, patientProfile };

    return(
        
        <ProfileContext.Provider value={value}>

            {children}

        </ProfileContext.Provider>

    )

}