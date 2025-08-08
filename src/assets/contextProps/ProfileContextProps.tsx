import { DocumentType } from "../types/DocumentType";
import { AddressType, ProfileType } from "../types/ProfileType";

export interface ProfileContextProps{

    profile: ProfileType | null
    setProfile: (profile: ProfileType | null) => void
    formData: Partial<ProfileType> | null
    setFormData: (formData: Partial<ProfileType> | null) => void
    loading: boolean
    isEditing: boolean
    setIsEditing: (isEditing: boolean) => void
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    nameValue: string
    setNameValue: (nameValue: string) => void
    emailValue: string
    setEmailValue: (emailValue: string) => void
    phoneValue: string
    setPhoneValue: (phoneValue: string) => void
    genderValue: "male" | "female" | null
    setGenderValue: (genderValue: "male" | "female" | null) => void
    dateOfBirthValue: string
    setDateOfBirthValue: (dateOfBirthValue: string) => void
    residenceValue: string
    setResidenceValue: (residenceValue: string) => void
    cityValue: string
    setCityValue: (cityValue: string) => void
    stateValue: string
    setStateValue: (stateValue: string) => void
    countryValue: string
    setCountryValue: (countryValue: string) => void
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
    profileImageURL: string | null
    coverImage: File | null
    setCoverImage: (coverImage: File | null) => void
    coverImageURL: string | null
    addressValue: AddressType | null
    setAddressValue: (addressValue: AddressType | null) => void
    certificationsValue: string[]
    setCertificationsValue: (certificationsValue: string[]) => void
    hospitalValue: string
    setHospitalValue: (hospitalValue: string) => void
    hospitalLocationValue: string
    setHospitalLocationValue: (hospitalLocationValue: string) => void
    licenseCertificate: DocumentType | null
    setLicenseCertificate: (licenseCertificate: DocumentType | null) => void
    licenseCertificateURL: string | null
    educationValue: string[]
    setEducationValue: (educationValue: string[]) => void
    readyToSubmit: boolean 

}