import { AdressType, ProfileType } from "../types/ProfileType";

export interface ProfileContextProps{

    profile: ProfileType | null
    setProfile: (profile: ProfileType | null) => void
    formData: Partial<ProfileType> | null
    setFormData: (formData: Partial<ProfileType> | null) => void
    loading: boolean
    isEditing: boolean
    setIsEditing: (isEditing: boolean) => void
    nameValue: string
    setNameValue: (nameValue: string) => void
    emailValue: string
    setEmailValue: (emailValue: string) => void
    phoneValue: string
    setPhoneValue: (phoneValue: string) => void
    specialityValue: string
    setSpecialityValue: (specialityValue: string) => void
    experienceValue: string
    setExperienceValue: (experienceValue: string) => void
    aboutValue: string
    setAboutValue: (aboutValue: string) => void
    feesValue: string
    setFeesValue: (feesValue: string) => void
    medicalHistoryValue: string
    setMedicalHistoryValue: (medicalHistoryValue: string) => void
    profileImage: File | null
    setProfileImage: (profileImage: File | null) => void
    coverImage: File | null
    setCoverImage: (coverImage: File | null) => void
    addressValue: AdressType | null
    setAddressValue: (addressValue: AdressType | null) => void
    certificationsValue: string[]
    setCertificationsValue: (certificationsValue: string[]) => void
    educationValue: string[]
    setEducationValue: (educationValue: string[]) => void
    readyToSubmit: boolean 

}