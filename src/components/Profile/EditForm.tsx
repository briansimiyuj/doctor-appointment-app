import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import EditFormInput from "./EditFormInput"
import { useEditFormInput } from "../../hooks/useEditFormInput"
import { assets } from "../../assets/frontend/assets"

const EditForm: React.FC = () =>{

    const fileInputRef = useRef<HTMLInputElement>(null),
          coverImageRef = useRef<HTMLInputElement>(null),
          context = useContext(ProfileContext)

    if(!context) return null

    const { profile } = context,
          editFormInput = useEditFormInput()

    if(!editFormInput) return null

    const { handleImageChange, isChanged } = editFormInput


    const handleImageClick = () =>{

        fileInputRef.current?.click()

    }


    const handleCoverImageClick = () =>{

        coverImageRef.current?.click()

    }


    return(

        <>

            <form className="flex flex-col gap-4 items-center justify-center w-full">

                <div className="w-full">

                    <img 
                        src={profile?.image}
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


                {
                
                    profile?.type === "doctor" &&(

                        <div className="w-full">

                            <h2 className="text-neutral-500 underline mt-3 mb-3">COVER IMAGE</h2>

                            <img 
                                src={profile.coverImage || assets.uploadIcon}
                                alt="Cover Image" 
                                className="w-full h-30 object-cover cursor-pointer"
                                onClick={handleCoverImageClick}
                            />

                            <input 
                                type="file" 
                                name="coverImage" 
                                accept="image/*"
                                hidden
                                ref={coverImageRef}
                                onChange={handleImageChange} 
                            />

                        </div>

                    )
                    
                }


                <EditFormInput/>


                <button
                    className={`${isChanged 
                        ? 'bg-primary-bg text-secondary-bg cursor-pointer' 
                        : 'bg-gray-500 text-secondary-bg cursor-not-allowed'
                    } px-8 py-4 mt-3 rounded-md`}
                    type="submit"
                    disabled={!isChanged}
                >Save Changes</button>

            </form>

        </>

    )

}

export default EditForm