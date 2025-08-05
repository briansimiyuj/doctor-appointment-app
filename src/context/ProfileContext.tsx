import { createContext, useContext, useEffect, useState } from "react"
import { AdressType, ProfileType } from "../assets/types/ProfileType"
import { LoginContext } from "./LoginContext"
import { ProfileContextProps } from "../assets/contextProps/ProfileContextProps"

interface ProfileContextProviderProps{

    children: React.ReactNode

}

export const ProfileContext = createContext<ProfileContextProps | undefined>(undefined)

export const ProfileContextProvider = ({ children }: ProfileContextProviderProps) =>{

    const context = useContext(LoginContext)
    
    if(!context) throw new Error("ProfileContextProvider must be used within a LoginContextProvider")
        
        const { name, email , userType} = context, 
            [profile, setProfile] = useState<ProfileType | null>(null),
            [isEditing, setIsEditing] = useState<boolean>(
                import .meta.env.VITE_DEV_MODE === "true" ? true : false
            ),
            [formData, setFormData] = useState<Partial<ProfileType | null>>(null),
            [nameValue, setNameValue] = useState<string>(name),
            [emailValue, setEmailValue] = useState<string>(email),
            [phoneValue, setPhoneValue] = useState<string>(''),
            [specialityValue, setSpecialityValue] = useState<string>(''),
            [experienceValue, setExperienceValue] = useState<string>(''),
            [aboutValue, setAboutValue] = useState<string>(''),
            [educationValue, setEducationValue] = useState<string[]>([]),
            [certificationsValue, setCertificationsValue] = useState<string[]>([]),
            [feesValue, setFeesValue] = useState<string>(''),
            [medicalHistoryValue, setMedicalHistoryValue] = useState<string>(''),
            [addressValue, setAddressValue] = useState<AdressType | null>(null),
            [profileImage, setProfileImage] = useState<File | null>(null),
            [coverImage, setCoverImage] = useState<File | null>(null),
            [readyToSubmit, setReadyToSubmit] = useState<boolean>(false),
            [loading, _setLoading] = useState<boolean>(false)

    useEffect(() =>{
    
       setNameValue(name)

       setEmailValue(email)
    
    }, [name, email])

    useEffect(() =>{
    
        const isDoctor = userType === "doctor",
            isPatient = userType === "patient"

        const basicValid = 
            nameValue.trim() !== '' &&
            emailValue.trim() !== '' &&
            phoneValue.trim() !== '' &&
            profileImage !== null,

            doctorValid = 
                isDoctor && 
                specialityValue.trim() !== '' &&
                experienceValue.trim() !== '' &&
                aboutValue.trim() !== '' &&
                educationValue.length > 0 &&
                certificationsValue.length > 0 &&
                feesValue.trim() !== '' &&
                coverImage !== null,

            patientValid = isPatient && medicalHistoryValue.trim().length > 0,

            valid = isDoctor ? basicValid && doctorValid : basicValid && patientValid
            
        setReadyToSubmit(valid)
    
    }, [userType, nameValue, emailValue, phoneValue, addressValue, profileImage, specialityValue, experienceValue, aboutValue, educationValue, certificationsValue, feesValue, coverImage, medicalHistoryValue])


    const value: ProfileContextProps ={
    
        profile,
        loading,
        setProfile,
        isEditing,
        setIsEditing,
        formData,
        setFormData,
        nameValue,
        setNameValue,
        emailValue,
        setEmailValue,
        phoneValue,
        setPhoneValue,
        specialityValue,
        setSpecialityValue,
        experienceValue,
        setExperienceValue,
        aboutValue,
        setAboutValue,
        educationValue,
        setEducationValue,
        certificationsValue,
        setCertificationsValue,
        feesValue,
        setFeesValue,
        medicalHistoryValue,
        setMedicalHistoryValue,
        addressValue,
        setAddressValue,
        profileImage,
        setProfileImage,
        coverImage,
        setCoverImage,
        readyToSubmit

    }
        
    return(
        
        <ProfileContext.Provider value={value}>

            {children}

        </ProfileContext.Provider>

    )

}