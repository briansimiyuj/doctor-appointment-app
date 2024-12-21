import { useContext, useEffect, useState } from "react"
import { UserData } from "../assets/ProfileType"
import { ProfileContext } from "../context/ProfileContext"

export const useEditFormInput = ()=>{

    const context = useContext(ProfileContext),
          [isChanged, setIsChanged] = useState<boolean>(false)

    if(!context) return null

    const { userData, setUserData } = context

    const [nameValue, setNameValue] = useState(userData.name),
              [emailValue, setEmailValue] = useState(userData.address.email),  
              [phoneValue, setPhoneValue] = useState(userData.address.phone),
              [formData] = useState<UserData>(userData),
              [initialData] = useState<UserData>(userData)

    
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const file = e.target.files?.[0]

        if(file){

            const reader = new FileReader()

            reader.onload = (e) =>{

                setUserData((prevData: UserData) => ({
                    ...prevData,
                    image: e.target?.result as string
                }))

            }

            reader.readAsDataURL(file)

        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, value } = e.target

        if(name === "name"){

            setNameValue(value)

            setUserData(prevData =>{

                const updatedData = { ...prevData }

                updatedData.name = value

                return updatedData

            })

        }else if(name === "email"){

            setEmailValue(value)

            setUserData(prevData =>{

                const updatedData = {
                    
                    ...prevData, 
                    
                    address:{

                        ...userData.address,
                        email: value

                    }

                }

                return updatedData

            })
            

        }else if(name === "phone"){

            setPhoneValue(value)

            setUserData(prevData =>{

                const updatedData = {
                    
                    ...prevData, 
                    
                    address:{

                        ...userData.address,
                        phone: value

                    }

                }

                return updatedData

            })

        }

    }


    useEffect(() =>{
    
       const hasChanges = 
            initialData.image !== userData.image ||
            initialData.name !== formData.name ||
            initialData.address.email !== formData.address.email ||
            initialData.address.phone !== formData.address.phone 

        setIsChanged(hasChanges)

        console.log("isChanged", isChanged)
    
    }, [userData, initialData, setIsChanged])

    return { nameValue, emailValue, phoneValue, handleInputChange, handleImageChange, isChanged  }

}