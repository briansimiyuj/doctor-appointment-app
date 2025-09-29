import { useCallback, useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import { ProfileContext } from "../context/ProfileContext"
import { useUploadFile } from "./useUploadFile"
import { useEditProfileLogic } from "./useEditProfileLogic"
import { useToast } from "./useToast"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { ProfileType } from "../assets/types/ProfileType"
import { useDoctorContext } from "../context/DoctorContext"

export const useEditProfile = () =>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext){

        throw new Error("useEditProfile must be used within a LoginProvider and ProfileProvider")

    }

    const { nameValue, emailValue, phoneValue, specialityValue, profileImage, coverImage, educationValue, experienceValue,  certificationsValue, aboutValue, setProfile, feesValue, medicalHistoryValue,  residenceValue, stateValue, cityValue, countryValue,  hospitalLocationValue, hospitalValue, licenseCertificate,  genderValue, dateOfBirthValue, setShowModal, profile, setLoading, readyToSubmit } = profileContext,
          { userType, setName, userID } = loginContext,
          { uploadAndProcessFile } = useUploadFile(),
          { hasProfileChanged } = useEditProfileLogic(),
          { updateDoctor } = useDoctorContext(),
          { showToast } = useToast()

    const editProfile = useCallback(async () =>{
        
        if(!profile || !userID) return null
        
        if(!hasProfileChanged(profile)) return null

        if(!readyToSubmit){

            showToast("Please edit at least one field to update the profile", "error")

            return null

        }
        
        setLoading(true)

        try{
            
            const profileImageDoc = profileImage instanceof File ? await uploadAndProcessFile(profileImage) : profile.profileImage,
                  coverImageDoc = userType === "doctor" && coverImage instanceof File ? await uploadAndProcessFile(coverImage) : (profile as any).coverImage,
                  licenseCertificateDoc = userType === "doctor" && licenseCertificate instanceof File ? await uploadAndProcessFile(licenseCertificate) : (profile as any).licenseCertificate
            
            let updatedProfile: ProfileType
    
            if(userType === "doctor"){

                updatedProfile ={

                    ...profile,
                    name: nameValue,
                    speciality: specialityValue || "", 
                    education: educationValue || [], 
                    experience: experienceValue || "", 
                    about: aboutValue || "", 
                    fees: feesValue || 0, 
                    certifications: certificationsValue || [], 
                    address:{
                        ...profile.address,
                        hospital: hospitalValue || "", 
                        hospitalLocation: hospitalLocationValue || "" 
                    },
                    coverImage: coverImageDoc || null, 
                    profileImage: profileImageDoc || null, 
                    licenseCertificate: licenseCertificateDoc || null, 
                    updatedAt: new Date().toISOString(),

                } as unknown as ProfileType

            }else{ 

                updatedProfile ={

                    ...profile,
                    name: nameValue,
                    profileImage: profileImageDoc || null,
                    address:{
                        ...profile.address,
                        city: cityValue,
                        state: stateValue,
                        country: countryValue,
                        residence: residenceValue,
                        email: emailValue,
                        phone: phoneValue
                    },
                    gender: genderValue,
                    dateOfBirth: dateOfBirthValue,
                    medicalHistory: medicalHistoryValue,
                    updatedAt: new Date().toISOString()

                } as unknown as ProfileType
                 
            }
            
            const profileDoc = doc(db, "profiles", userID),
                  doctorDoc = doc(db, "doctors", userID),
                  patientDoc = doc(db, "patients", userID)

            await updateDoc(profileDoc, updatedProfile as any)

            if(userType === "patient") await updateDoc(patientDoc, updatedProfile as any)

            if(userType === "doctor"){

                await updateDoc(doctorDoc, updatedProfile as any)

                updateDoctor(userID, updatedProfile as any)

            }
            
            setProfile(updatedProfile)

            setName(updatedProfile.name)
            
            setShowModal(false)

            showToast("Profile updated successfully", "success")

            return updatedProfile

        }catch(err){

            console.error('Error updating profile:', err)

            showToast("Error updating profile", "error")

            return null

        }finally{

            setLoading(false)
        }
            


    }, [ profile, userID, nameValue, specialityValue, profileImage, coverImage, educationValue, experienceValue, certificationsValue, aboutValue, feesValue, medicalHistoryValue, hospitalLocationValue, hospitalValue, licenseCertificate, userType, uploadAndProcessFile, setShowModal, hasProfileChanged, setProfile, setName, setLoading ])
    
    const handleEditProfile = async(e: React.FormEvent<HTMLFormElement>) =>{
    
        e.preventDefault()

        await editProfile()
    
    }

    return { editProfile: handleEditProfile }

}