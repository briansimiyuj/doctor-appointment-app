import { useContext, useRef } from "react"
import { assets } from "../../../../assets/frontend/assets"
import { LoginContext } from "../../../../context/LoginContext"
import AddFormInput from "./AddFormInput"
import { ProfileContext } from "../../../../context/ProfileContext"
import ModalFooter from "./ModalFooter"
import { useSubmitProfile } from "../../../../hooks/useSubmitProfile"
import { useFileSelection } from "../../../../hooks/useFileSelection"

const AddForm: React.FC = ()=>{

    const fileInputRef = useRef<HTMLInputElement>(null),
          coverImageRef = useRef<HTMLInputElement>(null),
          loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) return null

    const { userType } = loginContext,
          { profileImage, setProfileImage, setCoverImage, coverImage } = profileContext,
          { handleFileSelection } = useFileSelection(),
          { submitProfile } = useSubmitProfile()

    const handleCoverImageInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    
        const file = e.target.files?.[0]

        if(!file) return

        handleFileSelection(e, _doc =>{

            setCoverImage(file)

            console.log('Cover Image set:', file)

        })
    
    }

    const handleProfileImageInput = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const file = e.target.files?.[0]

        if(!file) return

        handleFileSelection(e, _doc =>{

            setProfileImage(file)

            console.log('Profile Image set:', file)

        })

    }

    return(

        <form 
            className="flex flex-col gap-8 items-center justify-center w-full max-w-3xl mx-auto p-6"
            onSubmit={submitProfile}
        >

            <div className="w-full flex flex-col items-center gap-4">

                <h2 className="text-neutral-500 font-semibold text-lg mb-4">Profile Image:</h2>

                <div 
                    className="relative group rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}                    
                >

                    <img 
                        src={
                            profileImage instanceof File ? URL.createObjectURL(profileImage) : profileImage?.content || assets.avatar
                        }
                        alt="Profile Image" 
                        className="w-full h-24 sm:h-24 rounded-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-gray-400 dark:bg-gray-600"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                        <span className="text-white dark:text-white text-sm">Upload Photo</span>

                    </div>

                </div>

                <input
                    type="file"
                    name="profileImage"
                    hidden
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleProfileImageInput}
                />

            </div>

            {

                userType === "doctor" &&(

                    <div className="w-full">

                        <h2 className="text-neutral-500 font-semibold text-lg mb-4">Cover Image</h2>

                        <div 
                            className="relative group rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => coverImageRef.current?.click()}
                        >

                            <img 
                                src={
                                    coverImage instanceof File ? URL.createObjectURL(coverImage) : coverImage?.content || assets.avatar
                                }
                                alt="cover image" 
                                className="w-full h-12 sm:h-24 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-gray-400 dark:bg-gray-600"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                                <span className="text-white dark:text-white text-sm">Upload Cover</span>

                            </div>    
                            
                        </div>  

                        <input
                            type="file"
                            hidden
                            name="coverImage"
                            accept="image/*"
                            ref={coverImageRef}
                            onChange={handleCoverImageInput}
                        />                

                    </div>

                )

            }

            <AddFormInput/>

            <ModalFooter/>

        </form>

    )

}

export default AddForm