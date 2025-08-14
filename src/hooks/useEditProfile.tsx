import { useCallback, useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { useUploadFile } from "./useUploadFile"

export const useEditProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext){

        throw new Error("useEditProfile must be used within a LoginProvider and ProfileProvider")

    }

    const { nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue,  certificationsValue, aboutValue, feesValue, medicalHistoryValue,  residenceValue, stateValue, cityValue, countryValue,  hospitalLocationValue, hospitalValue, licenseCertificate,  genderValue, dateOfBirthValue, setIsEditing } = profileContext, 
          { userType } = loginContext, 
          { processFile } = useUploadFile(),
          keys = Object.keys(localStorage),
          profileKey = keys.find(key => key.startsWith("profileData-")),
          savedProfile = profileKey ? JSON.parse(localStorage.getItem(profileKey) as string): null

    const editProfile = useCallback(async () =>{

        if(!savedProfile || !profileKey) return null

        const profileImageDoc = profileImage instanceof File ? await processFile(profileImage) : null,
              coverImageDoc = coverImage instanceof File ? await processFile(coverImage) : null,
              licenseCertificateDoc = licenseCertificate instanceof File ? await processFile(licenseCertificate) : null

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

        localStorage.setItem(profileKey, JSON.stringify(updatedProfile))

        setIsEditing(false)
        
        return updatedProfile

    }, [ savedProfile, profileKey, nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, medicalHistoryValue, residenceValue, stateValue, cityValue, countryValue,     hospitalLocationValue, hospitalValue, licenseCertificate, genderValue, dateOfBirthValue, userType, processFile, setIsEditing ])

    return { editProfile }

}