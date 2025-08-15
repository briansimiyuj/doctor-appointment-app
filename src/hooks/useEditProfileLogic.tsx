// useEditProfileLogic.ts
import { useContext, useMemo } from "react"
import { ProfileContext } from "../context/ProfileContext"
import { LoginContext } from "../context/LoginContext"
import { useUploadFile } from "./useUploadFile"

export const useEditProfileLogic = () =>{

    const profileContext = useContext(ProfileContext),
         loginContext = useContext(LoginContext),
         { processFile } = useUploadFile()

    if(!loginContext || !profileContext){
        
        throw new Error("useEditProfile must be used within a LoginProvider and ProfileProvider")

    }

    const { nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, medicalHistoryValue, residenceValue, stateValue, cityValue, countryValue, hospitalLocationValue, hospitalValue, licenseCertificate, genderValue, dateOfBirthValue
    } = profileContext

    const { userType } = loginContext,
          keys = Object.keys(localStorage),
          profileKey = keys.find(key => key.startsWith("profileData-")),
          savedProfile = profileKey
        ? JSON.parse(localStorage.getItem(profileKey)!)
        : null

    const hasProfileChanged = useMemo(() =>{
        
        if(!savedProfile) return false

        const currentValues: any = { nameValue, emailValue, phoneValue, genderValue, dateOfBirthValue, residenceValue, cityValue, stateValue, countryValue, medicalHistoryValue, specialityValue, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, hospitalLocationValue, hospitalValue, licenseCertificate, profileImage, coverImage }

        const deepEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b),
              getValue = (obj: any, path: string) => path.split(".").reduce((o, key) => o?.[key], obj)

        const basicFields =[

            ["name", "nameValue"],
            ["address.email", "emailValue"],
            ["address.phone", "phoneValue"],
            ["dateOfBirth", "dateOfBirthValue"],
            ["gender", "genderValue"],
            ["profileImage", "profileImageValue"]

        ]

        const checkBasic = basicFields.some(([path, value]) => currentValues[value] !== getValue(savedProfile, path))

        if(userType === "doctor"){
        
            const doctorFields =[

                ["fees", "feesValue"],
                ["speciality", "specialityValue"],
                ["experience", "experienceValue"],
                ["about", "aboutValue"],
                ["hospital", "hospitalValue"],
                ["hospitalLocation", "hospitalLocationValue"]

            ]

            const doctorArrayFields =[

                ["education", "educationValue"],
                ["certifications", "certificationsValue"]

            ]

            const doctorFileFields =[
                
                ["licenseCertificate", "licenseCertificate"],
                ["coverImage", "coverImage"]

            ]

            const checkDoctor = checkBasic || doctorFields.some(([path, value]) => currentValues[value] !== savedProfile[path]) ||             
                  doctorArrayFields.some(([path, value]) => !deepEqual(currentValues[value], savedProfile[path])) ||
                  doctorFileFields.some(([path, value]) => currentValues[value] && savedProfile[path] && (currentValues[value] instanceof File || savedProfile[path].content) && currentValues[value]?.content !== savedProfile[path]?.content)

            return checkDoctor

        }else{

            const patientFields =[

                ["address.residence", "residenceValue"],
                ["address.city", "cityValue"],
                ["address.state", "stateValue"],
                ["address.country", "countryValue"],
                ["medicalHistory", "medicalHistoryValue"]

            ]

            const checkPatient = checkBasic || patientFields.some( ([path, value]) => currentValues[value] !== getValue(savedProfile, path) )

            return checkPatient

        }

    }, [ savedProfile, userType, nameValue, emailValue, phoneValue, genderValue, dateOfBirthValue, residenceValue, cityValue, stateValue, countryValue, medicalHistoryValue, specialityValue, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, hospitalLocationValue, hospitalValue, licenseCertificate, profileImage, coverImage ])

    return { hasProfileChanged, savedProfile, profileKey, processFile }

}
