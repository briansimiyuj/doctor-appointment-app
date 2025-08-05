import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { v4 as uuidv4 } from 'uuid'

export const useSubmitProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) throw new Error("useSubmitProfile must be used within a LoginProvider and ProfileProvider")

    const { nameValue, emailValue, phoneValue, specialityValue, experienceValue, profileImage, coverImage, certificationsValue, aboutValue, feesValue, educationValue, medicalHistoryValue, setIsEditing } = profileContext,
          { userType } = loginContext,
          userID = `${userType}-${uuidv4()}`

    const submitProfile = () =>{
    
        const profileData ={

           userID,
           name: nameValue,
           email: emailValue,
           phone: phoneValue,
           profileImage: profileImage ? profileImage.name : null,
           coverImage: coverImage ? coverImage.name : null,
           speciality: userType === "doctor" ? specialityValue : undefined,
           certifications: userType === "doctor" ? certificationsValue : undefined,
           about: userType === "doctor" ? aboutValue : undefined,
           experience: userType === "doctor" ? experienceValue : undefined,
           fees: userType === "doctor" ? feesValue : undefined,
           education: userType === "doctor" ? educationValue : undefined,
           medicalHistory: userType === "patient" ? medicalHistoryValue : undefined,
           userType,
           createdAt: new Date().toISOString()

        }

        console.log(profileData)

        localStorage.setItem(`profileData-${userID}`, JSON.stringify(profileData))  

        setIsEditing(false)
        
        return profileData
    
    }

    return { submitProfile }

}
