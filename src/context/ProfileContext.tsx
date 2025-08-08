import { createContext, useContext, useEffect, useState } from "react"
import { AddressType, ProfileType } from "../assets/types/ProfileType"
import { LoginContext } from "./LoginContext"
import { ProfileContextProps } from "../assets/contextProps/ProfileContextProps"
import { DocumentType } from "../assets/types/DocumentType"

interface ProfileContextProviderProps{

    children: React.ReactNode

}

export const ProfileContext = createContext<ProfileContextProps | undefined>(undefined)

export const ProfileContextProvider = ({ children }: ProfileContextProviderProps) =>{

    const context = useContext(LoginContext)
    
    if(!context) throw new Error("ProfileContextProvider must be used within a LoginContextProvider")
        
        const { name, email , userType} = context, 
            [profile, setProfile] = useState<ProfileType | null>(null),
            [isEditing, setIsEditing] = useState<boolean>(false),
            [showModal, setShowModal] = useState<boolean>(false),   
            [formData, setFormData] = useState<Partial<ProfileType | null>>(null),
            [nameValue, setNameValue] = useState<string>(name),
            [emailValue, setEmailValue] = useState<string>(email),
            [phoneValue, setPhoneValue] = useState<string>(''),
            [genderValue, setGenderValue] = useState<"male" | "female" | null>(null),
            [dateOfBirthValue, setDateOfBirthValue] = useState<string>(''),
            [residenceValue, setResidenceValue] = useState<string>(''),
            [cityValue, setCityValue] = useState<string>(''),
            [stateValue, setStateValue] = useState<string>(''),
            [countryValue, setCountryValue] = useState<string>(''),
            [specialityValue, setSpecialityValue] = useState<string>(''),
            [experienceValue, setExperienceValue] = useState<string>(''),
            [aboutValue, setAboutValue] = useState<string>(''),
            [educationValue, setEducationValue] = useState<string[]>([]),
            [certificationsValue, setCertificationsValue] = useState<string[]>([]),
            [feesValue, setFeesValue] = useState<string>(''),
            [medicalHistoryValue, setMedicalHistoryValue] = useState<string>(''),
            [addressValue, setAddressValue] = useState<AddressType | null>(null),
            [profileImage, setProfileImage] = useState<File | null>(null),
            [profileImageURL, setProfileImageURL] = useState<string | null>(''),
            [coverImage, setCoverImage] = useState<File | null>(null),
            [coverImageURL, setCoverImageURL] = useState<string | null>(''),
            [licenseCertificate, setLicenseCertificate] = useState<DocumentType | null>(null),
            [licenseCertificateURL, setLicenseCertificateURL] = useState<string | null>(''),
            [hospitalValue, setHospitalValue] = useState<string>(''),
            [hospitalLocationValue, setHospitalLocationValue] = useState<string>(''),
            [readyToSubmit, setReadyToSubmit] = useState<boolean>(false),
            [loading, _setLoading] = useState<boolean>(false)

    useEffect(() =>{
    
       setNameValue(name)

       setEmailValue(email)
    
    }, [name, email])

    useEffect(() =>{

        if(emailValue && phoneValue && residenceValue && cityValue && stateValue && countryValue){

            setAddressValue({

                email: emailValue,
                phone: phoneValue,
                residence: residenceValue,
                city: cityValue,
                state: stateValue,
                country: countryValue

            })

        }
            
        
    }, [emailValue, phoneValue, residenceValue, cityValue, stateValue, countryValue])

    useEffect(() =>{
    
        const isDoctor = userType === "doctor",
            isPatient = userType === "patient"

        const basicValid = 
            nameValue.trim() !== '' &&
            emailValue.trim() !== '' &&
            phoneValue.trim() !== '' && dateOfBirthValue.trim() !== '' &&
            genderValue !== null &&
            profileImage !== null,

            doctorValid = 
                isDoctor && 
                specialityValue.trim() !== '' &&
                experienceValue.trim() !== '' &&
                aboutValue.trim() !== '' &&
                educationValue.length > 0 &&
                certificationsValue.length > 0 &&
                feesValue.trim() !== '' && hospitalValue.trim() !== '' && licenseCertificate !== null &&
                coverImage !== null,

            patientValid = isPatient && medicalHistoryValue.trim().length > 0,

            valid = isDoctor ? basicValid && doctorValid : basicValid && patientValid
            
        setReadyToSubmit(valid)
    
    }, [userType, nameValue, emailValue, phoneValue, addressValue, profileImage, specialityValue, experienceValue, aboutValue, educationValue, certificationsValue, feesValue, coverImage, medicalHistoryValue])

    useEffect(() =>{
    
        const keys = Object.keys(localStorage),
                profileKey = keys.find(key => key.startsWith("profileData-"))

        if(profileKey){
            
            const storedProfile = localStorage.getItem(profileKey)
            
            if(storedProfile){
                
                try{

                    const parsedProfile: ProfileType = JSON.parse(storedProfile)

                    setProfile(parsedProfile)

                }catch(err){

                    console.log(err)

                }

            }

        }
    
    }, [])

    useEffect(() =>{
        
        if(licenseCertificate?.file){

            const url = URL.createObjectURL(licenseCertificate.file)

            setLicenseCertificateURL(url)

            return () => URL.revokeObjectURL(url)

        }else{

            setLicenseCertificateURL(null)

        } 

    }, [licenseCertificate])

    useEffect(() =>{
    
        if(coverImage){

            const url = URL.createObjectURL(coverImage)

            setCoverImageURL(url)

            return () => URL.revokeObjectURL(url)

        }else{

            setCoverImageURL(null)

        }
    
    }, [coverImage])

    useEffect(() =>{
    
        if(profileImage){

            const url = URL.createObjectURL(profileImage)

            setProfileImageURL(url)

            return () => URL.revokeObjectURL(url)

        }else{

            setProfileImageURL(null)

        }
    
    }, [profileImage])


    const value: ProfileContextProps ={
    
        profile,
        loading,
        setProfile,
        isEditing,
        setIsEditing,
        showModal,
        setShowModal,
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
        genderValue,
        setGenderValue,
        dateOfBirthValue,
        setDateOfBirthValue,
        residenceValue,
        setResidenceValue,
        cityValue,
        setCityValue,
        countryValue,
        setCountryValue,
        stateValue,
        setStateValue, 
        profileImage,
        setProfileImage,
        coverImage,
        setCoverImage,
        hospitalValue,
        hospitalLocationValue,
        setHospitalLocationValue,
        setHospitalValue,
        licenseCertificate,
        setLicenseCertificate,
        licenseCertificateURL,
        profileImageURL,
        coverImageURL,
        readyToSubmit

    }
        
    return(
        
        <ProfileContext.Provider value={value}>

            {children}

        </ProfileContext.Provider>

    )

}