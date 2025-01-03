import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import EditFormInput from "./EditFormInput"
import { useEditFormInput } from "../../hooks/useEditFormInput"

const EditForm: React.FC = ()=>{

    const fileInputRef = useRef<HTMLInputElement>(null),
          context = useContext(ProfileContext)
          if(!context) return null

          const { userData } = context,
                editFormInput = useEditFormInput()

          if(!editFormInput) return null

          const { handleImageChange, isChanged } = editFormInput

    
    const handleImageClick = () =>{
    
       fileInputRef.current?.click()
    
    }


    return(

        <>

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

              
                <EditFormInput/>           


                <button
                    className={`${isChanged
                        ? 'bg-primary-bg text-secondary-bg cursor-pointer' : 'bg-gray-500 text-secondary-bg cursor-not-allowed' 
                    }  px-8 py-4 mt-3 rounded-md`}
                    type="submit"
                    disabled={!isChanged}
                >Save</button>

            </form>

        </>

    )

}

export default EditForm