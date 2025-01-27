import { useContext, useEffect, useState } from "react"
import { ProfileType } from "../assets/types/ProfileType"
import { ProfileContext } from "../context/ProfileContext"

export const useEditFormInput = () =>{

    const context = useContext(ProfileContext),
            [isChanged, setIsChanged] = useState<boolean>(false)

    if(!context) return null

    const { profile, setProfile } = context

    const [nameValue, setNameValue] = useState(profile?.name),
          [emailValue, setEmailValue] = useState(profile?.address.email),  
          [phoneValue, setPhoneValue] = useState(profile?.address.phone),
          [currentValues] = useState({

            image: profile?.image,
            name: profile?.name,
            email: profile?.address.email,
            phone: profile?.address.phone,
            about: profile?.type === "doctor" ? profile.about : undefined,
            speciality: profile?.type === "doctor" ? profile.speciality : undefined,

        })    


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const file = e.target.files?.[0]

        if(file){

            const reader = new FileReader()

            reader.onload = (e) =>{

                setProfile((prevData: ProfileType | null) =>{

                    if (!prevData) return null

                    if (prevData.type === "doctor"){

                        return{

                            ...prevData,
                            image: e.target?.result as string,
                            type: "doctor",
                            rating: prevData.rating,
                            coverImage: prevData.coverImage

                        }

                    }

                    return{

                        ...prevData,
                        image: e.target?.result as string,
                        type: "patient"

                    }

                })

            }

            reader.readAsDataURL(file)

        }

    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const { name, value } = e.target

        if(name === "name"){

            setNameValue(value)

            setProfile((prevData: ProfileType | null) =>{

                if(!prevData) return null

                if(prevData.type === "doctor"){

                    return{

                        ...prevData,
                        name: value,
                        type: "doctor",
                        rating: prevData.rating,
                        coverImage: prevData.coverImage

                    }

                }

                return{

                    ...prevData,
                    name: value,
                    type: "patient"

                }

            })

        }else if(name === "email"){

            setEmailValue(value)

            setProfile((prevData: ProfileType | null) =>{

                if(!prevData) return null

                if(prevData.type === "doctor"){

                    return{

                        ...prevData,
                        address:{

                            ...prevData.address,
                            email: value

                        },
                        type: "doctor",
                        rating: prevData.rating,
                        coverImage: prevData.coverImage
                    }

                }

                return{

                    ...prevData,
                    address:{

                        ...prevData.address,
                        email: value

                    },

                    type: "patient"

                }

            })

        }else if(name === "phone"){

            setPhoneValue(value)

            setProfile((prevData: ProfileType | null) =>{

                if(!prevData) return null

                if(prevData.type === "doctor"){

                    return{

                        ...prevData,
                        address:{

                            ...prevData.address,
                            phone: value

                        },
                        type: "doctor",
                        rating: prevData.rating,
                        coverImage: prevData.coverImage
                    }

                }

                return{

                    ...prevData,
                    address:{

                        ...prevData.address,
                        phone: value

                    },
                    type: "patient"

                }

            })

        }else if(name === "about"){

            setProfile((prevData: ProfileType | null) =>{

                if(!prevData) return null

                if(prevData.type === "doctor"){

                    return{

                        ...prevData,
                        about: value,
                        type: "doctor",
                        rating: prevData.rating,
                        coverImage: prevData.coverImage

                    }

                }

                return prevData

            })

        }else if(name === "speciality"){

            setProfile((prevData: ProfileType | null) =>{

                if(!prevData) return null

                if(prevData.type === "doctor"){

                    return{

                        ...prevData,
                        speciality: value,
                        type: "doctor",
                        rating: prevData.rating,
                        coverImage: prevData.coverImage

                    }

                }


                return prevData

            }

        )}

    }


    useEffect(() =>{

        const hasChanges =
            currentValues.image !== profile?.image ||
            currentValues.name !== profile?.name ||
            currentValues.email !== profile?.address.email ||
            currentValues.phone !== profile?.address.phone ||
            currentValues.about !== (profile?.type === "doctor" ? profile?.about : undefined)

        setIsChanged(hasChanges)

    }, [profile, profile?.image, nameValue, emailValue, phoneValue])

    return { nameValue, emailValue, phoneValue, handleInputChange, handleImageChange, isChanged  }

}