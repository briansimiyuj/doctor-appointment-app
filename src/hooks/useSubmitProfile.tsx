import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { v4 as uuidv4 } from 'uuid'

export const useSubmitProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) throw new Error("useSubmitProfile must be used within a LoginProvider and ProfileProvider")

    const { nameValue, emailValue, phoneValue, specialityValue, experienceValue, profileImage, coverImage, certificationsValue, aboutValue, feesValue, educationValue, medicalHistoryValue, setIsEditing, licenseCertificate, hospitalValue, residenceValue, cityValue, stateValue, countryValue, genderValue, dateOfBirthValue,  } = profileContext,
          { userType } = loginContext,
          userID = `${userType}-${uuidv4()}`

    const submitProfile = () =>{
    
        const profileData ={

            userID,
            name: nameValue,
            addressValue:{
                email: emailValue,
                phone: phoneValue,
                residence: residenceValue,
                city: cityValue,
                state: stateValue,
                country: countryValue
            },
            gender: genderValue,
            dateOfBirth: dateOfBirthValue,
            type: userType,
            profileImage: profileImage ? profileImage.name : null,
            coverImage: coverImage ? coverImage.name : null,
            speciality: userType === "doctor" ? specialityValue : undefined,
            licenseCertificate: userType === "doctor" ? licenseCertificate : undefined,  
            hospital: userType === "doctor" ? hospitalValue : undefined,
            certifications: userType === "doctor" ? certificationsValue : undefined,
            about: userType === "doctor" ? aboutValue : undefined,
            experience: userType === "doctor" ? experienceValue : undefined,
            fees: userType === "doctor" ? feesValue : undefined,
            education: userType === "doctor" ? educationValue : undefined,
            medicalHistory: userType === "patient" ? medicalHistoryValue : undefined,
            createdAt: new Date().toISOString()

        }

        console.log(profileData)

        localStorage.setItem(`profileData-${userID}`, JSON.stringify(profileData))  

        setIsEditing(false)
        
        return profileData
    
    }

    return { submitProfile }

}
