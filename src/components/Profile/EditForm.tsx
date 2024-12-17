import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const EditForm: React.FC = ()=>{

    const context = useContext(ProfileContext),
          fileInputRef = useRef<HTMLInputElement>(null)

    if(!context) return null

    const { userData } = context

    
    const handleImageClick = () =>{
    
       fileInputRef.current?.click()
    
    }

    return(

        <div className="bg-green-500">

            <form action="" className="flex flex-col gap-4 items-center justify-center w-full">

                <div className="w-full">

                   <img 
                        src={userData.image}
                        alt="current user image" 
                        className="w-24 h-24 rounded-full object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />

                    <input 
                        type="file" 
                        name="profileImage" 
                        accept="image/*"
                        hidden
                        ref={fileInputRef}
                    />

                </div>

            </form>

        </div>

    )

}

export default EditForm