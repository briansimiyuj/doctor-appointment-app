import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const EditForm: React.FC = ()=>{

    const context = useContext(ProfileContext),
          fileInputRef = useRef<HTMLInputElement>(null)

    if(!context) return null

    const { userData, setUserData } = context

    
    const handleImageClick = () =>{
    
       fileInputRef.current?.click()
    
    }


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const file = e.target.files?.[0]

        if(file){

            const reader = new FileReader()

            reader.onload = (e) =>{

                setUserData(prevData=>({

                    ...prevData,
                    image: e.target?.result as string

                }))

            }

            reader.readAsDataURL(file)

        }

    }

    return(

        <div className="bg-green-500">

            <form action="" className="flex flex-col gap-4 items-center justify-center w-full">

                <div className="w-full">

                   <img 
                        src={userData.image}
                        alt="current user image" 
                        className="w-36 h-36 rounded-full object-cover cursor-pointer mx-auto"
                        onClick={handleImageClick}
                    />

                    <input 
                        type="file" 
                        name="profileImage" 
                        accept="image/*"
                        hidden
                        ref={fileInputRef}
                        onChange={handleImageChange} 
                    />

                </div>

            </form>

        </div>

    )

}

export default EditForm