import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { v4 as uuidv4 } from 'uuid'
import { useUploadFile } from "./useUploadFile"

export const useSubmitProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) throw new Error("useSubmitProfile must be used within a LoginProvider and ProfileProvider")

    const { nameValue, emailValue, phoneValue, specialityValue, experienceValue, profileImage, coverImage, certificationsValue, aboutValue, feesValue, educationValue, medicalHistoryValue, setShowModal, licenseCertificate, hospitalValue, residenceValue, cityValue, stateValue, countryValue, genderValue, dateOfBirthValue, hospitalLocationValue } = profileContext,
          { userType } = loginContext,
          { processFile } = useUploadFile(),
          userID = `${userType}-${uuidv4()}`

    const submitProfile = async(e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

        const isEmptyObject = (obj: any) => Object.keys(obj).length === 0 && obj.constructor === Object

        if([nameValue, emailValue, phoneValue, genderValue, dateOfBirthValue].some(value => !value) || isEmptyObject(profileImage)){

            console.log(nameValue, emailValue, phoneValue, genderValue, dateOfBirthValue, profileImage)
            
            return

        }

        if(userType === "doctor" && ([specialityValue, experienceValue, hospitalValue, hospitalLocationValue, certificationsValue, aboutValue, feesValue, educationValue].some(value => !value) || isEmptyObject(licenseCertificate) || isEmptyObject(coverImage))){

            console.log(specialityValue, experienceValue, hospitalValue, hospitalLocationValue, certificationsValue, aboutValue, feesValue, educationValue, licenseCertificate, coverImage)

            return

        }

        if(userType === "patient" && (!medicalHistoryValue || ([residenceValue, cityValue, countryValue]).some(value => !value))){

            alert("Please fill in all required fields")

            return

        }

        const profileImageDoc = profileImage instanceof File ? await processFile(profileImage) : null,
              coverImageDoc = coverImage instanceof File ? await processFile(coverImage) : null,
              licenseCertificateDoc = licenseCertificate instanceof File ? await processFile(licenseCertificate) : null
    
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
            profileImage: profileImage ? profileImageDoc : null,
            coverImage: coverImage ? coverImageDoc : null,
            speciality: userType === "doctor" ? specialityValue : undefined,
            licenseCertificate: userType === "doctor" ? licenseCertificateDoc : undefined,  
            hospital: userType === "doctor" ? hospitalValue : undefined,
            hospitalLocation: userType === "doctor" ? hospitalLocationValue : undefined,
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

        setShowModal(false)
        
        return profileData
    
    }

    return { submitProfile }

}
