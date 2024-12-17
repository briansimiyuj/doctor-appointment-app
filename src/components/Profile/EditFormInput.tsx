import { useState } from "react"
import { UserData } from "../../assets/ProfileType"

type EditFormInputProps ={

    userData: UserData,
    setUserData: React.Dispatch<React.SetStateAction<UserData>>

}

const EditFormInput: React.FC<EditFormInputProps> = ({ userData, setUserData })=>{

    const [nameValue, setNameValue] = useState(userData.name),
          [emailValue, setEmailValue] = useState(userData.address.email),  
          [phoneValue, setPhoneValue] = useState(userData.address.phone)


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, value } = e.target

        if(name === "name"){

            setNameValue(value)

            setUserData(prevData =>{

                const updatedData = { ...prevData }

                updatedData.name = value

                console.log(updatedData.name)

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

                console.log(updatedData.address.email)

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

                console.log(updatedData.address.phone)

                return updatedData

            })

        }

    }

    return(

        <div className="flex flex-col gap-2 w-full">
        
            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="name" className="font-semibold">Name:</label>

                <input 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={nameValue}
                    onChange={handleInputChange}                 
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="email" className="font-semibold">Email:</label>

                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={emailValue}
                    onChange={handleInputChange}
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="phone" className="font-semibold">Phone:</label>

                <input 
                    type="text"
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={phoneValue} 
                    onChange={handleInputChange}
                />

            </div>
        
        </div>

    )

}

export default EditFormInput