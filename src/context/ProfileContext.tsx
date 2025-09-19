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
        
        const { name, email , userType, userID } = context, 
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
            [feesValue, setFeesValue] = useState<number>(0),
            [medicalHistoryValue, setMedicalHistoryValue] = useState<string>(''),
            [addressValue, setAddressValue] = useState<AddressType | null>(null),
            [profileImage, setProfileImage] = useState<DocumentType | File | null>(null),
            [coverImage, setCoverImage] = useState<DocumentType | File | null>(null),
            [licenseCertificate, setLicenseCertificate] = useState<DocumentType | File | null>(null),
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

    const deepEqual = (obj1: any, obj2: any) => JSON.stringify(obj1) === JSON.stringify(obj2)

    const profileHasChanged = (storedProfile: ProfileType | null) =>{

        if (!storedProfile) return true

        const basicChanged =
            storedProfile.name.trim() !== nameValue.trim() ||
            storedProfile.addressValue.email.trim() !== emailValue.trim() ||
            storedProfile.addressValue.phone.trim() !== phoneValue.trim() ||
            storedProfile.addressValue.residence.trim() !== residenceValue.trim() ||
            storedProfile.addressValue.city.trim() !== cityValue.trim() ||
            storedProfile.addressValue.state.trim() !== stateValue.trim() ||
            storedProfile.addressValue.country.trim() !== countryValue.trim() ||
            storedProfile.gender !== genderValue ||
            storedProfile.dateOfBirth.trim() !== dateOfBirthValue.trim() ||
            !deepEqual(storedProfile.profileImage, profileImage) 

        const doctorChanged =
            userType === "doctor" &&
            storedProfile.type === "doctor" &&((() =>{

            
            return(
                storedProfile.experience.trim() !== experienceValue.trim() ||
                storedProfile.speciality.trim() !== specialityValue.trim() ||
                storedProfile.about.trim() !== aboutValue.trim() ||
                JSON.stringify(storedProfile.education) !== JSON.stringify(educationValue) ||
                JSON.stringify(storedProfile.certifications) !== JSON.stringify(certificationsValue) ||
                storedProfile.fees !== feesValue ||
                storedProfile.hospital.trim() !== hospitalValue.trim() ||
                storedProfile.hospitalLocation.trim() !== hospitalLocationValue.trim() ||
                !deepEqual(storedProfile.licenseCertificate, licenseCertificate) ||
                !deepEqual(storedProfile.coverImage, coverImage) 
            )

            })())

        const patientChanged =
            userType === "patient" &&
            storedProfile.type === "patient" &&
            (storedProfile.medicalHistory?.trim() ?? "") !== (medicalHistoryValue?.trim() ?? "")


        return basicChanged || doctorChanged || patientChanged
    }


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
                feesValue !== 0 && hospitalValue.trim() !== '' && licenseCertificate !== null &&
                coverImage !== null,

                patientValid = isPatient && (medicalHistoryValue?.trim().length ?? 0) > 0,

            valid = isDoctor ? basicValid && doctorValid : basicValid && patientValid
            
        if(!isEditing){

            setReadyToSubmit(valid)

        }else{
            
            const hasChanges = profileHasChanged(profile)

            setReadyToSubmit(valid && hasChanges)

        }
    
    }, [userType, nameValue, emailValue, phoneValue, addressValue, profileImage, specialityValue, experienceValue, aboutValue, educationValue, certificationsValue, feesValue, coverImage, medicalHistoryValue, licenseCertificate])

    useEffect(() =>{
    
        const storedProfile = localStorage.getItem(`profileData-${userID}`)
            
            if(storedProfile){
                
                try{

                    const parsedProfile: ProfileType = JSON.parse(storedProfile)

                    setProfile(parsedProfile)

                }catch(err){

                    console.log(err)

                }

            }else{
                
                setProfile(null)

            }
    
    }, [userID])


    useEffect(() =>{
    
        if(profile){

            setProfileImage(profile.profileImage)

            if(profile.type === "doctor"){

                setCoverImage(profile.coverImage)

                setLicenseCertificate(profile.licenseCertificate)

            }

        }
    
    }, [profile])

    const loadProfileForEditing = () =>{
    
        if(!profile) return
    
        setNameValue(profile.name)
  
        setEmailValue(profile.addressValue.email)
  
        setPhoneValue(profile.addressValue.phone)
  
        setGenderValue(profile.gender)
  
        setDateOfBirthValue(profile.dateOfBirth)
  
        setResidenceValue(profile.addressValue.residence)
   
        setCityValue(profile.addressValue.city)
   
        setStateValue(profile.addressValue.state)
  
        setCountryValue(profile.addressValue.country)
        
        if(profile.type === "doctor"){

            setSpecialityValue(profile.speciality)

            setExperienceValue(profile.experience)
            
            setAboutValue(profile.about)

            setEducationValue(profile.education)

            setCertificationsValue(profile.certifications)

            setFeesValue(profile.fees)

            setHospitalValue(profile.hospital)

            setHospitalLocationValue(profile.hospitalLocation)

            setLicenseCertificate(profile.licenseCertificate)
            
        }else{

            setMedicalHistoryValue(profile.medicalHistory)

        }
    
    }

    useEffect(() =>{
    
        if(isEditing && profile){

            loadProfileForEditing()

        }
    
    }, [isEditing, profile])


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
        readyToSubmit

    }
        
    return(
        
        <ProfileContext.Provider value={value}>

            {children}

        </ProfileContext.Provider>

    )

}

export const useProfileContext = () =>{

    const context = useContext(ProfileContext)

    if(!context) throw new Error('useProfileContext must be used within a ProfileContextProvider') 

    return context

}