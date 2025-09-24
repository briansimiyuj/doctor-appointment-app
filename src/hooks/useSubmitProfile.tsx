import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { v4 as uuidv4 } from 'uuid'
import { useUploadFile } from "./useUploadFile"
import { useDoctorContext } from "../context/DoctorContext"
import { DoctorType } from "../assets/types/DoctorType"
import { DocumentType } from "../assets/types/DocumentType"

export const useSubmitProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) throw new Error("useSubmitProfile must be used within a LoginProvider and ProfileProvider")

    const { 
        nameValue, emailValue, phoneValue, specialityValue, experienceValue, profileImage, coverImage, 
        certificationsValue, aboutValue, feesValue, educationValue, medicalHistoryValue, setShowModal, 
        licenseCertificate, hospitalValue, residenceValue, cityValue, stateValue, countryValue, 
        genderValue, dateOfBirthValue, hospitalLocationValue, setProfile 
    } = profileContext,
          { userType, userID, setUserID } = loginContext,
          { addDoctor } = useDoctorContext(),
          { processFile } = useUploadFile(),
          resolvedUserID = userID ?? `${userType}-${uuidv4()}`

    if(!userID) setUserID(resolvedUserID)

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

        if(!genderValue) throw new Error("Please select a gender")  
        if(!userType || (userType !== "doctor" && userType !== "patient")) throw new Error("Invalid user type")

        const profileImageDoc = profileImage instanceof File ? await processFile(profileImage) : null,
              coverImageDoc = coverImage instanceof File ? await processFile(coverImage) : null,
              licenseCertificateDoc = licenseCertificate instanceof File ? await processFile(licenseCertificate) : null

        let profileData: any

        if(userType === "doctor"){

            profileData ={

                name: nameValue!,
                addressValue:{
                    email: emailValue!,
                    phone: phoneValue!,
                    residence: residenceValue!,
                    city: cityValue!,
                    state: stateValue!,
                    country: countryValue!
                },
                gender: genderValue,
                dateOfBirth: dateOfBirthValue!,
                type: "doctor",
                profileImage: profileImage ? profileImageDoc : null,
                coverImage: coverImage ? coverImageDoc : null,
                speciality: specialityValue!,
                rating: 0,
                licenseCertificate: licenseCertificateDoc!,
                hospital: hospitalValue!,
                hospitalLocation: hospitalLocationValue!,
                certifications: certificationsValue!,
                about: aboutValue!,
                experience: experienceValue!,
                fees: feesValue!,
                education: educationValue!,
                createdAt: new Date().toISOString()

            }
    
        }else{

            profileData ={

                name: nameValue!,
                addressValue:{
                    email: emailValue!,
                    phone: phoneValue!,
                    residence: residenceValue!,
                    city: cityValue!,
                    state: stateValue!,
                    country: countryValue!
                },
                gender: genderValue,
                dateOfBirth: dateOfBirthValue!,
                type: "patient",
                profileImage: profileImage ? profileImageDoc : null,
                medicalHistory: medicalHistoryValue!,
                createdAt: new Date().toISOString()
                
            }
        
        }

        const doctorData: DoctorType ={

            _id: resolvedUserID,
            name: profileData.name,
            image: profileData.profileImage?.url || "",
            speciality: profileData.speciality,
            education: Array.isArray(profileData.education) ? profileData.education : [],
            experience: profileData.experience,
            about: profileData.about,
            fees: profileData.fees,
            coverImage: profileData.coverImage as DocumentType,
            rating: profileData.rating,
            reviews: profileData.reviews,
            address:{

                hospital: profileData.hospital,
                hospitalLocation: profileData.hospitalLocation
                
            }

        }

        setProfile(profileData)

        if(userType === "doctor") addDoctor(doctorData)

        localStorage.setItem("doctors", JSON.stringify(doctorData))

        localStorage.setItem(`profileData-${userID}`, JSON.stringify(profileData))    

        setShowModal(false)

        console.log('Profile submitted successfully')

        return profileData

    }

    return { submitProfile }

}
