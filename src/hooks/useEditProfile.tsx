import { useCallback, useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { useUploadFile } from "./useUploadFile"
import { useEditProfileLogic } from "./useEditProfileLogic"
import { useToast } from "./useToast"

export const useEditProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext){

        throw new Error("useEditProfile must be used within a LoginProvider and ProfileProvider")

    }

    const { nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue,  certificationsValue, aboutValue, setProfile, feesValue, medicalHistoryValue,  residenceValue, stateValue, cityValue, countryValue,  hospitalLocationValue, hospitalValue, licenseCertificate,  genderValue, dateOfBirthValue, setShowModal } = profileContext, 
          { userType, setName } = loginContext, 
          { processFile } = useUploadFile(),
          { hasProfileChanged } = useEditProfileLogic(),
          { showToast } = useToast(),
          keys = Object.keys(localStorage),
          profileKey = keys.find(key => key.startsWith(`profile-${userType}`)),
          savedProfile = profileKey ? JSON.parse(localStorage.getItem(profileKey) as string): null

    const editProfile = useCallback(async () =>{

        if(!savedProfile || !profileKey) return null

        const profileImageDoc = profileImage instanceof File ? await processFile(profileImage) : savedProfile.profileImage,
              coverImageDoc = coverImage instanceof File ? await processFile(coverImage) : savedProfile.coverImage,
              licenseCertificateDoc = licenseCertificate instanceof File ? await processFile(licenseCertificate) : savedProfile.licenseCertificate
              
        if(!hasProfileChanged) return null

        const updatedProfile ={

            ...savedProfile,
            name: nameValue,
            
            address:{
              email: emailValue,
              phone: phoneValue,
              residence: residenceValue,
              city: cityValue,
              state: stateValue,
              country: countryValue,
            },

            gender: genderValue,
            dateOfBirth: dateOfBirthValue,
            profileImage: profileImageDoc,
            coverImage: userType === "doctor" ? coverImageDoc : null,
            licenseCertificate: userType === "doctor" ? licenseCertificateDoc : null,
            speciality: userType === "doctor" ? specialityValue : null,
            education: userType === "doctor" ? educationValue : null,
            experience: userType === "doctor" ? experienceValue : null,
            about: userType === "doctor" ? aboutValue : null,
            certifications: userType === "doctor" ? certificationsValue : null,
            fees: userType === "doctor" ? feesValue : null,
            hospital: userType === "doctor" ? hospitalValue : null,
            hospitalLocation: userType === "doctor" ? hospitalLocationValue : null,
            medicalHistory: userType === "patient" ? medicalHistoryValue : null,
            updatedAt: new Date().toISOString()
        }

        console.log(updatedProfile)

        setProfile(updatedProfile)

        setName(updatedProfile.name)

        localStorage.setItem(profileKey, JSON.stringify(updatedProfile))

        setShowModal(false)
        
        return updatedProfile

    }, [ savedProfile, profileKey, nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, medicalHistoryValue, residenceValue, stateValue, cityValue, countryValue,     hospitalLocationValue, hospitalValue, licenseCertificate, genderValue, dateOfBirthValue, userType, processFile, setShowModal ])
    
    const handleEditProfile = async(e: React.FormEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        const updatedProfile = await editProfile()

        if(!updatedProfile) return

        showToast("Profile updated successfully", "success")
    
    }

    return { editProfile: handleEditProfile }

}

//FIXME: There is a bug in the edit profile function. The profile is not being updated correctly for doctors