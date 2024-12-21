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
               [currentValues] = useState({

                image: userData.image,
                name: userData.name,
                email: userData.address.email,
                phone: userData.address.phone
    
            })    

    
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
               currentValues.image !== userData.image ||
               currentValues.name !== userData.name ||
               currentValues.email !== userData.address.email ||
               currentValues.phone !== userData.address.phone

        console.log(hasChanges)

        setIsChanged(hasChanges)
    
    }, [userData, userData.image, nameValue, emailValue, phoneValue])

    return { nameValue, emailValue, phoneValue, handleInputChange, handleImageChange, isChanged  }

}