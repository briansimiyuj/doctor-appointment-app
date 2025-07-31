import { useContext, useMemo, useState } from "react"
import { LoginContext } from "../context/LoginContext"

export const useAddFormInput = () =>{

    const loginContext = useContext(LoginContext)

    if(!loginContext) return null

    const { userType } = loginContext 

    const [nameValue, setNameValue] = useState(''),
          [emailValue, setEmailValue] = useState(''),
          [phoneValue, setPhoneValue] = useState(''),
          [specialityValue, setSpecialityValue] = useState(''),
          [aboutValue, setAboutValue] = useState(''),
          [experienceValue, setExperienceValue] = useState(''),
          [feesValue, setFeesValue] = useState(''),
          [medicalHistoryValue, setMedicalHistoryValue] = useState(''),
          [imageValue, setImageValue] = useState<File | null>(null),
          [coverImageValue, setCoverImageValue] = useState<File | null>(null)


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{

        const { name, value, type } = e.target

        if(type === "file"){

            const files = (e.target as HTMLInputElement).files

            if(files && files.length > 0){

                if(name === "profileImage"){

                    setImageValue(files[0])

                }else if(name === "coverImage"){

                    setCoverImageValue(files[0])

                }

            }   

        }    

        switch(name){
            
            case "name":
                setNameValue(value)
                break
            case "email":
                setEmailValue(value)
                break
            case "phone":
                setPhoneValue(value)
                break
            case "speciality":
                setSpecialityValue(value)
                break
            case "about":
                setAboutValue(value)
                break
            case "experience":
                setExperienceValue(value)
                break
            case "fees":
                setFeesValue(value)
                break
            case "medicalHistory":
                setMedicalHistoryValue(value)
                break
            default:
                break

        }

    }

    const readyToSubmit = useMemo(() => {
  
        if(!nameValue.trim() || !emailValue.trim() || !phoneValue.trim() || !imageValue ) return false

        if(userType === "doctor") {
            
            return specialityValue.trim() && aboutValue.trim() && experienceValue.trim() && feesValue.trim() && !coverImageValue
        }else{

            return medicalHistoryValue.trim()

        }
    
    }, [ nameValue, emailValue, phoneValue, imageValue, coverImageValue, userType, specialityValue, aboutValue, experienceValue, feesValue, medicalHistoryValue ])


    return{ 

        emailValue,
        phoneValue,
        nameValue,
        specialityValue,
        aboutValue,
        experienceValue,
        feesValue,
        medicalHistoryValue,
        imageValue,
        coverImageValue,
        handleInputChange,
        readyToSubmit

    }

}
