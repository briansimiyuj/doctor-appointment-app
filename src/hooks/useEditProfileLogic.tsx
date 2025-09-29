import { useCallback, useContext } from "react"
import isEqual from "lodash/isEqual"
import { ProfileContext } from "../context/ProfileContext"
import { LoginContext } from "../context/LoginContext"
import { useUploadFile } from "./useUploadFile"
import { ProfileType } from "../assets/types/ProfileType"

export const useEditProfileLogic = () =>{

    const profileContext = useContext(ProfileContext),
         loginContext = useContext(LoginContext),
         { processFile } = useUploadFile()

    if(!loginContext || !profileContext){
        
        throw new Error("useEditProfile must be used within a LoginProvider and ProfileProvider")

    }

    const { nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, medicalHistoryValue, residenceValue, stateValue, cityValue, countryValue, hospitalLocationValue, hospitalValue, licenseCertificate, genderValue, dateOfBirthValue, profile
    } = profileContext

    const { userType } = loginContext

    const hasProfileChanged = useCallback((profile: ProfileType) =>{
        
        if(!profile) return false

        const filesChanged = (profileImage instanceof File) || (userType === "doctor" && (coverImage instanceof File || licenseCertificate instanceof File))

        if(filesChanged) return true

        const currentProfileData ={

            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            gender: genderValue,
            dateOfBirth: dateOfBirthValue,
            residence: residenceValue,
            city: cityValue,
            state: stateValue,
            country: countryValue,
            medicalHistory: medicalHistoryValue,
            speciality: specialityValue,
            education: educationValue,
            experience: experienceValue,
            certifications: certificationsValue,
            aboutValue: aboutValue,
            fees: feesValue,
            hospitalLocation: hospitalLocationValue,
            hospital: hospitalValue,
            licenseCertificate,
            profileImage,
            coverImage

        }

        const basicChanged = currentProfileData.name !== profile.name || currentProfileData.email !== profile.addressValue.email || currentProfileData.phone !== profile.addressValue.phone || currentProfileData.gender !== profile.gender || currentProfileData.dateOfBirth !== profile.dateOfBirth 

        if(basicChanged) return true

        if(userType === "doctor"){

            const doctorFieldsChanged = currentProfileData.speciality !== (profile as any).speciality ||
                                        currentProfileData.experience !== (profile as any).experience ||
                                        currentProfileData.aboutValue !== (profile as any).aboutValue || currentProfileData.fees !== (profile as any).fees || currentProfileData.hospital !== (profile as any).address.hospital || currentProfileData.hospitalLocation !== (profile as any).address.hospitalLocation,
                    doctorArrayFieldsChanged = !isEqual(currentProfileData.education, (profile as any).education) || !isEqual(currentProfileData.certifications, (profile as any).certifications)

            return doctorFieldsChanged || doctorArrayFieldsChanged
                                    

        }else{

            const patientFieldsChanged = currentProfileData.medicalHistory !== (profile as any).medicalHistory || currentProfileData.residence !== (profile as any).address.residence || currentProfileData.city !== (profile as any).address.city || currentProfileData.state !== (profile as any).address.state || currentProfileData.country !== (profile as any).address.country

            return patientFieldsChanged

        }

        
    }, [ profile, userType, nameValue, emailValue, phoneValue, genderValue, dateOfBirthValue, residenceValue, cityValue, stateValue, countryValue, medicalHistoryValue, specialityValue, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, hospitalLocationValue, hospitalValue, licenseCertificate, profileImage, coverImage ])

    return { hasProfileChanged, profile, processFile }

}
